import React from "react";
import { shallow, mount } from "enzyme"
import CircularNavigation from "../lib/CircularNavigation";

describe("CircularNavigation component", () => {
  it("nav gets CSS class 'circular-nav-open' on click", () => {
    const wrapper = mount(
      <CircularNavigation>
        <CircularNavigation.item href={'#'} icon={"home"}>Home</CircularNavigation.item>
      </CircularNavigation>
    );

    const toggle = wrapper.find('.circular-nav-toggle');
    toggle.simulate('click');

    const navHasClass = wrapper.find('.circular-nav-wrapper').some('.circular-nav-open');
    expect(navHasClass).toEqual(true);
  })
})    