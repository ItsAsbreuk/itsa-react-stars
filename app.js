"use strict";

const React = require("react"),
    ReactDOM = require("react-dom"),
    Component = require("./lib/component-styled.jsx");

const props = {
    stars: 3.5
};

ReactDOM.render(
    <Component {...props} />,
    document.getElementById("component-container")
);
