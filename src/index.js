import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// Redux Imports
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk';
// Reducers
import moviesReducers from './store/reducers/moviesReducers';

const rootReducer = combineReducers({
  movies: moviesReducers
})

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);