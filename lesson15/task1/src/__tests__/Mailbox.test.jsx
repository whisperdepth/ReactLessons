import React from "react";
import { shallow } from "enzyme";
import Mailbox from "../Mailbox.jsx";

describe("Mailbox", () => {
  it("should not render count if no unread messages", () => {
    const wrappedComponent = shallow(<Mailbox unreadMessages={[]} />);

    expect(wrappedComponent.find(".mailbox__count").exists()).toEqual(false);
  });

  it("should render correct count of unread messages", () => {
    const wrappedComponent = shallow(<Mailbox unreadMessages={[1, 2, 3]} />);

    expect(wrappedComponent.find(".mailbox__count").text()).toEqual('3');
  });
});
