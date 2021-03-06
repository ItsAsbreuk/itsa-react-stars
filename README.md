[![Build Status](https://travis-ci.org/ItsAsbreuk/itsa-react-stars.svg?branch=master)](https://travis-ci.org/ItsAsbreuk/itsa-react-stars)

Lightweight svg Star ranking for react.

Lightweight and comes with listeners.

## How to use:

```js
const React = require("react"),
    ReactDOM = require("react-dom"),
    Component = require("./lib/component-styled.jsx");

let props = {
    emptyColor: '#aaa',
    fillColor: '#ffa500',
    fullStars: true,
    size: '5em',
    stars: 3.5, // <-- the most important property: it sets the number of filled stars
    strokeWidth: 3,
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
```

## About the css

You need the right css in order to make use of `itsa-react-stars`. There are 2 options:

1. You can use the css-files inside the `css`-folder.
2. You can use: `Component = require("itsa-react-stars/lib/component-styled.jsx");` and build your project with `webpack`. This is needed, because you need the right plugin to handle a requirement of the `scss`-file.


[View live example](http://projects.itsasbreuk.nl/react-components/itsa-stars/component.html)

[API](http://projects.itsasbreuk.nl/react-components/itsa-stars/api/)


#### If you want to express your appreciation

Feel free to donate to one of these addresses; my thanks will be great :)

* Ether: 0xE096EBC2D19eaE7dA8745AA5D71d4830Ef3DF963
* Bitcoin: 37GgB6MrvuxyqkQnGjwxcn7vkcdont1Vmg
