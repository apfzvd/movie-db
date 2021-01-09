import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import layout from './components/layout/layout-store'

const reducers = combineReducers({
  layout,
})

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
)

export default store
