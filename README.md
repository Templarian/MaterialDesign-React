# React - Material Design Icons

[Material Design Icons](https://materialdesignicons.com/) can be used in React with a custom component or with the one provided in this module.

[View the Demo](https://templarian.github.io/@mdi/react/)

```
npm install @mdi/react
```

## Usage

The example below uses the `@mdi/js` package which contains all the MDI icon's path data.

```javascript
import React, { Component } from 'react';
import Icon from '@mdi/react';
import { mdiAccount } from '@mdi/js';

class App extends Component {
  render() {
    return (
      <Icon path={mdiAccount}
        size={1}
        horizontal
        vertical
        rotate={90}
        color="red"/>
    );
  }
} 
```

## Stack Usage

To layer `<Icons/>` nest them inside of the `<Stack/>` component.

```javascript
import React, { Component } from 'react';
import Icon, { Stack } from '@mdi/react';
import { mdiAccount, mdiBlockHelper } from '@mdi/js';

class App extends Component {
  render() {
    return (
      <Stack color="#444">
        <Icon path={mdiAccount}/>
        <Icon path={mdiBlockHelper}
          color="red"/>
      </Stack>
    );
  }
} 
```

## Props

### Icon `<Icon/>`

| Prop        | PropTypes      | Default  | Details |
|-------------|----------------|----------|---------|
| title       | string, null   | `null`   | A11y `<title>{title}</title>` |
| description | string, null   | `null`   | A11y `<desc>{desc}</desc>` |
| path        | string         | required | SVG path data. Usually from [@mdi/js](https://templarian.github.io/@mdi/js) |
| size        | number, string | `null`   | `{size * 1.5}rem`, `1em`, `48px` |
| horizontal  | bool           | `false ` | Flip Horizontal |
| vertical    | bool           | `false`  | Flip Vertical |
| rotate      | number         | `0 `     | degrees `0` to `360` |
| color       | string         | `null`   | `rgb()` / `rgba()` / `#000` |
| spin        | bool, number   | `false`  | `true` = `2s`, `-2` counterclockwise, `{spin}s` |

> Note: Additional props will be applied to the `<svg>` element.

### Stack `<Stack/>`

All props below will override the nested `<Icon/>`'s default prop values.

| Prop        | PropTypes            | Default  | Details |
|-------------|----------------------|----------|---------|
| title       | string, null         | `null`   | A11y `<title>{title}</title>` |
| description | string, null         | `null`   | A11y `<desc>{desc}</desc>` |
| size        | number, string, null | `null`   | `{size * 1.5}rem` |
| horizontal  | bool, null           | `null`   | Flip Horizontal |
| vertical    | bool, null           | `null`   | Flip Vertical |
| rotate      | number, null         | `null`   | degrees `0` to `360` |
| color       | string, null         | `null`   | `rgb()` / `rgba()` / `#000` |
| spin        | bool, number, null   | `null`   | `true` = `2s`, `-2` counterclockwise, `{spin}s` |

> Note: Additional props on `<Stack>` will apply to the `<svg>` element. Only in a `<Stack>` will addional props to the `<Icon>` component apply to the nested `<path>` elements.


## Styling

Applying a `className` attribute is usually the easiest solution. The example below demonstrates using SCSS to style the icons.

In most cases it may be a good idea to set a base size. Assuming a `16px` base `font-size` in most themes applying `1.5rem` will make the icon a `24px`.

```sass
svg {
  width: 1.5rem;
}
```

For more specific styling apply classes. To make selection of layers easier use the `nth-child` selector.

```sass
// For <Icon className="custom-class" />
svg.custom-class {
  path {
    fill: blue;
  }
}
// For <Stack className="custom-class">
svg.custom-class {
  // First layer (behind)
  path:nth-child(1) {
    fill: blue;
  }
  // Second layer (infront)
  path:nth-child(2) {
    fill: red;
  }
}
```

## Accessibility

Making icons accessible can be done through the `title` prop. If for some rare reason more information is required a `description` field can also be used.

By leaving off the `title` prop an icon is assumed to be presentation only. These will be ignored by screen readers. This is ideal for icon buttons or areas where text next to the icon suffices.

```js
<p><Icon path={mdiAccount} /> User Profile</p>
<p><Icon path={mdiAccount} title="User Profile" /></p>
<button aria-label="User Profile"><Icon path={mdiAccount} /></button>
```

## Development

To develop clone the repo and run `npm install`.

- `src/Icon.tsx` - Icon Component
  - `tests/Icon.spec.tsx` - Unit tests
- `src/Stack.tsx` - Stack Component
  - `tests/Stack.spec.tsx` - Unit tests

Commands:

- `npm run start` - Watch for file changes
- `npm run build` - Build Icon.js
- `npm run test` - Run unit tests

> Note: This project is setup to use the [Mocha Sidebar](https://marketplace.visualstudio.com/items?itemName=maty.vscode-mocha-sidebar) extension which makes it easier to view the tests.

## Related Packages

[NPM @MDI Organization](https://npmjs.com/org/mdi)

- JavaScript/Typescript: [MaterialDesign-JS](https://github.com/Templarian/MaterialDesign-JS)
- Vue: [MaterialDesign-Vue](https://github.com/Templarian/MaterialDesign-Vue)
- Webfont: [MaterialDesign-Webfont](https://github.com/Templarian/MaterialDesign-Webfont)
