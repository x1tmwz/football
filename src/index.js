import React from 'react';
import ReactDOM from 'react-dom';
import './style/style.scss';
import AppRouter from './routers/AppRouter';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.Fragment>
    <AppRouter/>
  </React.Fragment>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
