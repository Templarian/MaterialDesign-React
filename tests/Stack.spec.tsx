import * as React from "react";
import { expect } from "chai";
import { mount } from "enzyme";
import { configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import Icon, { Stack } from "../src/Icon";

configure({ adapter: new Adapter() });

const path = 'M0,0H24V24H0';

describe("<Stack><Icon path={path} /></Stack> Renders", () => {
  it("verify default props", () => {
    const wrapper = mount(
      <Stack>
        <Icon path={path} />
      </Stack>
    );
    const stackComponent = wrapper;
    const stackEle = stackComponent.childAt(0);
    const iconComponent = stackEle.childAt(0);
    const iconEle = iconComponent.childAt(0);
    expect(stackComponent.name()).to.equal('Stack');
    expect(stackEle.type()).to.equal('svg');
    expect(stackEle.props().viewBox).to.equal('0 0 24 24');
    expect(iconComponent.name()).to.equal('Icon');
    expect(iconEle.type()).to.equal('path');
    expect(iconComponent.prop('path')).to.equal(path);
    expect(iconComponent.prop('size')).to.equal(null);
    expect(iconComponent.prop('color')).to.equal(null);
    expect(iconComponent.prop('horizontal')).to.equal(false);
    expect(iconComponent.prop('vertical')).to.equal(false);
    expect(iconComponent.prop('rotate')).to.equal(0);
    expect(iconComponent.prop('spin')).to.equal(false);
    expect(iconComponent.prop('inStack')).to.equal(true);
    expect(iconEle.props().d).to.equal(path);
  });
});

describe("<Stack><Icon path={path} /></Stack> Inherited Props", () => {
  it("verify inherited props", () => {
    const wrapper = mount(
      <Stack
        size={2}
        color={'red'}
        vertical
        horizontal
        rotate={45}
        spin={3}>
        <Icon path={path} />
      </Stack>
    );
    const stackComponent = wrapper;
    const stackEle = stackComponent.childAt(0);
    const iconComponent = stackEle.childAt(0);
    const iconEle = iconComponent.childAt(0);
    expect(iconComponent.prop('size')).to.equal(2);
    expect(iconComponent.prop('color')).to.equal('red');
    expect(iconComponent.prop('horizontal')).to.equal(true);
    expect(iconComponent.prop('vertical')).to.equal(true);
    expect(iconComponent.prop('rotate')).to.equal(45);
    expect(iconComponent.prop('spin')).to.equal(3);
  });
});