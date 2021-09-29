import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route } from 'react-router-dom'
import { ParallaxProvider } from 'react-scroll-parallax'
import { createBrowserHistory } from "history";


const customHistory = createBrowserHistory({
  // basename: config.urlBasename || ""
});

ReactDOM.render(
  <ParallaxProvider>
    <BrowserRouter history={customHistory}>
      <Route
        component={({ history }) => {
          window.appHistory = history;
          return <App />;
        }}
      />
    </BrowserRouter>
  </ParallaxProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
