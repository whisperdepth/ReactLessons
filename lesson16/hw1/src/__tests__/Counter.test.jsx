import React from "react";
import { shallow } from "enzyme";
import Counter from "../Counter.jsx";

describe("Counter", () => {
  it("start value of the counter should be 0", () => {
    const wrappedComponent = shallow(<Counter />);

    expect(wrappedComponent.find(".counter__value").text()).toEqual("0");
  });

  it("should increase counter value by 1", () => {
    const wrappedComponent = shallow(<Counter />);
    const mockOnClick = jest.fn(() => {
      wrappedComponent.setState({
        counter: wrappedComponent.state().counter + 1,
      });
    });

    mockOnClick();

    expect(wrappedComponent.find(".counter__value").text()).toEqual("1");
  });

  it("should decrease counter value by 1", () => {
    const wrappedComponent = shallow(<Counter />);
    const mockOnClick = jest.fn(() => {
      wrappedComponent.setState({
        counter: wrappedComponent.state().counter - 1,
      });
    });

    mockOnClick();

    expect(wrappedComponent.find(".counter__value").text()).toEqual("-1");
  });

  it("should set counter value to 0", () => {
    const wrappedComponent = shallow(<Counter />);
    const mockOnClick = jest.fn(() => {
      wrappedComponent.setState({
        counter: 0,
      });
    });

    mockOnClick();

    expect(wrappedComponent.find(".counter__value").text()).toEqual("0");
  });
});
