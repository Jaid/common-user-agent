import versions from './versions.yml'

const webkitVersion = `${versions.webkit.major}.${versions.webkit.minor}`
const chromeVersion = `${versions.chrome.major}.${versions.chrome.minor}.${versions.chrome.build}.${versions.chrome.patch}`
const mozillaVersion = `${versions.mozilla.major}.${versions.mozilla.minor}`
export default `Mozilla/${mozillaVersion} (Windows NT 10.0; Win64; x64) AppleWebKit/${webkitVersion} (KHTML, like Gecko) Chrome/${chromeVersion} Safari/${webkitVersion}`
