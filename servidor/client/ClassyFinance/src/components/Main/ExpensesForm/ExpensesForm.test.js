import React from "react";
import { shallow } from "enzyme";
import GastoForm from "./GastoForm";

describe("GastoForm", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<GastoForm />);
    expect(wrapper).toMatchSnapshot();
  });
});
