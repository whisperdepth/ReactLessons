import React from "react";
import { shallow } from "enzyme";
import TasksList from "../TasksList";
import { fetchTasksList } from "../tasksGateway";

jest.mock("../tasksGateWay", () => {
  return {
    fetchTasksList: jest.fn(() => Promise.resolve([])),
  };
});

describe("<TasksList />", () => {
  it("should display sorted tasks", () => {
    const wrapper = shallow(<TasksList />);
    wrapper.setState({
      tasks: [
        { id: "1", text: "task1", done: true },
        { id: "2", text: "task2", done: false },
        { id: "3", text: "task3", done: true },
      ],
    });

    expect(wrapper).toMatchSnapshot();
  });

  it("should request tasks list", () => {
    shallow(<TasksList />);

    expect(fetchTasksList).toBeCalled();
  });

});
