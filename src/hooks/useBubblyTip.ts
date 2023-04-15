import {
  mountAnimateSelector,
  unmountAnimateSelector,
} from "../modules/bubblyTipAnimateSelector";
import { useRef, useState } from "react";
import useDidMountEffect from "./useDidMountEffect";
import { BubblyTipAnimate, BubblyTipHandler } from "../types/bubblyTip";

const defaultTimeout = 5000;

interface BubblyTipMessageOptionsProps {
  timeout?: number;
  animation?: BubblyTipAnimate;
}

const useBubblyTip = (options?: BubblyTipMessageOptionsProps) => {
  const [push, setPush] = useState(false);
  const [isBubblyTipView, setIsBubblyTipView] = useState(false);
  const timer = useRef<any>(null); // NodeJS.Timeout
  const isWorkDone = useRef(isBubblyTipView === push);
  // TODO : 상태값으로 변경 시켜야 할듯. 여러번 클릭 이슈

  const isOptionExist = typeof options !== "undefined";

  const timeoutValue =
    options && typeof options.timeout !== "undefined" ? options.timeout : 0;

  const timeoutResult = isOptionExist ? timeoutValue : defaultTimeout;

  const animateValue =
    options && typeof options.animation !== "undefined"
      ? options.animation
      : "fade_in_out";

  const BubblyTipLifeCycle = () => {
    if (push === true && isWorkDone.current === true) {
      setIsBubblyTipView(true);
      mountAnimateSelector({
        animateValue,
      });

      timer.current = setTimeout(() => {
        setPush(false);
      }, timeoutResult);
    } else if (push === false) {
      clearTimeout(timer.current);
      unmountAnimateSelector({ setIsBubblyTipView, isWorkDone, animateValue });
    }
  };

  useDidMountEffect(BubblyTipLifeCycle, [push]);

  const msgPush = (callback: BubblyTipHandler) => {
    if (isWorkDone.current === true) {
      setPush(callback);
    }
  };

  return [isBubblyTipView, msgPush] as [typeof isBubblyTipView, typeof msgPush];
};

export default useBubblyTip;
