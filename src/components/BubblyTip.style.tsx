import { CSSProperties } from "react";
import { Properties } from "csstype";

interface GetStartPropsArgs {
  marginLeft: CSSProperties["marginLeft"];
}

export const getStartPropsStyle = ({
  marginLeft,
}: GetStartPropsArgs): CSSProperties => {
  return {
    marginLeft,
  };
};

interface GetBoxPropsArgs {
  maxHeight: CSSProperties["maxHeight"];
}

export const getBoxPropsStyle = ({
  maxHeight,
}: GetBoxPropsArgs): CSSProperties => {
  return {
    maxHeight,
  };
};

interface GetArrowPropsArgs {
  borderRightColor: CSSProperties["borderRightColor"];
}

export const getArrowPropsStyle = ({
  borderRightColor,
}: GetArrowPropsArgs): CSSProperties => {
  return {
    borderRightColor,
  };
};

interface GetContentPropsArgs {
  height: CSSProperties["height"];
  backgroundColor: CSSProperties["backgroundColor"];
  color: CSSProperties["color"];
}

export const getContentPropsStyle = ({
  height,
  backgroundColor,
  color,
}: GetContentPropsArgs): CSSProperties => {
  return {
    height,
    backgroundColor,
    color,
  };
};
