import React from "react";
import { shallow } from "enzyme";
import Logout from "../Logout.jsx";

describe("Logout", () => {
  it("should Logout user on logout button click", () => {
    const mockLogout = jest.fn();

    const wrappedComponent = shallow(<Logout onLogout={mockLogout} />);

    wrappedComponent.find(".logout").simulate("click");

    expect(mockLogout).toBeCalled();
  });
});