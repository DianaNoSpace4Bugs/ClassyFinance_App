import React from "react";
import { shallow } from "enzyme";
import CategoryDetails from "./CategoryDetails";

describe("CategoryDetails", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<CategoryDetails />);
    expect(wrapper).toMatchSnapshot();
  });
});
