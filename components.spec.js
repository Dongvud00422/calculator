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

  it("click <AC Button> should reset to initial State", () => {
    const wrapper = shallow(<App />);
    wrapper.instance().clickHandle("AC");
    expect(wrapper.state("display")).to.equal("0");
    expect(wrapper.state("operator")).to.equal("");
    expect(wrapper.state("tmpOperator")).to.equal("");
    expect(wrapper.state("tmp")).to.equal("0");
    expect(wrapper.state("sum")).to.equal("");
  });

  it("Click <C Button> should reset display", () => {
    const wrapper = shallow(<App />);
    wrapper.instance().clickHandle("C");
    expect(wrapper.state("display")).to.equal("0");
  });

  it("Click <% Button> should devide display number for 100", () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ display: "999" });
    wrapper.instance().clickHandle("%");
    expect(wrapper.state("display")).to.equal(9.99);
  });

  it("Click <+/- Button> should switch betwen negative / positive", () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ display: "-999" });
    wrapper.instance().clickHandle("+/-");
    expect(wrapper.state("display")).to.equal("999");
  });

  it("Click <Number Button> should concat with early clicked", () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ display: "99" });
    wrapper.instance().clickHandle("9");
    expect(wrapper.state("display")).to.equal("999");
  });

  it("Click <Number Button> after click equal operator", () => {
    const wrapper = shallow(<App />);
  });

  it("Click on <plus Button> should change tmpOperator to plus", () => {
    const wrapper = shallow(<App />);
    wrapper.instance().clickHandle("+");
    expect(wrapper.state("tmpOperator")).to.equal("+");
  });

  it("Click on <minus button> should change tmpOperator to minus", () => {
    const wrapper = shallow(<App />);
    wrapper.instance().clickHandle("-");
    expect(wrapper.state("tmpOperator")).to.equal("-");
  });

  it("Click on <multiple button> should change tmpOperator to multiple", () => {
    const wrapper = shallow(<App />);
    wrapper.instance().clickHandle("*");
    expect(wrapper.state("tmpOperator")).to.equal("*");
  });

  it("Click on <devide Button> should change tmpOperator to devide", () => {
    const wrapper = shallow(<App />);
    wrapper.instance().clickHandle("/");
    expect(wrapper.state("tmpOperator")).to.equal("/");
  });

  it("click on <operator button> should calculations & change tmpOperator to clicked operator", () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ operator: "", tmpOperator: "+", tmp: 1, sum: 2 });
    wrapper.instance().clickHandle("*");
    expect(wrapper.state("sum")).to.equal(3);
    expect(wrapper.state("tmpOperator")).to.equal("*");
  });

  it("click on <dot button> should display 1 time", () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ dotCount: 1, display: "9.9" });
    wrapper.instance().clickHandle(".");
    expect(wrapper.state("display")).to.equal("9.9");
  });

  it("devide for zero",()=>{
    const wrapper = shallow(<App/>);
    wrapper.setState({sum:1,tmpOperator:"/",display:"0"});
    wrapper.instance().clickHandle("=");
    expect(wrapper.state("display")).to.equal(Infinity);
  });
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
