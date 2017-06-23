"use strict";

const React = require("react"),
    ReactDOM = require("react-dom"),
    Component = require("./lib/component-styled.jsx");

let props = {
    stars: 2,
    fullStars: true,
    strokeWidth: 3,
    onClick: starNr => {
        props.stars = (props.stars===starNr) ? starNr-1 : starNr;
        renderFn();
    }
};

let props2 = {
    emptyColor: '#aaa',
    fillColor: '#ffa500',
    size: '5em',
    stars: 3.5,
    onClick: starNr => {
        if (starNr===1) {
            props2.stars = (props2.stars===1) ? 0 : Math.min(1, props2.stars+0.5);
        }
        else {
            props2.stars = (props2.stars===starNr) ? starNr-0.5 : starNr;
        }
        renderFn2();
    }
};

const renderFn = () => {
    ReactDOM.render(
        <Component {...props} />,
        document.getElementById("component-container")
    );
};

const renderFn2 = () => {
    ReactDOM.render(
        <Component {...props2} />,
        document.getElementById("component-container2")
    );
};

renderFn();
renderFn2();