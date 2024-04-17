import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect } from "vitest";
import renderWithIntegrationProvider from "@/configs/vitest/customRender";
import TestComponent from "@/src/components/TestComponent";
import { act } from "react-dom/test-utils";

describe("TestComponent", () => {
  let container;

  it("Label is displayed", () => {
    container = renderWithIntegrationProvider(<TestComponent />).container;
    const label = screen.getByText(/testcomponent/i);
    expect(label).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it("isClicked is displayed when button is clicked", async () => {
    container = renderWithIntegrationProvider(<TestComponent />).container;
    const user = userEvent.setup();
    const button = screen.getByRole("button", {
      name: /common:display.the.text/i,
    });
    await act(async () => {
      await user.click(button);
    });
    const isClicked = screen.getByText(/lorem ipsum/i);
    expect(isClicked).toBeInTheDocument();
    await act(async () => {
      await user.click(button);
    });
    expect(isClicked).not.toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
