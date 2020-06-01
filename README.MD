
<h1 align="center">
  <img alt="hybrids - the web components" src="https://raw.githubusercontent.com/LiveDuo/simple-redux/master/assets/simple-redux-logo.png" width="500" align="center">
  <br/>
</h1>

[![npm version](https://img.shields.io/npm/v/hybrids.svg?style=flat)](https://www.npmjs.com/package/hybrids)
[![bundle size](https://img.shields.io/bundlephobia/minzip/hybrids.svg?label=minzip)](https://bundlephobia.com/result?p=hybrids)
[![npm](https://img.shields.io/npm/dt/hybrids.svg)](https://www.npmjs.com/package/hybrids)
[![GitHub](https://img.shields.io/github/license/hybridsjs/hybrids.svg)](LICENSE)

**Simple Redux** is a state management library for the layman. It is just a global store to get and update values.

* **Dead simple** — There one hook for receiving values and one to update them.
* **Redux concepts** — This library is a highly opinionated version of Redux which means that core redux concepts still apply.
* **Plug & Play** — You can copy and paste the code below and you are ready to go.
## Getting Started

1. Install the npm package.
```javascript
npm i simple-redux-js
```
1. Load the provider in App.js.

```javascript
import React from 'react'
import ReactDom from 'react-dom'

import { Child } from './Child'

import { SimpleProvider } from 'simple-redux-js'

const defaultToken = localStorage.getItem('token')

const App = () => (
  <SimpleProvider initialState={{ token: defaultToken }}>
    <Child>
  </SimpleProvider>
)

ReactDom.render(<App/>, document.getElementById('root'))
```

2. Access and update global state in any other component.

```javascript
import React from 'react'

import { useSimpleSelector, useDispatch, simpleAction } from 'simple-redux-js'

const Child = () => {
  const dispatch = useDispatch()
  const token = useSimpleSelector('token')
  const setToken = (token) => dispatch(simpleAction('token', token))

  return (
    <div>
      <span>{token}</span>
      <button onClick={() => setToken('user_token')}>
    </div>
  )
}
export { Child }
```

## Overview

Simple Redux is the very straight forward way to get global state without most of the boilerplate code that is needed for Redux.

## Documentation

- **useSimpleSelector** (propertyName)
Selects the property by name from the store.
``` javascript
Eg. const token = useSimpleSelector('token')
```
- **simpleAction** (propertyName, propertyValue))
Updates the property by name with the specified value.
``` javascript
  const dispatch = useDispatch()
  const setToken = (token) => dispatch(simpleAction('token', token))
  ```

## Examples

- [&lt;user-auth&gt;](https://brokenlink.com) - user auth state
- [&lt;todo-app&gt;](https://brokenlink.com) - todo app example

## License

`simple-redux-js` is released under the [ISC License](LICENSE).