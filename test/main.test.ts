import { it, expect } from "bun:test"

import {getMainModuleDefault} from 'zeug'

const commonUserAgent = await getMainModuleDefault<typeof import('../src/index.ts')>('common-user-agent')

it("should run", () => {
  expect(commonUserAgent).toBe(1) // TODO Test actual functionality
})
