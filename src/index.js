import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import App from "./App";
import "./index.css";
import reducers from './reducers';
import {ContextProvider} from './context/classroom/context'


const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <ContextProvider>
      <App/>
    </ContextProvider>
  </Provider>,
  document.getElementById("root")
);
