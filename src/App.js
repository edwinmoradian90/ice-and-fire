import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Main from "./views/main/Main"
import Categories from './views/categories/Categories'
import Display from './views/display/Display'
import "./App.css"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route exact path='/books' component={Categories} />
        <Route exact path='/characters' component={Categories} />
        <Route exact path='/houses' component={Categories} />
        <Route path='/books/:id/:category' component={Display} />
        <Route path='/characters/:id/:category' component={Display} />
        <Route path='/houses/:id/:category' component={Display} />
      </Switch>
    </Router>
  );
}

export default App
