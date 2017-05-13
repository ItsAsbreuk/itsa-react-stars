/*global describe, it, before, after */

"use strict";

const React = require("react");
const ReactDOM = require("react-dom");
const TestUtils = require("react-addons-test-utils");

const chai = require("chai");
const expect = chai.expect;
const equalJSX = require("chai-equal-jsx");
const renderer = TestUtils.createRenderer();

chai.use(equalJSX);

const Stars = require("../lib/component.jsx");

describe("Button tests", function () {
    before(function () {
        this.jsdom = require("jsdom-global")();
    });

    after(function () {
        this.jsdom();
    });

    describe("Rendering Button", function () {

        it("Empty", function () {
            renderer.render(<Stars stars={5} />);
            const actual = renderer.getRenderOutput();
            const expected = (
                <div
                  className="itsa-stars"
                  onClick={undefined}
                  onMouseEnter={undefined}
                  onMouseLeave={undefined}
                  style={{height: '1em'}}>
                  <svg
                    viewBox="0 0 340 32"
                    xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <polygon
                        fill="#FFF"
                        id="empty-itsa-react-star-1"
                        points="32,12.118 20.389,10.918 16.026,0.6 11.547,10.918 0,12.118 8.822,19.867 6.127,31.4 16,25.325 16.021,25.312 25.914,31.4 23.266,19.867"
                        stroke="#000"
                        strokeWidth={0} />
                      <g id="half-itsa-react-star-1">
                        <polygon
                          fill="#FFF"
                          points="32,12.118 20.389,10.918 16.026,0.6 11.547,10.918 0,12.118 8.822,19.867 6.127,31.4 16,25.325 16.021,25.312 25.914,31.4 23.266,19.867"
                          stroke="#000"
                          strokeWidth={0} />
                        <polygon
                          fill="#000"
                          points="11.547,10.918 0,12.118 8.822,19.867 6.127,31.4 16,25.325 16,0.66" />
                        <path
                          d="M16,0.66 L11.547 10.918 L0,12.118 L8.822,19.867 L6.127,31.4 L16,25.325"
                          fill="none"
                          stroke="#000"
                          strokeWidth={0} />
                      </g>
                      <polygon
                        fill="#000"
                        id="full-itsa-react-star-1"
                        points="32,12.118 20.389,10.918 16.026,0.6 11.547,10.918 0,12.118 8.822,19.867 6.127,31.4 16,25.325 16.021,25.312 25.914,31.4 23.266,19.867"
                        stroke="#000"
                        strokeWidth={0} />
                    </defs>
                    <use
                      color={undefined}
                      onClick={undefined}
                      onMouseEnter={undefined}
                      onMouseLeave={undefined}
                      transform="translate(0 0)"
                      xlinkHref="#full-itsa-react-star-1" />
                    <use
                      color={undefined}
                      onClick={undefined}
                      onMouseEnter={undefined}
                      onMouseLeave={undefined}
                      transform="translate(45 0)"
                      xlinkHref="#full-itsa-react-star-1" />
                    <use
                      color={undefined}
                      onClick={undefined}
                      onMouseEnter={undefined}
                      onMouseLeave={undefined}
                      transform="translate(90 0)"
                      xlinkHref="#full-itsa-react-star-1" />
                    <use
                      color={undefined}
                      onClick={undefined}
                      onMouseEnter={undefined}
                      onMouseLeave={undefined}
                      transform="translate(135 0)"
                      xlinkHref="#full-itsa-react-star-1" />
                    <use
                      color={undefined}
                      onClick={undefined}
                      onMouseEnter={undefined}
                      onMouseLeave={undefined}
                      transform="translate(180 0)"
                      xlinkHref="#full-itsa-react-star-1" />
                  </svg>
                </div>
            );
            expect(actual).to.equalJSX(expected);
        });

        it("Different props", function () {
            renderer.render(
                <Stars
                    className="dummy-class"
                    emptyColor="#F00"
                    fillColor="#0F0"
                    fullStars={true}
                    onClick={function() {return 1;}}
                    onMouseEnter={function() {return 1;}}
                    onMouseLeave={function() {return 1;}}
                    onClickContainer={function() {return 1;}}
                    onMouseEnterContainer={function() {return 1;}}
                    onMouseLeaveContainer={function() {return 1;}}
                    size="5em"
                    spaced={100}
                    stars={3.5}
                    strokeColor="#FF0"
                    strokeWidth={5} />
            );
            const actual = renderer.getRenderOutput();
            const expected = (
                <div
                  className="itsa-stars itsa-stars"
                  onClick={function noRefCheck() {}}
                  onMouseEnter={function noRefCheck() {}}
                  onMouseLeave={function noRefCheck() {}}
                  style={{height: '5em'}}>
                  <svg
                    viewBox="0 0 610 42"
                    xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <polygon
                        fill="#F00"
                        id="empty-itsa-react-star-1"
                        points="32,12.118 20.389,10.918 16.026,0.6 11.547,10.918 0,12.118 8.822,19.867 6.127,31.4 16,25.325 16.021,25.312 25.914,31.4 23.266,19.867"
                        stroke="#FF0"
                        strokeWidth={5} />
                      <g id="half-itsa-react-star-1">
                        <polygon
                          fill="#F00"
                          points="32,12.118 20.389,10.918 16.026,0.6 11.547,10.918 0,12.118 8.822,19.867 6.127,31.4 16,25.325 16.021,25.312 25.914,31.4 23.266,19.867"
                          stroke="#FF0"
                          strokeWidth={5} />
                        <polygon
                          fill="#0F0"
                          points="11.547,10.918 0,12.118 8.822,19.867 6.127,31.4 16,25.325 16,0.66" />
                        <path
                          d="M16,0.66 L11.547 10.918 L0,12.118 L8.822,19.867 L6.127,31.4 L16,25.325"
                          fill="none"
                          stroke="#FF0"
                          strokeWidth={5} />
                      </g>
                      <polygon
                        fill="#0F0"
                        id="full-itsa-react-star-1"
                        points="32,12.118 20.389,10.918 16.026,0.6 11.547,10.918 0,12.118 8.822,19.867 6.127,31.4 16,25.325 16.021,25.312 25.914,31.4 23.266,19.867"
                        stroke="#FF0"
                        strokeWidth={5} />
                    </defs>
                    <use
                      color={undefined}
                      onClick={function noRefCheck() {}}
                      onMouseEnter={function noRefCheck() {}}
                      onMouseLeave={function noRefCheck() {}}
                      transform="translate(5 5)"
                      xlinkHref="#full-itsa-react-star-1" />
                    <use
                      color={undefined}
                      onClick={function noRefCheck() {}}
                      onMouseEnter={function noRefCheck() {}}
                      onMouseLeave={function noRefCheck() {}}
                      transform="translate(105 5)"
                      xlinkHref="#full-itsa-react-star-1" />
                    <use
                      color={undefined}
                      onClick={function noRefCheck() {}}
                      onMouseEnter={function noRefCheck() {}}
                      onMouseLeave={function noRefCheck() {}}
                      transform="translate(205 5)"
                      xlinkHref="#full-itsa-react-star-1" />
                    <use
                      color={undefined}
                      onClick={function noRefCheck() {}}
                      onMouseEnter={function noRefCheck() {}}
                      onMouseLeave={function noRefCheck() {}}
                      transform="translate(305 5)"
                      xlinkHref="#full-itsa-react-star-1" />
                    <use
                      color={undefined}
                      onClick={function noRefCheck() {}}
                      onMouseEnter={function noRefCheck() {}}
                      onMouseLeave={function noRefCheck() {}}
                      transform="translate(405 5)"
                      xlinkHref="#empty-itsa-react-star-1" />
                  </svg>
                </div>
            );
            expect(actual).to.equalJSX(expected);
        });

    });

    describe("Events on Container", function () {

        it("onClick event", function () {
            let handled = false;
            const handleClick = () => {
                handled = true;
            };
            const stars = TestUtils.renderIntoDocument(<Stars
                onClickContainer={handleClick}
                stars={1} />
            );
            const buttonNode = ReactDOM.findDOMNode(stars);
            TestUtils.Simulate.click(buttonNode);
            expect(handled).to.be.true;
        });

        it("mouseEnter event", function () {
            let handled = false;
            const handleMouseEnter = () => {
                handled = true;
            };
            const stars = TestUtils.renderIntoDocument(<Stars
                onMouseEnterContainer={handleMouseEnter}
                stars={1} />
            );
            const buttonNode = ReactDOM.findDOMNode(stars);
            TestUtils.Simulate.mouseEnter(buttonNode);
            expect(handled).to.be.true;
        });

        it("mouseLeave event", function () {
            let handled = false;
            const handleMouseLeave = () => {
                handled = true;
            };
            const stars = TestUtils.renderIntoDocument(<Stars
                onMouseLeaveContainer={handleMouseLeave}
                stars={1} />
            );
            const buttonNode = ReactDOM.findDOMNode(stars);
            TestUtils.Simulate.mouseLeave(buttonNode);
            expect(handled).to.be.true;
        });

    });


    describe("Events on Stars", function () {

        it("onClick event", function () {
            let starValue = -1;
            const handleClick = starNr => {
                starValue = starNr;
            };
            const stars = TestUtils.renderIntoDocument(<Stars
                onClick={handleClick}
                stars={1} />
            );
            const buttonNode = ReactDOM.findDOMNode(stars);
            const starNodes = buttonNode.querySelectorAll('use');
            expect(starNodes.length).to.be.eql(5);
            TestUtils.Simulate.click(starNodes[0]);
            expect(starValue).to.be.eql(1);
            TestUtils.Simulate.click(starNodes[1]);
            expect(starValue).to.be.eql(2);
            TestUtils.Simulate.click(starNodes[2]);
            expect(starValue).to.be.eql(3);
            TestUtils.Simulate.click(starNodes[3]);
            expect(starValue).to.be.eql(4);
            TestUtils.Simulate.click(starNodes[4]);
            expect(starValue).to.be.eql(5);
            // check lower value:
            TestUtils.Simulate.click(starNodes[2]);
            expect(starValue).to.be.eql(3);
        });

        it("mouseEnter event", function () {
            let starValue = -1;
            const handleMouseEnter = starNr => {
                starValue = starNr;
            };
            const stars = TestUtils.renderIntoDocument(<Stars
                onMouseEnter={handleMouseEnter}
                stars={1} />
            );
            const buttonNode = ReactDOM.findDOMNode(stars);
            const starNodes = buttonNode.querySelectorAll('use');
            expect(starNodes.length).to.be.eql(5);
            TestUtils.Simulate.mouseEnter(starNodes[0]);
            expect(starValue).to.be.eql(1);
            TestUtils.Simulate.mouseEnter(starNodes[1]);
            expect(starValue).to.be.eql(2);
            TestUtils.Simulate.mouseEnter(starNodes[2]);
            expect(starValue).to.be.eql(3);
            TestUtils.Simulate.mouseEnter(starNodes[3]);
            expect(starValue).to.be.eql(4);
            TestUtils.Simulate.mouseEnter(starNodes[4]);
            expect(starValue).to.be.eql(5);
            // check lower value:
            TestUtils.Simulate.mouseEnter(starNodes[2]);
            expect(starValue).to.be.eql(3);
        });

        it("mouseLeave event", function () {
            let starValue = -1;
            const handleMouseLeave = starNr => {
                starValue = starNr;
            };
            const stars = TestUtils.renderIntoDocument(<Stars
                onMouseLeave={handleMouseLeave}
                stars={1} />
            );
            const buttonNode = ReactDOM.findDOMNode(stars);
            const starNodes = buttonNode.querySelectorAll('use');
            expect(starNodes.length).to.be.eql(5);
            TestUtils.Simulate.mouseLeave(starNodes[0]);
            expect(starValue).to.be.eql(1);
            TestUtils.Simulate.mouseLeave(starNodes[1]);
            expect(starValue).to.be.eql(2);
            TestUtils.Simulate.mouseLeave(starNodes[2]);
            expect(starValue).to.be.eql(3);
            TestUtils.Simulate.mouseLeave(starNodes[3]);
            expect(starValue).to.be.eql(4);
            TestUtils.Simulate.mouseLeave(starNodes[4]);
            expect(starValue).to.be.eql(5);
            // check lower value:
            TestUtils.Simulate.mouseLeave(starNodes[2]);
            expect(starValue).to.be.eql(3);
        });

    });
});
