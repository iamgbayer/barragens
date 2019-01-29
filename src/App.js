import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import { Header } from './components/Header'
import { Menu } from './components/Menu'
import { Map } from './Pages/Map'
import { About } from './Pages/About'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`

export const App = () => (
  <Fragment>
    <Header />

    <Container>
      <Menu />

      <BrowserRouter>
        <Switch>
          <Route exact={true} path="/" component={Map} />
          <Route path="/about" component={About} />
        </Switch>
      </BrowserRouter>
    </Container>
  </Fragment>
)
