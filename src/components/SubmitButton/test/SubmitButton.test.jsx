import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, vi } from "vitest";
import renderWithIntegrationProvider from "@/configs/vitest/customRender";
import SubmitButton from "@/src/components/SubmitButton";
import { act } from "react-dom/test-utils";

describe("SubmitButton", () => {
  let container;

  it("onClick func is called when button is called", async () => {
    const onClickMock = vi.fn();
    container = renderWithIntegrationProvider(
      <SubmitButton onClick={onClickMock} label="label" />,
    ).container;
    const user = userEvent.setup();
    const button = screen.getByRole("button", {
      name: /label/i,
    });
    await act(async () => {
      await user.click(button);
    });
    expect(onClickMock).toHaveBeenCalledTimes(1);
    expect(container).toMatchSnapshot();
  });
});
