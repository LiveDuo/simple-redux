
<h1 align="center">
  <img alt="hybrids - the web components" src="https://raw.githubusercontent.com/LiveDuo/simple-redux/master/assets/simple-redux-logo.png" width="500" align="center">
  <br/>
</h1>

<!--
[![npm version](https://img.shields.io/npm/v/hybrids.svg?style=flat)](https://www.npmjs.com/package/hybrids)
[![bundle size](https://img.shields.io/bundlephobia/minzip/hybrids.svg?label=minzip)](https://bundlephobia.com/result?p=hybrids)
[![npm](https://img.shields.io/npm/dt/hybrids.svg)](https://www.npmjs.com/package/hybrids)
[![GitHub](https://img.shields.io/github/license/hybridsjs/hybrids.svg)](LICENSE)
-->

**Simple Redux** is a state management library for the layman. It is just a global store to get and update values.

* **Dead simple** — One hook for receiving values and updating them.
* **Redux based** — Opinionated version of Redux. Core Redux concepts still apply.
* **Plug & Play** — Copy and paste the code below and you are ready to go.

## Getting Started

1. Install the npm package.
    ```javascript
    npm i simple-redux-js
    ```

2. Load the provider in App.js.

    ```javascript
    const App = () => (
      <SimpleProvider initialState={{ token: 'default_token' }}>
        <Child>
      </SimpleProvider>
    )
    ```

3. Access and update global state in any other component.

    ```javascript
    const Child = () => {
      const simpleDispatch = useSimpleDispatch()
      return (
        <div>
          <span>{useSimpleSelector('token')}</span>
          <button onClick={() => simpleDispatch('token', 'value')}>
        </div>
      )
    }
    ```

## Documentation

- **useSimpleSelector** (propertyName<string>)
Selects the property by name from the store.
``` javascript
const token = useSimpleSelector('token')
```

- **getSimpleState** (propertyName<string>)
Selects the property by name outside of a component.
``` javascript
const token = getSimpleState('token')
```

- **useSimpleDispatch** ()
Creates a dispatch method to update the store.
``` javascript
  const simpleDispatch = useSimpleDispatch()
```

- **simpleDispatch** (propertyName<string>, propertyValue<string>)
Updates the property by name with the specified value.
``` javascript
  const setToken = (token) => simpleDispatch('token', token)
```

<!--
## Online Examples

- [&lt;user-auth&gt;](https://brokenlink.com) - user auth state
- [&lt;todo-app&gt;](https://brokenlink.com) - todo app example
-->

## Full Example

```javascript
// App.js
import React from 'react'
import ReactDom from 'react-dom'

import { SimpleProvider } from 'simple-redux-js'

import { Child } from './Child'

const defaultToken = localStorage.getItem('token')

const App = () => (
  <SimpleProvider initialState={{ token: defaultToken }}>
    <Child>
  </SimpleProvider>
)
ReactDom.render(<App/>, document.getElementById('root'))

// Child.js
import React from 'react'

import { useSimpleSelector, useSimpleDispatch } from 'simple-redux-js'

const Child = () => {
  const simpleDispatch = useSimpleDispatch()
  const token = useSimpleSelector('token')
  const setToken = (token) => simpleDispatch('token', token)

  return (
    <div>
      <span>{token}</span>
      <button onClick={() => setToken('user_token')}>
    </div>
  )
}
export { Child }
```

## License

`simple-redux-js` is released under the [ISC License](LICENSE).
