export type BubblyTipHandler =
  | boolean
  | ((value: React.SetStateAction<boolean>) => boolean);

export type BubblyTipAnimate = "none" | "fade_in_out" | "slide_right";
