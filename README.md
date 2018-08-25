# React - Material Design Icons

[Material Design Icons](https://materialdesignicons.com/) can be used in React with a custom component or with the one provided in this module.

```
npm install @mdi/react --save-dev
```

## Usage

The example below uses the `@mdi/js` package which contains all the MDI icon's path data.

```javascript
import React, { Component } from 'react'
import Icon from '@mdi/react'
import { mdiAccount } from '@mdi/js'

class App extends Component {
  render() {
    return (
      <Icon path={mdiAccount}
        size={1}
        horizontal
        vertical
        rotate={90}
        color="red"/>
    )
  }
} 
```

> **Note:** Do not use `spin` and `rotate` together.

## Stack Usage

To layer `<Icons/>` nest them inside of the `<Stack/>` component.

```javascript
import React, { Component } from 'react'
import Icon, { Stack } from '@mdi/react'
import { mdiAccount, mdiBlockHelper } from '@mdi/js'

class App extends Component {
  render() {
    return (
      <Stack color="#444">
        <Icon path={mdiAccount}/>
        <Icon path={mdiBlockHelper}
          color="red"/>
      </Stack>
    )
  }
} 
```

## Props

### Icon `<Icon/>`

| Prop       | PropTypes      | Default  | Details |
|------------|----------------|----------|---------|
| path       | string         | required | SVG path data. Usually from @mdi/js |
| size       | number, string | `1`      | `{size * 1.5}rem` |
| horizontal | bool           | `false ` | Flip Horizontal |
| vertical   | bool           | `false`  | Flip Vertical |
| rotate     | number         | `0 `     | degrees `0` to `360` |
| color      | string         | `#000`   | `rgb()` / `rgba()` / `#000` |
| spin       | bool, number   | `false`  | `true = 2s`, `{spin}s` |

### Stack `<Stack/>`

All `<Icon/>` components nested in a `<Stack/>` will override the defaults.

| Prop       | PropTypes            | Default  | Details |
|------------|----------------------|----------|---------|
| size       | number, string, null | `null`   | `{size * 1.5}rem` |
| horizontal | bool, null           | `null`   | Flip Horizontal |
| vertical   | bool, null           | `null`   | Flip Vertical |
| rotate     | number, null         | `null`   | degrees `0` to `360` |
| color      | string, null         | `null`   | `rgb()` / `rgba()` / `#000` |
| spin       | bool, number, null   | `null`   | `true = 2s`, `{spin}s` |

## Development

To develop clone the repo and run `npm install`.

- `src/Icon.tsx` - Component
- `tests/Icon.spec.tsx` - Unit tests

Commands:

- `npm run start` - Watch for file changes
- `npm run build` - Build Icon.js
- `npm run test` - Run unit tests

## Related Packages

[NPM @MDI Organization](https://npmjs.com/org/mdi)

- JavaScript/Typescript: [MaterialDesign-JS](https://github.com/Templarian/MaterialDesign-JS)
- Vue: [MaterialDesign-Vue](https://github.com/Templarian/MaterialDesign-Vue)
- Webfont: [MaterialDesign-Webfont](https://github.com/Templarian/MaterialDesign-Webfont)
