import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect } from "vitest";
import renderWithIntegrationProvider from "@/configs/vitest/customRender";
import TextInput from "@/src/components/TextInput";
import { act } from "react-dom/test-utils";

describe("TestComponent", () => {
  let container;

  it("TextInput value change when user enters text", async () => {
    container = renderWithIntegrationProvider(<TextInput />).container;
    const user = userEvent.setup();
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
    await act(async () => {
      await user.type(input, "message here!");
    });
    expect(input).toHaveValue("message here!");
    expect(container).toMatchSnapshot();
  });
});
