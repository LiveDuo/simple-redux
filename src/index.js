import React from 'react'

import { createStore } from 'redux'
import { Provider, useSelector, useDispatch } from 'react-redux'

const getRootReducer = (initialState) => (state = initialState, action) => {
  if (action.type) {
    return { ...state, [action.type]: action[action.type] }
  }
  return state
}

const createSimpleStore = (initialState) => createStore(getRootReducer(initialState))

const SimpleProvider = (props) => (<Provider store={createSimpleStore(props.initialState)}>{props.children}</Provider>)

export { SimpleProvider }

const useSimpleSelector = (property) => useSelector(state => state[property])

export { useSimpleSelector, useDispatch }

const simpleAction = (property, value) => ({type: property, [property]: value})

export { simpleAction }