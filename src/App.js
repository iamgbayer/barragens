import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import { Header } from './components/Header'
import { Menu } from './components/Menu'
import { Map } from './pages/Map'
import { About } from './pages/About'
import { Provider } from './Provider'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`

export const App = () => (
  <BrowserRouter>
    <Fragment>
      <Header />

      <Container>
        <Menu>
          <Switch>
            <Provider>
              <Route exact={true} path="/" component={Map} />
            </Provider>
            <Route path="/about" component={About} />
          </Switch>
        </Menu>
      </Container>
    </Fragment>
  </BrowserRouter>
)
