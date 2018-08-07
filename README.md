# MaterialDesign-React

Dist for Material Design Icons React

## Props

```javascript
import React, { Component } from 'react'
import { mdiAccount } from '@mdi/js'
import Icon from '@mdi/react'

class App extends Component {
  render() {
    <Icon path={mdiAccount}
      size={1}
      horizontal
      vertical
      rotate={90}
      color="red"
      spin/>
  }
} 
```