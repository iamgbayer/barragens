import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import { Header } from './components/Header'
import { Menu } from './components/Menu'
import { Map } from './pages/Map'
import { About } from './pages/About'
import { LocationProvider } from './providers/LocationProvider'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`

export const App = () => (
  <Fragment>
    <Header />

    <Container>
      <BrowserRouter>
        <Menu />

        <Switch>
          <LocationProvider>
            <Route exact={true} path="/" component={Map} />
          </LocationProvider>
          <Route path="/about" component={About} />
        </Switch>
      </BrowserRouter>
    </Container>
  </Fragment>
)
