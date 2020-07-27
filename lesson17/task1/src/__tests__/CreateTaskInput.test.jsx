import React from "react";
import { shallow } from "enzyme";
import CreateTaskInput from "../CreateTaskInput";

describe("<CreateTaskInput />", () => {
  it("should create task on submit", () => {
    const mockOnCreate = jest.fn();
    const wrapper = shallow(<CreateTaskInput onCreate={mockOnCreate} />);
    const fakeEvent = { target: { value: "hello world" } };
    wrapper.find(".create-task__input").simulate("change", fakeEvent);
    wrapper.find(".create-task__btn").simulate("click");

    expect(mockOnCreate).toBeCalledWith("hello world");
  });

  it("should clear input after submit", () => {
    const mockOnCreate = jest.fn();
    const wrapper = shallow(<CreateTaskInput onCreate={mockOnCreate} />);
    const fakeEvent = { target: { value: "hello world" } };
    wrapper.find(".create-task__input").simulate("change", fakeEvent);
    wrapper.find(".create-task__btn").simulate("click");

    expect(wrapper.find(".create-task__input").prop('value')).toEqual("");
  });
});
