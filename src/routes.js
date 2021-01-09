import React from 'react'
import { Router, Switch } from 'react-router-dom'

import AppRoute from './helpers/app-route'

import Home from './views/home'
import Filme from './views/filme'

import history from './history'

const Teste = () => <div>Teste</div>

export default function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <AppRoute exact path="/" component={Home} />
        <AppRoute exact path="/filme/:movieId" component={Filme} />
        <AppRoute exact path="/busca/:query" component={Teste} />
        <AppRoute exact path="/descubra" component={Teste} />
        <AppRoute exact path="/favoritos" component={Teste} />
      </Switch>
    </Router>
  )
}
