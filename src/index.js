import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import rootReducer from './redux/reducers/rootReducer'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

const middlewares = [thunk]
const store = createStore(rootReducer, applyMiddleware(...middlewares))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)