import React from "react";
import { shallow } from "enzyme";
import UserGreeting from "../UserGreeting.jsx";

describe("UserGreeting", () => {
  it("should display user greeting", () => {
    const wrappedComponent = shallow(<UserGreeting />);

    expect(wrappedComponent).toMatchSnapshot();
  });
});