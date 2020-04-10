import React, { Fragment } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import Home from './routes/Home'
import CustomHeader from './components/CustomHeader'


export const App = () => (
  <Fragment>
    <Router history={createBrowserHistory()}>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/header" component={CustomHeader}/>
      </Switch>
    </Router>
  </Fragment>
)
