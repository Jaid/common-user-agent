type ResponseJson = {
  browser: 'chrome'
  channel: string
  platform: 'windows'
  version: string
}

const userAgentUtilitiesResponse = await fetch('https://raw.githubusercontent.com/chromium/chromium/refs/heads/main/components/embedder_support/user_agent_utils.cc')
const userAgentUtilitiesText = await userAgentUtilitiesResponse.text()
const getChromeVersion = async () => {
  const response = await fetch('https://raw.githubusercontent.com/chromium/chromium/refs/heads/main/testing/perf/cbb_ref_info/chrome/stable/windows.json')
  const json = await response.json() as ResponseJson
  const pattern = /^(?<major>\d+)\.(?<minor>\d+)\.(?<build>\d+)\.(?<patch>\d+)$/
  const match = pattern.exec(json.version)
  return {
    major: Number.parseInt(match!.groups!.major),
    minor: Number.parseInt(match!.groups!.minor),
    build: Number.parseInt(match!.groups!.build),
    patch: Number.parseInt(match!.groups!.patch),
  }
}
const getWebKitVersion = async () => {
  const pattern = / AppleWebKit\/(?<major>\d+)\.(?<minor>\d+) /
  const match = pattern.exec(userAgentUtilitiesText)
  return {
    major: Number.parseInt(match!.groups!.major),
    minor: Number.parseInt(match!.groups!.minor),
  }
}
const getMozillaVersion = async () => {
  const pattern = /\bMozilla\/(?<major>\d+)\.(?<minor>\d+) /
  const match = pattern.exec(userAgentUtilitiesText)
  return {
    major: Number.parseInt(match!.groups!.major),
    minor: Number.parseInt(match!.groups!.minor),
  }
}
const dump = {
  chrome: await getChromeVersion(),
  mozilla: await getMozillaVersion(),
  webkit: await getWebKitVersion(),
}
const yamlText = Bun.YAML.stringify(dump, null, 2)
await Bun.write('./src/versions.yml', yamlText)
