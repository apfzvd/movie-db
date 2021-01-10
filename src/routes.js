import React from 'react'
import { Router, Switch } from 'react-router-dom'

import AppRoute from './helpers/app-route'

import Home from './views/home'
import Film from './views/film'
import Search from './views/search'
import Discover from './views/discover'

import history from './history'

export default function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <AppRoute exact path="/" component={Home} />
        <AppRoute
          exact
          path="/filme/:movieId"
          component={Film}
          withHeader={false}
        />
        <AppRoute exact path="/busca" component={Search} />
        <AppRoute exact path="/busca/:query" component={Search} />
        <AppRoute exact path="/descubra" component={Discover} />
        <AppRoute exact path="/favoritos" component={Discover} />
      </Switch>
    </Router>
  )
}
