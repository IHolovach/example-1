const getMobileDetect = (userAgent: NavigatorID['userAgent']) => {
  const isAndroid = Boolean(userAgent.match(/Android/i))
  const isIOS = Boolean(userAgent.match(/iPhone|iPod/i))
  const isMacOS = Boolean(userAgent.match(/Mac OS/i))
  const isIPad = Boolean(userAgent.match(/iPad/i))
  const isIPhone = Boolean(userAgent.match(/iPhone/i))
  const isOpera = Boolean(userAgent.match(/Opera Mini/i))
  const isSafari = Boolean(userAgent.match(/Safari/i))
  const isAgentTablet = Boolean(userAgent.match(/tablet/i))
  const isIOSTablet =
    Boolean(userAgent.match(/iPad|Intel Mac/i)) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
  const isWindows = Boolean(userAgent.match(/IEMobile/i))
  const isSSR = Boolean(userAgent.match(/SSR/i))

  const isMobile = Boolean(isAndroid || isIOS || isOpera || isWindows)
  const isTablet = Boolean(isIPad || isAgentTablet)
  const isDesktop = Boolean(!isMobile && !isSSR)

  return {
    isMobile,
    isTablet,
    isDesktop,
    isAndroid,
    isIPad,
    isIPhone,
    isIOS,
    isMacOS,
    isSafari,
    isIOSTablet,
    isSSR
  }
}
export const useMobileDetect = () => {
  const userAgent =
    typeof navigator === 'undefined' ? 'SSR' : navigator.userAgent

  return getMobileDetect(userAgent)
}

export default useMobileDetect
