import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const fname="dhananjay"
const lname="kumar"
const date=new Date();
ReactDOM.render(
  <>
    <p>
    {`  my name is ${fname} ${lname}`}
    mu lucky nubber is{5+2}
     </p>
     <h1>dhananjay kumar</h1>
     <p> {`todays date is ${date.getDate()}/ ${date.getMonth()}/ ${date.getFullYear()}`}</p>
     <p>{`todays time is ${date.getHours()} ${date.getMinutes()} ${date.getSeconds()}`}</p>
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
