import React from "react";
import ReactDOM from "react-dom";
import { cleanup, render } from "@testing-library/react";
import Button from "./Button";

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

describe("@rankmi/button", () => {
  it("Renders", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Button />, div);
    const button = div.querySelector("button") as HTMLButtonElement;
    expect(button).not.toBeNull();
  });

  it("Validate default state", () => {
    const { baseElement } = render(<Button />);
    const button = baseElement.querySelector("button") as HTMLButtonElement;
    expect(button.className).toContain("buttonMd");
  });

  it("Button click event", () => {
    const clickEvent = jest.fn();
    const { baseElement } = render(<Button onClick={clickEvent} />);
    const button = baseElement.querySelector("button") as HTMLButtonElement;
    button.click();
    expect(clickEvent).toBeCalled();
  });
});
