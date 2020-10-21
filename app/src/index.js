import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bulma/css/bulma.min.css';
import * as serviceWorker from './serviceWorker';

import ArticleList from './components/ArticleList';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { appReducer } from './reducers/';

let store = createStore(appReducer, applyMiddleware(thunk, logger));

// Display top 25 stories

function App() {
  return (
    <div className="App">
      <header className="container has-text-centered">
        <h1 className="title is-2">Hacker News</h1>
      </header>
      <div className="container articles-container">
        <ArticleList />
      </div>
    </div>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
