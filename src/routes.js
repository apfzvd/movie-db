import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'

import AppRoute from './helpers/app-route'

import Home from './views/home'
import Film from './views/film'

import history from './history'

const Teste = () => <div>Teste</div>

export default function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <AppRoute exact path="/" component={Home} />
        <Route exact path="/filme/:movieId" component={Film} />
        <AppRoute exact path="/busca/:query" component={Teste} />
        <AppRoute exact path="/descubra" component={Teste} />
        <AppRoute exact path="/favoritos" component={Teste} />
      </Switch>
    </Router>
  )
}
