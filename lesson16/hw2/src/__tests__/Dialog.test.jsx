import React from "react";
import { shallow } from "enzyme";
import Dialog from "../Dialog.jsx";

describe("Dialog", () => {
  it("should not display dialog if is not opened", () => {
    const wrappedComponent = shallow(<Dialog isOpen={false} />);

    expect(wrappedComponent.find(".dialog").exists()).toEqual(false);
  });

  it("should display dialog if is opened", () => {
    const wrappedComponent = shallow(<Dialog isOpen={true} />);

    expect(wrappedComponent.find(".dialog").exists()).toEqual(true);
  });

  /* it("should not display dialog if it is closed", () => {
    const wrappedComponent = shallow(<Dialog isOpen={true} />);

    wrappedComponent.find("dialog__close-btn").simulate("click");

    expect(wrappedComponent.find(".dialog").exists()).toEqual(false);
  }); */

  it("should display dialog heading", () => {
    const wrappedComponent = shallow(<Dialog isOpen={true} />);

    expect(wrappedComponent.find(".dialog__heading").exists()).toEqual(true);
  });

  it("should display dialog content", () => {
    const wrappedComponent = shallow(<Dialog isOpen={true} />);

    expect(wrappedComponent.find(".dialog__content").exists()).toEqual(true);
  });
});
