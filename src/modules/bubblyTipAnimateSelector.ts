import { Dispatch, MutableRefObject, SetStateAction } from "react";
import { BubblyTipAnimate } from "../types/bubblyTip";

const fadeTime = 400;

interface MountProps {
  animateValue: BubblyTipAnimate;
}

export const mountAnimateSelector = ({ animateValue }: MountProps) => {
  const $BubblyTip = document.querySelector<HTMLDivElement>(".BubblyTip");

  if ($BubblyTip) {
    switch (animateValue) {
      case "fade_in_out": {
        $BubblyTip.style.opacity = "0";
        $BubblyTip.style.animation = `${fadeTime}ms ease-in 0s bubblytip-fadeIn`;
        $BubblyTip.style.opacity = "1";

        break;
      }

      default: {
        $BubblyTip.style.opacity = "0";
        $BubblyTip.style.animation = `${fadeTime}ms ease-in 0s bubblytip-fadeIn`;
        $BubblyTip.style.opacity = "1";

        break;
      }
    }
  }
};

interface UnmountProps {
  setIsBubblyTipView: Dispatch<SetStateAction<boolean>>;
  isWorkDone: MutableRefObject<boolean>;
  animateValue: BubblyTipAnimate;
}

export const unmountAnimateSelector = ({
  setIsBubblyTipView,
  isWorkDone,
  animateValue,
}: UnmountProps) => {
  const $BubblyTip = document.querySelector<HTMLDivElement>(".BubblyTip");

  if ($BubblyTip) {
    switch (animateValue) {
      case "fade_in_out": {
        $BubblyTip.style.animation = `${fadeTime}ms ease-in 0s bubblytip-fadeOut`;
        isWorkDone.current = false;

        setTimeout(() => {
          setIsBubblyTipView(false);
          $BubblyTip.style.removeProperty("animation");
          $BubblyTip.style.removeProperty("opacity");
          isWorkDone.current = true;
        }, fadeTime);
        break;
      }

      default: {
        $BubblyTip.style.animation = `${fadeTime}ms ease-in 0s bubblytip-fadeOut`;
        isWorkDone.current = false;

        setTimeout(() => {
          setIsBubblyTipView(false);
          $BubblyTip.style.removeProperty("animation");
          $BubblyTip.style.removeProperty("opacity");
          isWorkDone.current = true;
        }, fadeTime);
        break;
      }
    }
  }
};
