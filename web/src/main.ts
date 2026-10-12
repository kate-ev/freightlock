import { harbour } from './audio';
import { hex, nonce, previewClearance, previewTerms } from './crypto';
import { LEGS, freshDraft, legIndex, type ManifestDraft } from './state';
import { runDemo } from './chain';

const el = <T extends HTMLElement = HTMLElement>(id: string) => document.getElementById(id) as T;

const ui = {
  clock: el('clock'),
  voyageNo: el('voyageNo'),
  horn: el<HTMLButtonElement>('horn'),
  vessel: el('vessel'),
  stops: Array.from(el('stops').querySelectorAll<HTMLLIElement>('li')),
  consignment: el('consignment'),
  declared: el<HTMLInputElement>('declared'),
  floor: el<HTMLInputElement>('floor'),
  termsSeal: el('termsSeal'),
  clearSeal: el('clearSeal'),
  stampBox: el('stampBox'),
  stampDate: el('stampDate'),
  advance: el<HTMLButtonElement>('advance'),
  reset: el<HTMLButtonElement>('reset'),
  sail: el<HTMLButtonElement>('sail'),
  runState: el('runState'),
  runLog: el('runLog'),
};

let draft: ManifestDraft = freshDraft();
let idBytes = nonce();
let salt = nonce();
const inspectorKey = nonce();

// ---- rendering ---------------------------------------------------------

function paintVoyage(): void {
  const at = legIndex(draft.reached);
  ui.stops.forEach((li, i) => {
    li.classList.toggle('is-past', i < at);
    li.classList.toggle('is-here', i === at);
  });
  // vessel glides via a CSS custom property; transform is translate3d in CSS
  ui.vessel.style.setProperty('--leg', String(at / (LEGS.length - 1)));
  ui.stampBox.classList.toggle('is-stamped', at >= legIndex('inspection'));
  ui.stampDate.textContent = new Date().toISOString().slice(0, 10);
}

async function resealTerms(): Promise<void> {
  draft.declaredValue = Number(ui.declared.value) || 0;
  draft.gradeFloorBps = Number(ui.floor.value) || 0;
  draft.termsSeal = await previewTerms(draft.declaredValue, draft.gradeFloorBps, idBytes, salt);
  ui.termsSeal.textContent = '0x' + draft.termsSeal.slice(0, 40) + '...';
}

async function resealClearance(): Promise<void> {
  if (legIndex(draft.reached) < legIndex('customs')) {
    ui.clearSeal.textContent = '-';
    return;
  }
  draft.clearanceSeal = await previewClearance(idBytes, inspectorKey);
  ui.clearSeal.textContent = '0x' + draft.clearanceSeal.slice(0, 40) + '...';
}

function newVoyage(): void {
  draft = freshDraft();
  idBytes = nonce();
  salt = nonce();
  draft.consignment = hex(idBytes);
  ui.consignment.textContent = 'consignment 0x' + draft.consignment.slice(0, 16);
  ui.voyageNo.textContent = 'FL-' + draft.consignment.slice(0, 4).toUpperCase();
  paintVoyage();
  void resealTerms();
  void resealClearance();
}

// ---- interactions ------------------------------------------------------

ui.horn.addEventListener('click', () => {
  const on = harbour.toggle();
  ui.horn.textContent = on ? 'Horn on' : 'Horn off';
  ui.horn.setAttribute('aria-pressed', String(on));
  harbour.clank();
});

ui.advance.addEventListener('click', () => {
  const next = legIndex(draft.reached) + 1;
  if (next >= LEGS.length) {
    harbour.refuse();
    return;
  }
  draft.reached = LEGS[next];
  paintVoyage();
  void resealClearance();
  if (draft.reached === 'inspection') harbour.stamp();
  else if (draft.reached === 'settlement') harbour.arrive();
  else harbour.clank();
});

ui.reset.addEventListener('click', () => {
  harbour.clank(260);
  newVoyage();
});

for (const input of [ui.declared, ui.floor]) {
  input.addEventListener('input', () => void resealTerms());
  input.addEventListener('change', () => harbour.clank(520));
}

// ---- real contract execution ------------------------------------------

async function sail(): Promise<void> {
  ui.sail.disabled = true;
  ui.runLog.textContent = '';
  ui.runState.textContent = 'Under way - executing circuits';
  harbour.horn();
  const started = performance.now();
  try {
    await runDemo((...parts) => {
      ui.runLog.textContent += parts.map((p) => String(p)).join(' ') + '\n';
      ui.runLog.scrollTop = ui.runLog.scrollHeight;
    });
    const ms = Math.round(performance.now() - started);
    ui.runState.textContent = `Berthed - voyage settled in ${ms} ms`;
    document.body.dataset.exec = 'completed';
    draft.reached = 'settlement';
    paintVoyage();
    void resealClearance();
    harbour.arrive();
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    ui.runLog.textContent += '\nREJECTED: ' + message;
    ui.runState.textContent = 'Held at port - circuit rejected';
    document.body.dataset.exec = 'rejected: ' + message;
    harbour.refuse();
  } finally {
    ui.sail.disabled = false;
  }
}

ui.sail.addEventListener('click', () => void sail());

// ---- clock (1 Hz, text only) ------------------------------------------

const tick = () => {
  ui.clock.textContent = new Date().toISOString().slice(11, 19);
};
tick();
setInterval(tick, 1000);

newVoyage();

if (location.hash === '#run') void sail();
