import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import Menu from './Menu';
import './style.less';
render(
  <BrowserRouter>
    <div className="Wrapper">
      <Menu />
      <div className="Wrapper-map">
        <Router />
      </div>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
// ReactDOM.render(<App />, document.getElementById("root"));

