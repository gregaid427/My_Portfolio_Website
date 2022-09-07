import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";

// import AllHome from "./pages/AllHome";

import Error from "./pages/error";
import Reset from "./pages/Reset";
import Home from "./pages/Home";
import NewPassword from "./pages/newPassword";
import { Provider } from "react-redux";
import store from "./redux/store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<Error />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/home" element={<Home />} />
        <Route path="/newPassword" element={<NewPassword />} />
      </Routes>
    </Provider>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebSkills(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-Skills
