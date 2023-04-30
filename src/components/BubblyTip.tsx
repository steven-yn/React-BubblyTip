import React, { PropsWithChildren } from "react";
import useClientReady from "../hooks/useClientReady";
import {
  getArrowPropsStyle,
  getBoxPropsStyle,
  getContentPropsStyle,
  getStartPropsStyle,
} from "./BubblyTip.style";

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
  const PropsStyle = getStartPropsStyle({ marginLeft });

  return (
    <div className="BubblyTip" style={PropsStyle}>
      {children}
    </div>
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

  // TODO: 레이아웃 변경에 따른 left 등을 계산할수 있게 해야함
  const BoxPropsStyle = getBoxPropsStyle({
    maxHeight: props.height,
  });

  // TODO: 화살표의 방향을 바꿀수 있게 해야함
  const ArrowPropsStyle = getArrowPropsStyle({
    borderRightColor: props.bgColor,
  });

  // TODO: 레이아웃 변경에 따른 left 등을 계산할수 있게 해야함
  // TODO : 최소크기값 수정되야할수도 있음
  const ContentPropsStyle = getContentPropsStyle({
    height: props.height,
    backgroundColor: props.bgColor,
    color: props.color,
  });

  return (
    <div
      className="BubblyTip__Message__Box"
      data-testid="BubblyTip__Message__Box"
      style={BoxPropsStyle}
    >
      <div className="BubblyTip__EndPoint__Arrow" style={ArrowPropsStyle} />
      <div className="BubblyTip__Content__Box" style={ContentPropsStyle}>
        {children}
      </div>
    </div>
  );
};

MsgBox.defaultProps = {
  height: 32,
  bgColor: "#383835",
  color: "#fff",
};

BubblyTip.StartPoint = StartPoint;
BubblyTip.MsgBox = MsgBox;

export default BubblyTip;
