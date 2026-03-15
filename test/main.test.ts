import {expect, it} from 'bun:test'

import {getMainModuleDefault} from 'zeug'

const commonUserAgent = await getMainModuleDefault<typeof import('../src/main.ts')>('src/main.ts')
it('should run', () => {
  expect(commonUserAgent).toMatch(/(^| )Mozilla\/\d+/)
  expect(commonUserAgent).toMatch(/(^| )AppleWebKit\/\d+/)
  expect(commonUserAgent).toMatch(/(^| )Chrome\/\d+/)
  expect(commonUserAgent).toMatch(/(^| )Safari\/\d+/)
})
