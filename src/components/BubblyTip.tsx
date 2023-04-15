import React, { PropsWithChildren } from "react";
import useClientReady from "../hooks/useClientReady";
import { BubblyTipBoxDiv, BubblyTipStartPointDiv } from "./BubblyTip.style";

interface BubblyTipProps {
  push: boolean;
  marginLeft?: number;
  height?: number;
  bgColor?: string;
  color?: string;
}

/**
 * 툴팁 메시지
 *
 * 외부에서 생성하는 useBubblyTip 에 의해 라이프사이클이 관리됩니다
 * useBubblyTip 의 isBubblyTipView 가 true 가 되면 나타납니다
 * 현재는 오른쪽으로 붙는 메시지만 지원됩니다
 *
 * @param props.push : useBubblyTip 의 상태값을 받아옵니다
 * @param props.marginLeft : BubblyTip 시작점으로부터의 margin 값
 * @param props.height : BubblyTip 의 높이 값
 * @param props.bgColor : BubblyTip 의 배경색
 * @param props.color : BubblyTip 의 글자색
 * @returns
 */
const BubblyTip = (props: PropsWithChildren<BubblyTipProps>) => {
  const { children, push, marginLeft } = props;
  const { ready } = useClientReady();

  return (
    <>
      {ready && (
        <BubblyTip.StartPoint marginLeft={marginLeft}>
          {push && <BubblyTip.MsgBox {...props}>{children}</BubblyTip.MsgBox>}
        </BubblyTip.StartPoint>
      )}
    </>
  );
};

BubblyTip.defaultProps = {
  marginLeft: 12,
  height: 32,
  bgColor: "#383835",
  color: "#fff",
};

export interface StartPointProps {
  marginLeft?: number;
}

const StartPoint = ({
  children,
  marginLeft,
}: PropsWithChildren<StartPointProps>) => {
  return (
    <BubblyTipStartPointDiv className="BubblyTip" marginLeft={marginLeft}>
      {children}
    </BubblyTipStartPointDiv>
  );
};

StartPoint.defaultProps = {
  marginLeft: 12,
};

export interface MsgBoxProps {
  height?: number;
  bgColor?: string;
  color?: string;
}

const MsgBox = (props: PropsWithChildren<MsgBoxProps>) => {
  const { children } = props;
  const styledProps = {
    ...props,
  };
  delete styledProps.children;

  return (
    <BubblyTipBoxDiv className="BubblyTip__Message__Box" {...styledProps}>
      <div className="BubblyTip__EndPoint__Arrow" />
      <div className="BubblyTip__Content__Box">{children}</div>
    </BubblyTipBoxDiv>
  );
};

MsgBox.defaultProps = {
  height: 32,
  bgColor: "#383835",
  color: "#fff",
};

BubblyTip.StartPoint = React.memo(StartPoint);
BubblyTip.MsgBox = React.memo(MsgBox);

export default BubblyTip;
