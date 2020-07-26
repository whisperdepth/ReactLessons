import React from "react";
import { shallow } from "enzyme";
import Message from "../Message.jsx";

describe("Mailbox", () => {
  it("should not render Message component if no text", () => {
    const wrappedComponent = shallow(<Message text='' />);

    expect(wrappedComponent.find(".message").exists()).toEqual(false);
  });

  it("should render correct text", () => {
    const wrappedComponent = shallow(<Message text='hello world' />);

    expect(wrappedComponent.find(".message").text()).toEqual('hello world');
  });
});
