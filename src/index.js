import React from 'react'
import ReactDOM from 'react-dom'

import './stylus/config.styl'

import App from './app'

ReactDOM.hydrate(<App />, document.getElementById('main'))
