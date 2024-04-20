import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, vi } from "vitest";
import renderWithIntegrationProvider from "@/configs/vitest/customRender";
import RandomButton from "@/src/components/RandomButton";
import { act } from "react-dom/test-utils";

describe("RandomButton", () => {
  let container;

  it("onClick func is called when button is called", async () => {
    const onClickMock = vi.fn();
    container = renderWithIntegrationProvider(
      <RandomButton onClick={onClickMock} />,
    ).container;
    const user = userEvent.setup();
    const button = screen.getByRole("button");
    await act(async () => {
      await user.click(button);
    });
    expect(onClickMock).toHaveBeenCalledTimes(1);
    expect(container).toMatchSnapshot();
  });
});
