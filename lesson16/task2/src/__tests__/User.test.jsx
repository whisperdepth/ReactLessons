import React from "react";
import { shallow } from "enzyme";
import User from "../User.jsx";
import { getUsersList } from "../usersGateway";

jest.mock("../usersGateway", () => {
  return {
    getUsersList: jest.fn(() => Promise.resolve()),
  };
});

describe("User", () => {
  it("should not render user if no user data", () => {
    const wrappedComponent = shallow(<User />);

    expect(wrappedComponent.find(".user").exists()).toEqual(false);
  });

  it("should render user when user data exists", () => {
    const wrappedComponent = shallow(<User />);

    wrappedComponent.setState({
      userData: {
        name: "John",
        location: "location",
        avatar_url: "https://example.com",
      },
    });

    expect(wrappedComponent.find(".user").exists()).toEqual(true);
  });

  it("should call getUsersList function", () => {
    shallow(<User />);

    expect(getUsersList).toBeCalled();
  });
});
