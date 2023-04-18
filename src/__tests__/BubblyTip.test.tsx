import { render, screen, waitFor } from "@testing-library/react";
import { useBubblyTip, BubblyTip } from "../index";
import renderer from "react-test-renderer";
import userEvent from "@testing-library/user-event";

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
  test("matches snapshot", () => {
    const tree = renderer.create(<Temp />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("renders the correct content", () => {
    render(<Temp />);

    // 버튼이 정상적으로 렌더링되었는지 확인
    expect(
      screen.getByRole("button", { name: "push bubbly" })
    ).toBeInTheDocument();

    // 툴팁의 내용을 확인
    expect(screen.queryByText("Here is!")).not.toBeInTheDocument();

    // 버튼에 마우스를 올렸을 때 툴팁이 표시되는지 확인 (예: fireEvent.mouseOver)
    // 버튼에서 마우스를 제거했을 때 툴팁이 사라지는지 확인 (예: fireEvent.mouseOut)
  });

  test("shows BubblyTip__Message__Box when button is clicked", async () => {
    render(<Temp />);

    // 버튼을 찾습니다.
    const button = screen.getByRole("button", { name: "push bubbly" });

    // 버튼을 클릭합니다.
    userEvent.click(button);

    // BubblyTip__Message__Box 클래스를 가진 요소가 출력되는지 확인합니다.
    await waitFor(() => {
      expect(screen.getByTestId("BubblyTip__Message__Box")).toBeInTheDocument();
    });
  });
});
