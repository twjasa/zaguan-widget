import "react-hot-loader";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const widgetDivs = document.querySelectorAll(`.sb-result-section`);
widgetDivs.forEach((div) => {
  ReactDOM.render(
    <React.StrictMode>
      <App symbol={div.dataset.symbol} />
    </React.StrictMode>,
    div
  );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
