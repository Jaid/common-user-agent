interface Versions {
  chrome: {
    major: number
    minor: number
  }
  mozilla: {
    major: number
    minor: number
  }
  webkit: {
    major: number
    minor: number
  }
}
declare module '*.yml' {
  const type: Versions
  export default type
}
