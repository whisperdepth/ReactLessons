import React from "react";
import { shallow } from "enzyme";
import User from "../User.jsx";

describe("User", () => {

  it("should render correct name", () => {
    const wrappedComponent = shallow(<User name='John Doe' />);

    expect(wrappedComponent.find(".user").text()).toEqual('John Doe');
  });

  it("should render correct age", () => {
    const wrappedComponent = shallow(<User age={23} />);

    expect(wrappedComponent.find(".user").text()).toEqual('23');
  });
});
