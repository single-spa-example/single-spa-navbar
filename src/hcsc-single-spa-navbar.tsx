import "./set-public-path";
import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Root from "./components/Root";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  domElementGetter: () => {
    let header = document.getElementsByTagName("header")[0];
    let el = document.getElementById("navbar");
    if (!el) {
      el = document.createElement("nav");
      el.id = "navbar";
      el.className = "topnav";
      header.appendChild(el);
    }
    return el;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
