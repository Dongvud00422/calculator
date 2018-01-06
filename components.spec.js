import React from "react";
import { expect } from "chai";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { spy } from "sinon";

import App, { buttonName } from "./src/App";
import Monitor from "./src/components/Monitor";
import ButtonGroup from "./src/components/ButtonGroup";

Enzyme.configure({ adapter: new Adapter() });

describe("App", () => {
  it("should render Monitor and ButtonGroup", () => {
    const wrapper = shallow(<App />);
    expect(
      wrapper.containsAllMatchingElements([<Monitor />, <ButtonGroup />]),
    ).to.equal(true);
  });

  it("should start with empty", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state("display")).to.equal("0");
    expect(wrapper.state("operator")).to.equal("");
    expect(wrapper.state("tmpOperator")).to.equal("");
    expect(wrapper.state("tmp")).to.equal("0");
    expect(wrapper.state("sum")).to.equal("");
  });

  it("click on <plus button> should be plus", () => {
    const wrapper = shallow(<App />);
    wrapper.setState({
      operator: "+",
      tmp: 0,
      sum: 1,
    });
    wrapper.instance().clickHandle("+");
    expect(wrapper.state("sum")).to.equal(1);
  });

  it("click on <plus button> should change operator to plus", () => {
    const wrapper = shallow(<App />);
    wrapper.setState({
      operator: "=",
    });
    wrapper.instance().clickHandle("+");
    expect(wrapper.state("operator")).to.equal("+");
  });

  it("click on <minus button> should be minus", () => {
    const wrapper = shallow(<App />);
    wrapper.setState({
      operator: "+",
      tmp: 0,
      sum: 1,
    });
    wrapper.instance().clickHandle("+");
    expect(wrapper.state("sum")).to.equal(1);
  });

  // it("click on <minus button> should change operator to plus", () => {
  //   const wrapper = shallow(<App />);
  //   wrapper.setState({
  //     operator: "=",
  //   });
  //   wrapper.instance().clickHandle("+");
  //   expect(wrapper.state("operator")).to.equal("+");
  // });
});

describe("Monitor", () => {
  it("Monitor should render undefined", () => {
    const wrapper = shallow(<Monitor value={undefined} />);
    const monitorDIV = wrapper.find("div.monitor");
    expect(monitorDIV.text()).to.equal("");
  });
});

describe("ButtonGroup", () => {
  it("should have all required buttons", () => {
    const wrapper = shallow(<ButtonGroup buttonName={buttonName} />);
    const buttons = wrapper.findWhere(n => n.name() === "Button");
    expect(buttons.length).to.equal(19);
  });
});
