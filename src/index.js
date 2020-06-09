import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Mediacard from "./App";
import * as serviceWorker from "./serviceWorker";

/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);*/

ReactDOM.render(
  <Mediacard title="This is a Media Card" body="This is the description of Media Card" />,
  document.querySelector("#root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
