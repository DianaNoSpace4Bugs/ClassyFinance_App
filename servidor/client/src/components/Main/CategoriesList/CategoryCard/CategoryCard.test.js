import React from "react";
import { shallow } from "enzyme";
import CategoryCard from "./CategoryCard";

describe("CategoryCard", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<CategoryCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
