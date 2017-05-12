"use strict";

const React = require("react"),
    ReactDOM = require("react-dom"),
    Component = require("./lib/component-styled.jsx");

let props = {
    stars: 3.5,
    onClick: starNr => {
        if (starNr===1) {
            props.stars = (props.stars===1) ? 0 : Math.min(1, props.stars+0.5);
        }
        else {
            props.stars = (props.stars===starNr) ? starNr-0.5 : starNr;
        }
        renderFn();
    }
};

const renderFn = () => {
    ReactDOM.render(
        <Component {...props} />,
        document.getElementById("component-container")
    );
};

renderFn();