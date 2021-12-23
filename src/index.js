import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'semantic-ui-css/semantic.min.css'
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { combineReducers, applyMiddleware, compose } from 'redux';
import { errorReducer, userReducer, todoReducer } from './store/reducers';
import thunk from 'redux-thunk';
import { getToDos } from './store/actions';
import { BrowserRouter as Router } from 'react-router-dom';

const combine = combineReducers({ user: userReducer, error: errorReducer, todo: todoReducer });
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(combine, composeEnhancers(applyMiddleware(thunk)))
// store.dispatch(getToDos(4))
//navigator.geolocation.getCurrentPosition((success)=>{console.log(success)});
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals(console.log);
