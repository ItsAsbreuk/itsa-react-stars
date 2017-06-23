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

require('itsa-jsext');

const React = require("react"),
    PropTypes = require("prop-types"),
    idGenerator = require('itsa-utils').idGenerator,
    MAIN_CLASS = "itsa-stars",
    DEF_SIZE = '1em', // equals its height
    SVG_HEIGHT = 32, // do not change as it matches the svg-items!
    STAR_CLASS = MAIN_CLASS+"-star",
    BASE_STAR_IDS = {
        0: 'empty-',
        1: 'half-',
        2: 'full-'
    };

class Component extends React.Component {
    constructor(props) {
        super(props);
        const instance = this;
        instance.buildStars = instance.buildStars.bind(instance);
    }

    /**
     * componentWillMount initializes this.starIds
     *
     * @method componentWillMount
     * @since 15.0.0
     */
    componentWillMount() {
        const prepend = idGenerator('itsa-react-star');
        this.starIds = BASE_STAR_IDS.itsa_map(value => value+prepend);
    }

    /**
     * Builds 5 stars, among which some of them are filled.
     *
     * @method buildStars
     * @param numberOfStars {Number} the number of stars to be filled.
     * @since 15.0.0
     */
    buildStars(numberOfStars) {
        let instance = this,
            stars = [],
            props = instance.props,
            strokeWidth = props.strokeWidth,
            spaced = props.spaced,
            onClick = props.onClick,
            onMouseEnter = props.onMouseEnter,
            onMouseLeave = props.onMouseLeave,
            starIds = instance.starIds,
            s;
        const generateStar = i => {
            const translateX = (i-1)*spaced+strokeWidth;
            let onClickFn, onMouseEnterFn, onMouseLeaveFn, fillLevel, transform;
            if (onClick) {
                onClickFn = onClick.bind(null, i);
            }
            if (onMouseEnter) {
                onMouseEnterFn = onMouseEnter.bind(null, i);
            }
            if (onMouseLeave) {
                onMouseLeaveFn = onMouseLeave.bind(null, i);
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
            // StarComponent = STARS[fillLevel];
            transform = 'translate('+translateX+' '+strokeWidth+')';
            stars.push(
                (<use
                    color={props.color}
                    key={i}
                    onClick={onClickFn}
                    onMouseEnter={onMouseEnterFn}
                    onMouseLeave={onMouseLeaveFn}
                    transform={transform}
                    xlinkHref={'#'+starIds[fillLevel]} />)
            );
        };

        for (s=1; s<6; s++) {
            generateStar(s);
        }

        return stars;
    }

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
            emptyColor = props.emptyColor,
            fillColor = props.fillColor,
            fullStars = props.fullStars,
            strokeColor = props.strokeColor,
            strokeWidth = props.strokeWidth,
            propsClass = props.className,
            svgHeight = SVG_HEIGHT+(2*strokeWidth),
            svgWidth = (5*svgHeight) + (4*props.spaced),
            starIds = instance.starIds;
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
            <div
                className={classname}
                onClick={props.onClickContainer}
                onMouseEnter={props.onMouseEnterContainer}
                onMouseLeave={props.onMouseLeaveContainer}
                style={{height: props.size}} >
                <svg
                    viewBox={'0 0 '+svgWidth+' '+svgHeight}
                    xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <polygon
                            id={starIds['0']}
                            fill={emptyColor}
                            points="32,12.118 20.389,10.918 16.026,0.6 11.547,10.918 0,12.118 8.822,19.867 6.127,31.4 16,25.325 16.021,25.312 25.914,31.4 23.266,19.867"
                            stroke={strokeColor}
                            strokeWidth={strokeWidth} />
                        <g id={starIds['1']}>
                            <polygon
                                fill={emptyColor}
                                points="32,12.118 20.389,10.918 16.026,0.6 11.547,10.918 0,12.118 8.822,19.867 6.127,31.4 16,25.325 16.021,25.312 25.914,31.4 23.266,19.867"
                                stroke={strokeColor}
                                strokeWidth={strokeWidth} />
                            <polygon
                                fill={fillColor}
                                points="11.547,10.918 0,12.118 8.822,19.867 6.127,31.4 16,25.325 16,0.66" />
                            <path
                                fill="none"
                                d="M16,0.66 L11.547 10.918 L0,12.118 L8.822,19.867 L6.127,31.4 L16,25.325"
                                stroke={strokeColor}
                                strokeWidth={strokeWidth} />
                        </g>
                        <polygon
                            id={starIds['2']}
                            fill={fillColor}
                            points="32,12.118 20.389,10.918 16.026,0.6 11.547,10.918 0,12.118 8.822,19.867 6.127,31.4 16,25.325 16.021,25.312 25.914,31.4 23.266,19.867"
                            stroke={strokeColor}
                            strokeWidth={strokeWidth} />
                    </defs>
                    {instance.buildStars(numberOfStars)}
                </svg>
            </div>
        );
    }

}

Component.propTypes = {
    /**
     * The class for the component.
     *
     * @property className
     * @type String
     * @since 15.0.0
    */
    className: PropTypes.string,

    /**
     * Fill color for an empty star.
     *
     * @property emptyColor
     * @default '#FFF'
     * @type String
     * @since 15.0.0
    */
    emptyColor: PropTypes.string,

    /**
     * Fill color for an filled star.
     *
     * @property fillColor
     * @default '#000'
     * @type String
     * @since 15.0.0
    */
    fillColor: PropTypes.string,

    /**
     * Whether to accept only full stars instead of half-full stars.
     * By default, the component supports half full stars.
     *
     * @property fullStars
     * @default false
     * @type Boolean
     * @since 15.0.0
    */
    fullStars: PropTypes.bool,

    /**
     * Callback for the onClick event.
     * Callback has arguments: (nr, e) where `nr` is the star-nr, starting with 1.
     *
     * @property onClick
     * @type Function
     * @since 15.0.0
    */
    onClick: PropTypes.func,

    /**
     * Callback for the onClick event on the container.
     *
     * @property onClickContainer
     * @type Function
     * @since 15.0.0
    */
    onClickContainer: PropTypes.func,

    /**
     * Callback for the onMouseEnter event.
     * Callback has arguments: (nr, e) where `nr` is the star-nr, starting with 1.
     *
     * @property onMouseEnter
     * @type Function
     * @since 15.0.0
    */
    onMouseEnter: PropTypes.func,

    /**
     * Callback for the onMouseEnter event on the container.
     *
     * @property onMouseEnterContainer
     * @type Function
     * @since 15.0.0
    */
    onMouseEnterContainer: PropTypes.func,

    /**
     * Callback for the onMouseLeave event on a star.
     * Callback has arguments: (nr, e) where `nr` is the star-nr, starting with 1.
     *
     * @property onMouseLeave
     * @type Function
     * @since 15.0.0
    */
    onMouseLeave: PropTypes.func,

    /**
     * Callback for the onMouseLeave event on the container.
     *
     * @property onMouseLeaveContainer
     * @type Function
     * @since 15.0.0
    */
    onMouseLeaveContainer: PropTypes.func,

    /**
     * The size of the component, specified by its height.
     *
     * @property size
     * @default '1em'
     * @type String
     * @since 15.0.0
    */
    size: PropTypes.string,

    /**
     * The space inbetween the stars.
     *
     * @property spaced
     * @default 45
     * @type Number
     * @since 15.0.0
    */
    spaced: PropTypes.number,

    /**
     * The number of stars to be filled. Should be a number between 0 and 5.
     * Filling is done based upon half, or full stars: depending on this.props.fullStars.
     *
     * @property stars
     * @type Number
     * @required
     * @since 15.0.0
    */
    stars: PropTypes.number.isRequired,

    /**
     * The stroke color of the stars.
     *
     * @property strokeColor
     * @type String
     * @default '#000'
     * @since 15.0.0
    */
    strokeColor: PropTypes.string,

    /**
     * The stroke width of the stars.
     *
     * @property strokeWidth
     * @type Number
     * @default 0
     * @since 15.0.0
    */
    strokeWidth: PropTypes.number
};

Component.defaultProps = {
    emptyColor: '#FFF',
    fillColor: '#000',
    fullStars: false,
    size: DEF_SIZE,
    spaced: 45,
    strokeColor: '#000',
    strokeWidth: 0
};

module.exports = Component;
