import React from "react";
import { shallow } from "enzyme";
import App from "../App";

describe("<App />", () => {
  it("should display <TodoList />", () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find("TodoList").exists()).toBeTruthy();
  });
});
