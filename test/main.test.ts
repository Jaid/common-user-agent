import {expect, it} from 'bun:test'

import {getMainModuleDefault} from 'zeug'

const commonUserAgent = await getMainModuleDefault<typeof import('../src/main.ts')>('src/main.ts')
it('should run', () => {
  expect(commonUserAgent).toMatch(/^Mozilla\/\d+\.0 /)
})
