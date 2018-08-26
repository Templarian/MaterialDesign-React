import * as React from "react";
import { expect } from "chai";
import { shallow, mount } from "enzyme";
import { configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import Icon from "../src/Icon";

configure({ adapter: new Adapter() });

const path = 'M0,0H24V24H0';

describe("<Icon path={path} /> Renders", () => {
  it("renders the the svg > path", () => {
    const wrapper = shallow(<Icon path={path} />);
    expect(wrapper.type()).to.equal('svg');
    expect(wrapper.childAt(0).type()).to.equal('path');
  });
});

describe("<Icon path={path} />", () => {
  it("verify svg[viewBox]", () => {
    const wrapper = shallow(<Icon path={path} />);
    const { viewBox } = wrapper.props();
    expect(viewBox).to.equal('0 0 24 24');
  });
  it("verify svg.style (width='', transform='', animation='', transformOrigin='')", () => {
    const wrapper = shallow(<Icon path={path} />);
    const {
      width,
      transform,
      animation,
      transformOrigin,
    } = wrapper.props().style;
    expect(width).to.equal(undefined);
    expect(transform).to.equal(undefined);
    expect(animation).to.equal(undefined);
    expect(transformOrigin).to.equal(undefined);
  });
  it("verify svg > path[d]", () => {
    const wrapper = shallow(<Icon path={path} />);
    const { d } = wrapper.childAt(0).props();
    expect(d).to.equal(path);
  });
  it("verify svg > path.style.fill", () => {
    const wrapper = shallow(<Icon path={path} />);
    const { style } = wrapper.childAt(0).props();
    expect(style.fill).to.equal(undefined);
  });
});

describe("<Icon path={path} size />", () => {
  it("verify size: number", () => {
    const wrapper = shallow(<Icon path={path} size={2} />);
    const { width } = wrapper.props().style;
    expect(width).to.equal('3rem');
  });
  it("verify size: string", () => {
    const wrapper = shallow(<Icon path={path} size={'1em'} />);
    const { width } = wrapper.props().style;
    expect(width).to.equal('1em');
  });
});

describe("<Icon path={path} horizontal />", () => {
  it("verify horizontal: boolean", () => {
    const wrapper = shallow(<Icon path={path} horizontal />);
    const { transform } = wrapper.props().style;
    expect(transform).to.equal('scaleX(-1)');
  });
  it("verify horizontal: boolean = true", () => {
    const wrapper = shallow(<Icon path={path} horizontal={true} />);
    const { transform } = wrapper.props().style;
    expect(transform).to.equal('scaleX(-1)');
  });
  it("verify horizontal: boolean = false", () => {
    const wrapper = shallow(<Icon path={path} horizontal={false} />);
    const { transform } = wrapper.props().style;
    expect(transform).to.equal(undefined);
  });
});

describe("<Icon path={path} vertical />", () => {
  it("verify vertical: boolean", () => {
    const wrapper = shallow(<Icon path={path} vertical />);
    const { transform } = wrapper.props().style;
    expect(transform).to.equal('scaleY(-1)');
  });
  it("verify vertical: boolean = true", () => {
    const wrapper = shallow(<Icon path={path} vertical={true} />);
    const { transform } = wrapper.props().style;
    expect(transform).to.equal('scaleY(-1)');
  });
  it("verify vertical: boolean = false", () => {
    const wrapper = shallow(<Icon path={path} vertical={false} />);
    const { transform } = wrapper.props().style;
    expect(transform).to.equal(undefined);
  });
});

describe("<Icon path={path} rotate />", () => {
  it("verify rotate: number = 90", () => {
    const wrapper = shallow(<Icon path={path} rotate={90} />);
    const { transform } = wrapper.props().style;
    expect(transform).to.equal('rotate(90deg)');
  });
});

describe("<Icon path={path} color />", () => {
  it("verify color: string = '#000'", () => {
    const wrapper = shallow(<Icon path={path} color={'#000'} />);
    const { fill } = wrapper.childAt(0).props().style;
    expect(fill).to.equal('#000');
  });
});

describe("<Icon path={path} spin />", () => {
  it("verify spin: boolean", () => {
    const wrapper = shallow(<Icon path={path} spin />);
    const { animation, transformOrigin } = wrapper.props().style;
    expect(animation).to.equal('spin linear 2s infinite');
    expect(transformOrigin).to.equal('center');
  });
  it("verify spin: boolean = {true}", () => {
    const wrapper = shallow(<Icon path={path} spin={true} />);
    const { animation, transformOrigin } = wrapper.props().style;
    expect(animation).to.equal('spin linear 2s infinite');
    expect(transformOrigin).to.equal('center');
  });
  it("verify spin: boolean = {false}", () => {
    const wrapper = shallow(<Icon path={path} spin={false} />);
    const { animation, transformOrigin } = wrapper.props().style;
    expect(animation).to.equal(undefined);
    expect(transformOrigin).to.equal(undefined);
  });
  it("verify spin: number = {3}", () => {
    const wrapper = shallow(<Icon path={path} spin={3} />);
    const { animation, transformOrigin } = wrapper.props().style;
    expect(animation).to.equal('spin linear 3s infinite');
    expect(transformOrigin).to.equal('center');
  });
});

describe("<Icon path={path} horizontal vertical rotate={90} />", () => {
  it("verify horizontal: boolean", () => {
    const wrapper = shallow(<Icon path={path} horizontal vertical rotate={90} />);
    const { transform } = wrapper.props().style;
    expect(transform).to.equal('scaleX(-1) scaleY(-1) rotate(90deg)');
  });
});