// Harbour soundboard: low freight-horn swells and steel clanks, synthesised on
// demand. Plain object of methods, lazily creating one AudioContext.

let ac: AudioContext | null = null;
let bus: GainNode | null = null;

function ctx(): { ac: AudioContext; bus: GainNode } | null {
  if (!harbour.enabled) return null;
  if (!ac) {
    ac = new AudioContext();
    bus = ac.createGain();
    bus.gain.value = 0.32;
    const comp = ac.createDynamicsCompressor();
    bus.connect(comp).connect(ac.destination);
  }
  if (ac.state === 'suspended') void ac.resume();
  return { ac, bus: bus! };
}

function noiseBuffer(a: AudioContext, seconds: number): AudioBuffer {
  const b = a.createBuffer(1, Math.ceil(a.sampleRate * seconds), a.sampleRate);
  const d = b.getChannelData(0);
  for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / d.length);
  return b;
}

export const harbour = {
  enabled: true,

  /** Two detuned sawtooths through a lowpass: a short ship horn. */
  horn(pitch = 73, length = 0.9) {
    const c = ctx();
    if (!c) return;
    const t = c.ac.currentTime;
    const lp = c.ac.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.setValueAtTime(260, t);
    lp.frequency.linearRampToValueAtTime(620, t + 0.15);
    const env = c.ac.createGain();
    env.gain.setValueAtTime(0, t);
    env.gain.linearRampToValueAtTime(0.5, t + 0.12);
    env.gain.setValueAtTime(0.5, t + length - 0.2);
    env.gain.linearRampToValueAtTime(0, t + length);
    lp.connect(env).connect(c.bus);
    for (const cents of [-9, 7]) {
      const o = c.ac.createOscillator();
      o.type = 'sawtooth';
      o.frequency.value = pitch;
      o.detune.value = cents;
      o.connect(lp);
      o.start(t);
      o.stop(t + length + 0.05);
    }
  },

  /** Band-passed noise burst plus a ringing partial: a container latch. */
  clank(ring = 410) {
    const c = ctx();
    if (!c) return;
    const t = c.ac.currentTime;
    const src = c.ac.createBufferSource();
    src.buffer = noiseBuffer(c.ac, 0.12);
    const bp = c.ac.createBiquadFilter();
    bp.type = 'bandpass';
    bp.frequency.value = 1800;
    bp.Q.value = 3;
    const ng = c.ac.createGain();
    ng.gain.value = 0.55;
    src.connect(bp).connect(ng).connect(c.bus);
    src.start(t);

    const o = c.ac.createOscillator();
    const og = c.ac.createGain();
    o.type = 'triangle';
    o.frequency.value = ring;
    og.gain.setValueAtTime(0.18, t);
    og.gain.exponentialRampToValueAtTime(0.0001, t + 0.35);
    o.connect(og).connect(c.bus);
    o.start(t);
    o.stop(t + 0.4);
  },

  /** Rubber-stamp thud for attestation. */
  stamp() {
    const c = ctx();
    if (!c) return;
    const t = c.ac.currentTime;
    const o = c.ac.createOscillator();
    const g = c.ac.createGain();
    o.type = 'sine';
    o.frequency.setValueAtTime(150, t);
    o.frequency.exponentialRampToValueAtTime(48, t + 0.18);
    g.gain.setValueAtTime(0.7, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.22);
    o.connect(g).connect(c.bus);
    o.start(t);
    o.stop(t + 0.25);
  },

  arrive() {
    this.horn(73, 0.5);
    setTimeout(() => this.horn(98, 0.8), 380);
  },

  refuse() {
    this.horn(55, 0.6);
    setTimeout(() => this.clank(220), 200);
  },

  toggle(): boolean {
    this.enabled = !this.enabled;
    if (!this.enabled && ac) void ac.suspend();
    return this.enabled;
  },
};
