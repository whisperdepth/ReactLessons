import React from "react";
import { shallow } from "enzyme";
import Task from "../Task";

describe("<Task />", () => {
  it("should display done task", () => {
    const props = {
      text: "task1",
      id: "1",
      done: true,
      onChange: jest.fn(),
      onDelete: jest.fn(),
    };
    const wrapper = shallow(<Task {...props} />);

    expect(wrapper).toMatchSnapshot();
  });

  it("should display undone task", () => {
    const props = {
      text: "task1",
      id: "1",
      done: false,
      onChange: jest.fn(),
      onDelete: jest.fn(),
    };
    const wrapper = shallow(<Task {...props} />);

    expect(wrapper).toMatchSnapshot();
  });

  it("should update task on checkbox checked", () => {
    const props = {
      text: "task1",
      id: "1",
      done: false,
      onChange: jest.fn(),
      onDelete: jest.fn(),
    };
    const wrapper = shallow(<Task {...props} />);
    wrapper.find(".list-item__checkbox").simulate("change");

    expect(props.onChange).toBeCalledWith("1");
  });

  it("should delete task on delete btn click", () => {
    const props = {
        text: "task1",
        id: "1",
        done: false,
        onChange: jest.fn(),
        onDelete: jest.fn(),
      };
      const wrapper = shallow(<Task {...props} />);
      wrapper.find(".list-item__delete-btn").simulate("click");

    expect(props.onDelete).toBeCalledWith("1");
  });
});
