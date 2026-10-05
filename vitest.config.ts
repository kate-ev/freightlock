import { defineConfig } from 'vitest/config'

// Contract tests execute compiled circuits in Node; give proofs-free runs room.
export default defineConfig({
  test: {
    include: ['tests/contract/*.test.ts', 'tests/domain/*.test.ts'],
    environment: 'node',
    testTimeout: 30_000,
    reporters: ['verbose'],
  },
})
