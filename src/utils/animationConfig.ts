export const mobileAnimationConfig = {
  duration: 0.2,
  delay: 0,
  ease: "easeOut"
};

export const desktopAnimationConfig = {
  duration: 0.5,
  delay: 0.2,
  ease: "easeOut"
};

export const useAnimationConfig = (isMobile: boolean) => {
  return isMobile ? mobileAnimationConfig : desktopAnimationConfig;
}; 