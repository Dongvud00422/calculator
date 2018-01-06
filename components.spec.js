import React from "react";
import { expect } from "chai";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { spy } from "sinon";

import App from "./src/App";
import Monitor from "./src/components/Monitor";
import ButtonGroup from "./src/components/ButtonGroup";

Enzyme.configure({ adapter: new Adapter() });

describe("the environment", () => {
  it("should render Monitor and ButtonGroup", () => {
    const wrapper = shallow(<App />);
    expect(
      wrapper.containsAllMatchingElements([<Monitor />, <ButtonGroup />]),
    ).to.equal(true);
  });
});
