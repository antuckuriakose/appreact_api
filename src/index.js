import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import {Route} from 'react-router'
import routes from './routes'
import { Router, browserHistory } from 'react-router'
// import App from './App';
// import './index.css';

ReactDOM.render(
  <Router history={browserHistory} routes={routes}/>,
  document.getElementById('root')
);
