import React, { Fragment } from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import { Header } from './components/Header'
import { Menu } from './components/Menu'
import { Map } from './Pages/Map'
import { About } from './Pages/About'

export const App = () => (
  <Fragment>
    <Header />
    <Menu />

    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={Map} />
        <Route path="/about" component={About} />
      </Switch>
    </BrowserRouter>
  </Fragment>
)
