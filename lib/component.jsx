"use strict";

/**
 * Description here
 *
 *
 *
 * <i>Copyright (c) 2016 ItsAsbreuk - http://itsasbreuk.nl</i><br>
 * New BSD License - http://choosealicense.com/licenses/bsd-3-clause/
 *
 *
 * @module component.jsx
 * @class Component
 * @since 15.0.0
*/

const React = require("react"),
    PropTypes = React.PropTypes,
    MAIN_CLASS = "itsa-stars",
    STAR_CLASS = MAIN_CLASS+"-star",
    STARS = {
        0: "../css/star-empty.svg", // empty star
        1: "../css/star-half.svg", // half star
        2: "../css/star.svg" // full star
    };

const Component = React.createClass({

    propTypes: {
        className: PropTypes.string,
        fullStars: PropTypes.bool,
        onClick: PropTypes.func,
        onMouseEnter: PropTypes.func,
        onMousLeave: PropTypes.func,
        stars: PropTypes.number.isRequired
    },

    getInitialProps() {
        return {
            fullStars: false
        };
    },

    buildStars(numberOfStars) {
        let stars = [],
            props = this.props,
            onClick = props.onClick,
            i, fillLevel, onClickFn;
        console.warn(numberOfStars);
        for (i=1; i<6; i++) {
            if (onClick) {
                onClickFn = onClick.bind(null, i);
            }
            if (numberOfStars<(i-0.6)) {
                fillLevel = 0;
            }
            else if (numberOfStars<(i-0.1)) {
                fillLevel = 1;
            }
            else {
                fillLevel = 2;
            }
            stars.push(
                (<img className={STAR_CLASS} key={i} onClick={onClickFn} src={STARS[fillLevel]} />)
            );
        }

        return stars;
    },

    /**
     * React render-method --> renderes the Component.
     *
     * @method render
     * @return ReactComponent
     * @since 15.0.0
     */
    render() {
        const instance = this,
            props = instance.props,
            propsClass = props.className;
        let numberOfStars = props.stars,
            classname = MAIN_CLASS;

        propsClass && (classname+=" "+classname);
        if (props.fullStars) {
            numberOfStars = Math.round(numberOfStars);
        }
        else {
            numberOfStars = Math.round(numberOfStars*2)/2;
        }
        // limit between 0 and 5:
        numberOfStars = Math.min(Math.max(0, numberOfStars), 5);

        return (
            <div className={classname}
                 onMouseEnter={props.onMouseEnter}
                 onMousLeave={props.onMousLeave}>
                {instance.buildStars(numberOfStars)}
            </div>
        );
    }

});

module.exports = Component;
