# React - Material Design Icons

Material Design Icons can be used in React with a custom component or with the one provided in this module.

```
npm install @mdi/react --save-dev
```

## Props

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
        color="red"
        spin/>
    )
  }
} 
```

## Coming Soon

Spin is a work in progress.