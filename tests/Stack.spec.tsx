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
    const gSpinEle = iconComponent.childAt(0);
    const { animation, transformOrigin } = gSpinEle.props().style;
    expect(animation).to.equal('spin linear 3s infinite');
    expect(transformOrigin).to.equal('center');
    const gTransformEle = gSpinEle.childAt(0);
    const { transform, transformOrigin: transformOrigin2 } = gTransformEle.props().style;
    expect(transform).to.equal('scaleX(-1) scaleY(-1) rotate(45deg)');
    expect(transformOrigin2).to.equal('center');
  });

});

describe("<Stack><Icon path={path} /></Stack> Size", () => {

  it("verify dom has size", () => {
    const wrapper = mount(
      <Stack size={2}>
        <Icon path={path} />
      </Stack>
    );
    const stackComponent = wrapper;
    const stackEle = stackComponent.childAt(0);
    const iconComponent = stackEle.childAt(0);
    const iconEle = iconComponent.childAt(0);
    expect(stackEle.prop('style').width).to.equal('3rem');
  });

});

describe("<Stack><Icon path={path} /></Stack> Props", () => {

  it("verify additional props", () => {
    const wrapper = mount(
      <Stack size={2} className="foo">
        <Icon path={path} className="bar" />
      </Stack>
    );
    const stackComponent = wrapper;
    const stackEle = stackComponent.childAt(0);
    const iconComponent = stackEle.childAt(0);
    const iconEle = iconComponent.childAt(0);
    expect(stackEle.prop('className')).to.equal('foo');
    expect(iconEle.prop('className')).to.equal('bar');
  });

});

describe("<Stack /> A11y", () => {

  it("no title sets role=presentation", () => {
    const wrapper = mount(
      <Stack>
        <Icon path={path} />
      </Stack>
    );
    const stackComponent = wrapper;
    const stackEle = stackComponent.childAt(0);
    expect(stackEle.props().role).to.equal('presentation');
  });

  it("title does not role=presentation", () => {
    const wrapper = mount(
      <Stack title={'Foo'}>
        <Icon path={path} />
      </Stack>
    );
    const stackComponent = wrapper;
    const stackEle = stackComponent.childAt(0);
    expect(stackEle.props().role).not.to.equal('presentation');
  });

  it("title sets aria-labelledby", () => {
    const wrapper = mount(
      <Stack title={'Foo'}>
        <Icon path={path} />
      </Stack>
    );
    const stackComponent = wrapper;
    const stackEle = stackComponent.childAt(0);
    const ariaLabelledby = stackEle.prop('aria-labelledby').replace(/\d+/g, '');
    expect(ariaLabelledby).to.equal('stack_labelledby_');
  });

  it("title and description sets aria-labelledby", () => {
    const wrapper = mount(
      <Stack title={'Foo'} description={'Bar'}>
        <Icon path={path} />
      </Stack>
    );
    const stackComponent = wrapper;
    const stackEle = stackComponent.childAt(0);
    const ariaLabelledby = stackEle.prop('aria-labelledby').replace(/\d+/g, '');
    expect(ariaLabelledby).to.equal('stack_labelledby_ stack_describedby_');
  });

  it("title sets title", () => {
    const wrapper = mount(
      <Stack title={'Foo'}>
        <Icon path={path} />
      </Stack>
    );
    const titleElement = wrapper.find('title');
    expect(titleElement.text()).to.equal('Foo');
  });

  it("title and description sets title and desc", () => {
    const wrapper = mount(
      <Stack title={'Foo'} description={'Bar'}>
        <Icon path={path} />
      </Stack>
    );
    const titleElement = wrapper.find('title');
    const descElement = wrapper.find('desc');
    expect(titleElement.text()).to.equal('Foo');
    expect(descElement.text()).to.equal('Bar');
  });

});