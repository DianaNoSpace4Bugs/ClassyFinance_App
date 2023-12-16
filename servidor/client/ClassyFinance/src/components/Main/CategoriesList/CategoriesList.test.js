import React from "react";
import { shallow } from "enzyme";
import CategoriesList from "./CategoriesList";

describe("CategoriesList", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<CategoriesList />);
    expect(wrapper).toMatchSnapshot();
  });
});
