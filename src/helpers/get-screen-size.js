const getScreenSize = () => {
  const screenSizes = {
    medium: '(min-width: 30em)',
    large: '(min-width: 60em)',
    xlarge: '(min-width: 80em)',
  }
  const isMedium = window.matchMedia(screenSizes.medium).matches // 480px
  const isLarge = window.matchMedia(screenSizes.large).matches // 960px
  const isXLarge = window.matchMedia(screenSizes.xlarge).matches // 1280px

  if (isXLarge) {
    return 'xlarge';
  }

  if (isLarge) {
    return 'large';
  }

  if (isMedium) {
    return 'medium';
  }

  return 'mobile'
};

export default getScreenSize
