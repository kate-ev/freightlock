/*
 * Manifest seal previews.
 *
 * Honesty note: everything here is a SHA-256 stand-in so the manifest can show
 * a digest the instant a field changes. It is NOT the contract's
 * persistentHash and its output will not match on-chain values. The real
 * circuits run in chain.ts against the compiled contract.
 */

const enc = new TextEncoder();

export const hex = (b: Uint8Array): string =>
  b.reduce((s, x) => s + (x < 16 ? '0' : '') + x.toString(16), '');

export const nonce = (n = 32): Uint8Array => crypto.getRandomValues(new Uint8Array(n));

type Part = Uint8Array | bigint | number | string;

function encodePart(p: Part): Uint8Array {
  if (p instanceof Uint8Array) return p;
  if (typeof p === 'string') return enc.encode(p);
  const word = new Uint8Array(16);
  let v = BigInt(p);
  for (let i = 15; i >= 0; i--) {
    word[i] = Number(v & 0xffn);
    v >>= 8n;
  }
  return word;
}

/** Tag-prefixed SHA-256 over a sequence of parts. Preview only. */
export async function sealPreview(tag: string, ...parts: Part[]): Promise<string> {
  const chunks = [enc.encode(`fl/${tag}\u0000`), ...parts.map(encodePart)];
  const buf = new Uint8Array(chunks.reduce((n, c) => n + c.length, 0));
  chunks.reduce((at, c) => (buf.set(c, at), at + c.length), 0);
  return hex(new Uint8Array(await crypto.subtle.digest('SHA-256', buf)));
}

export const previewTerms = (value: number, floorBps: number, consignment: Uint8Array, salt: Uint8Array) =>
  sealPreview('terms', value, floorBps, consignment, salt);

export const previewClearance = (consignment: Uint8Array, inspector: Uint8Array) =>
  sealPreview('clearance', consignment, inspector);
