import React from 'react'
import { shallow, mount } from 'enzyme'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

export const shallowConnected = (component, reducer, initialState) => {
  const store = createStore(reducer, initialState)
  return shallow(<Provider store={store}>{component}</Provider>)
}
