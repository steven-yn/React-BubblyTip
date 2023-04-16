import { render, screen } from "@testing-library/react";
import { useBubblyTip, BubblyTip } from "../../lib/src/index";

const Temp = () => {
  const [isView, msgPush] = useBubblyTip();

  const onClick = () => {
    msgPush((push) => !push);
  };

  return (
    <div className="Container">
      <button onClick={onClick}>
        push bubbly
        <BubblyTip push={isView}>Here is!</BubblyTip>
      </button>
    </div>
  );
};

describe("BubblyTip", () => {
  test("renders the correct content", () => {
    render(<Temp></Temp>);

    // 버튼이 정상적으로 렌더링되었는지 확인
    expect(
      screen.getByRole("button", { name: "Hover me" })
    ).toBeInTheDocument();

    // 툴팁의 내용을 확인
    expect(screen.queryByText("This is a bubbly tip")).not.toBeInTheDocument();

    // 버튼에 마우스를 올렸을 때 툴팁이 표시되는지 확인 (예: fireEvent.mouseOver)
    // 버튼에서 마우스를 제거했을 때 툴팁이 사라지는지 확인 (예: fireEvent.mouseOut)
  });
});
