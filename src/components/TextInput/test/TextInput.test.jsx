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
    await act(async () => {
      await user.type(input, "message here!");
    });

    expect(input).toBeInTheDocument();
    expect(input).toHaveValue("message here!");
    expect(container).toMatchSnapshot();
  });

  it("TextInput should display label", async () => {
    container = renderWithIntegrationProvider(
      <TextInput label="label" />,
    ).container;
    const label = screen.getByText(/label/i);

    expect(label).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it("TextInput should display error message", async () => {
    container = renderWithIntegrationProvider(
      <TextInput errorMessage="error message" />,
    ).container;
    const errorMessage = screen.getByText(/error message/i);

    expect(errorMessage).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
