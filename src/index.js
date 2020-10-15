import React from 'react'

import { createStore } from 'redux'
import { Provider, useSelector, useDispatch } from 'react-redux'

const getRootReducer = (initialState) => (state = initialState, action) => {
  if (action.type) {
    return { ...state, [action.type]: action[action.type] }
  }
  return state
}

let store

export { store }

const createSimpleStore = (initialState) => {
  const nstore = createStore(getRootReducer(initialState))
  store = nstore
  return nstore
}

const SimpleProvider = (props) => (<Provider store={createSimpleStore(props.initialState)}>{props.children}</Provider>)

export { SimpleProvider }

const useSimpleSelector = (property) => useSelector(state => state[property])

const useSimpleDispatch = () => {
  const dispatch = useDispatch()
  return (property, value) => dispatch({type: property, [property]: value})
}

export { useSimpleSelector, useSimpleDispatch }

const getSimpleState = (property) => store.getState()[property]
export { getSimpleState }

const getSimpleStates = () => store.getState()
export { getSimpleStates }
