import React from 'react'
import { Switch } from 'react-router-dom'

import AppRoute from './helpers/app-route'

import Home from './views/home'

export default function Routes() {
  return (
    <Switch>
      <AppRoute exact path="/" component={Home} />
    </Switch>
  )
}
