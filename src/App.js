import React, { Fragment } from 'react'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import ReactGA from 'react-ga'

import { Header } from './components/Header'
import { Menu } from './components/Menu'
import { Map } from './pages/Map'
import { About } from './pages/About'
import { Provider } from './Provider'

const GlobalStyle = createGlobalStyle`
  .leaflet-tile-pane {
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
  }
`

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`

ReactGA.initialize(process.env.REACT_APP_UA)

export const App = () => (
  <BrowserRouter>
    <Fragment>
      <GlobalStyle />
      <Header />

      <Container>
        <Menu>
          <Switch>
            <Provider>
              <Route exact={true} path="/" component={Map} />
              <Route exact={true} path="/about" component={About} />
            </Provider>
          </Switch>
        </Menu>
      </Container>
    </Fragment>
  </BrowserRouter>
)
