import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Main from "./views/main/Main"
import Categories from './views/categories/Categories'
import "./App.css"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/:categories/:subCategory' component={Categories} />
        <Route exact path='/:categories' component={Categories} />
        <Route exact path='/' component={Main} />
      </Switch>
    </Router>
  );
}

export default App
