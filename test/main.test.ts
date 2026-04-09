import {expect, it} from 'bun:test'

const {default: commonUserAgent} = await import('#src/main.ts')
it('should run', () => {
  expect(commonUserAgent).toMatch(/(^| )Mozilla\/\d+/)
  expect(commonUserAgent).toMatch(/(^| )AppleWebKit\/\d+/)
  expect(commonUserAgent).toMatch(/(^| )Chrome\/\d+/)
  expect(commonUserAgent).toMatch(/(^| )Safari\/\d+/)
})
