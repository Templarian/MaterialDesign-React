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
    const svgElement = shallow(<Icon path={path} />);
    expect(svgElement.type()).to.equal('svg');
    expect(svgElement.childAt(0).type()).to.equal('path');
  });

});

describe("<Icon path={path} />", () => {

  it("verify svg[viewBox]", () => {
    const svgElement = shallow(<Icon path={path} />);
    const { viewBox } = svgElement.props();
    expect(viewBox).to.equal('0 0 24 24');
  });

  it("verify svg.style (width='', transform='', animation='', transformOrigin='')", () => {
    const svgElement = shallow(<Icon path={path} />);
    const {
      width,
      transform,
      animation,
      transformOrigin,
    } = svgElement.props().style;
    expect(width).to.equal(undefined);
    expect(transform).to.equal(undefined);
    expect(animation).to.equal(undefined);
    expect(transformOrigin).to.equal(undefined);
  });
  it("verify svg > path[d]", () => {
    const svgElement = shallow(<Icon path={path} />);
    const { d } = svgElement.childAt(0).props();
    expect(d).to.equal(path);
  });

  it("verify svg > path.style.fill", () => {
    const svgElement = shallow(<Icon path={path} />);
    const { style } = svgElement.childAt(0).props();
    expect(style.fill).to.equal(undefined);
  });

});

describe("<Icon path={path} size />", () => {

  it("verify size: number", () => {
    const svgElement = shallow(<Icon path={path} size={2} />);
    const { width } = svgElement.props().style;
    expect(width).to.equal('3rem');
  });

  it("verify size: string", () => {
    const svgElement = shallow(<Icon path={path} size={'1em'} />);
    const { width } = svgElement.props().style;
    expect(width).to.equal('1em');
  });

});

describe("<Icon path={path} horizontal />", () => {

  it("verify horizontal: boolean", () => {
    const svgElement = shallow(<Icon path={path} horizontal />);
    const { transform } = svgElement.props().style;
    expect(transform).to.equal('scaleX(-1)');
  });

  it("verify horizontal: boolean = true", () => {
    const svgElement = shallow(<Icon path={path} horizontal={true} />);
    const { transform } = svgElement.props().style;
    expect(transform).to.equal('scaleX(-1)');
  });

  it("verify horizontal: boolean = false", () => {
    const svgElement = shallow(<Icon path={path} horizontal={false} />);
    const { transform } = svgElement.props().style;
    expect(transform).to.equal(undefined);
  });

});

describe("<Icon path={path} vertical />", () => {

  it("verify vertical: boolean", () => {
    const svgElement = shallow(<Icon path={path} vertical />);
    const { transform } = svgElement.props().style;
    expect(transform).to.equal('scaleY(-1)');
  });

  it("verify vertical: boolean = true", () => {
    const svgElement = shallow(<Icon path={path} vertical={true} />);
    const { transform } = svgElement.props().style;
    expect(transform).to.equal('scaleY(-1)');
  });

  it("verify vertical: boolean = false", () => {
    const svgElement = shallow(<Icon path={path} vertical={false} />);
    const { transform } = svgElement.props().style;
    expect(transform).to.equal(undefined);
  });

});

describe("<Icon path={path} rotate />", () => {

  it("verify rotate: number = 90", () => {
    const svgElement = shallow(<Icon path={path} rotate={90} />);
    const { transform } = svgElement.props().style;
    expect(transform).to.equal('rotate(90deg)');
  });

});

describe("<Icon path={path} color />", () => {

  it("verify color: string = '#000'", () => {
    const svgElement = shallow(<Icon path={path} color={'#000'} />);
    const { fill } = svgElement.childAt(0).props().style;
    expect(fill).to.equal('#000');
  });

});

describe("<Icon path={path} spin />", () => {

  it("verify spin creates <style/>", () => {
    const svgElement = shallow(<Icon path={path} spin />);
    const styleElement = svgElement.childAt(0);
    expect(styleElement.text()).to.equal('@keyframes spin { to { transform: rotate(360deg) } }');
  });

  it("verify spin: boolean", () => {
    const svgElement = shallow(<Icon path={path} spin />);
    const gElement = svgElement.childAt(1);
    const { animation, transformOrigin } = gElement.props().style;
    expect(svgElement.children().length).to.equal(2);
    expect(animation).to.equal('spin linear 2s infinite');
    expect(transformOrigin).to.equal('center');
  });

  it("verify spin: boolean = {true}", () => {
    const svgElement = shallow(<Icon path={path} spin={true} />);
    const gElement = svgElement.childAt(1);
    const { animation, transformOrigin } = gElement.props().style;
    expect(svgElement.children().length).to.equal(2);
    expect(animation).to.equal('spin linear 2s infinite');
    expect(transformOrigin).to.equal('center');
  });

  it("verify spin: boolean = {false}", () => {
    const svgElement = shallow(<Icon path={path} spin={false} />);
    expect(svgElement.children().length).not.to.equal(2);
  });

  it("verify spin: number = {3}", () => {
    const svgElement = shallow(<Icon path={path} spin={3} />);
    const gElement = svgElement.childAt(1);
    const { animation, transformOrigin } = gElement.props().style;
    expect(svgElement.children().length).to.equal(2);
    expect(animation).to.equal('spin linear 3s infinite');
    expect(transformOrigin).to.equal('center');
  });

});

describe("<Icon path={path} horizontal vertical rotate={90} />", () => {

  it("verify horizontal + vertical + rotate: boolean", () => {
    const svgElement = shallow(<Icon path={path} horizontal vertical rotate={90} />);
    const { transform } = svgElement.props().style;
    expect(transform).to.equal('scaleX(-1) scaleY(-1) rotate(90deg)');
  });

});

describe("<Icon path={path} className={'foo'} />", () => {

  it("verify additional props", () => {
    const svgElement = shallow(<Icon path={path} className={'Foo'} />);
    expect(svgElement.prop('className')).to.equal('Foo');
  });

});

describe("<Icon /> A11y", () => {

  it("no title sets role=presentation", () => {
    const svgElement = shallow(<Icon path={path} />);
    expect(svgElement.props().role).to.equal('presentation');
  });

  it("title does not role=presentation", () => {
    const svgElement = shallow(<Icon path={path} title={'Foo'} />);
    expect(svgElement.props().role).not.to.equal('presentation');
  });

  it("title sets aria-labelledby", () => {
    const svgElement = shallow(<Icon path={path} title={'Foo'} />);
    const ariaLabelledby = svgElement.prop('aria-labelledby').replace(/\d+/g, '');
    expect(ariaLabelledby).to.equal('icon_labelledby_');
  });

  it("title and description sets aria-labelledby", () => {
    const svgElement = shallow(<Icon path={path} title={'Foo'} description={'Bar'} />);
    const ariaLabelledby = svgElement.prop('aria-labelledby').replace(/\d+/g, '');
    expect(ariaLabelledby).to.equal('icon_labelledby_ icon_describedby_');
  });

  it("title sets title", () => {
    const svgElement = shallow(<Icon path={path} title={'Foo'} />);
    const titleElement = svgElement.find('title');
    expect(titleElement.text()).to.equal('Foo');
  });

  it("title and description sets title and desc", () => {
    const svgElement = shallow(<Icon path={path} title={'Foo'} description={'Bar'} />);
    const titleElement = svgElement.find('title');
    const descElement = svgElement.find('desc');
    expect(titleElement.text()).to.equal('Foo');
    expect(descElement.text()).to.equal('Bar');
  });

  it("just description without title throws error", () => {
    expect(() => {
      shallow(<Icon path={path} description={'Box'} />);
    }).to.throw();
  });

});

/*
describe("<Icon ref={ref} />", () => {

  it("verify ref works", () => {
    const ref = React.createRef<SVGSVGElement>();
    const wrapper = mount(<Icon ref={ref} path={path} />);
    // todo: write a test?
  });

});
*/
