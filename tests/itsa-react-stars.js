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
            renderer.render(<Stars />);
            const actual = renderer.getRenderOutput();
            const expected = (
                <div
                  className="itsa-stars"
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
                      transform="translate(0 0)"
                      xlinkHref="#full-itsa-react-star-1" />
                    <use
                      color={undefined}
                      onClick={undefined}
                      transform="translate(45 0)"
                      xlinkHref="#full-itsa-react-star-1" />
                    <use
                      color={undefined}
                      onClick={undefined}
                      transform="translate(90 0)"
                      xlinkHref="#full-itsa-react-star-1" />
                    <use
                      color={undefined}
                      onClick={undefined}
                      transform="translate(135 0)"
                      xlinkHref="#full-itsa-react-star-1" />
                    <use
                      color={undefined}
                      onClick={undefined}
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
                    onMousLeave={function() {return 1;}}
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
                  onMouseEnter={function noRefCheck() {}}
                  onMouseLeave={undefined}
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
                      transform="translate(5 5)"
                      xlinkHref="#full-itsa-react-star-1" />
                    <use
                      color={undefined}
                      onClick={function noRefCheck() {}}
                      transform="translate(105 5)"
                      xlinkHref="#full-itsa-react-star-1" />
                    <use
                      color={undefined}
                      onClick={function noRefCheck() {}}
                      transform="translate(205 5)"
                      xlinkHref="#full-itsa-react-star-1" />
                    <use
                      color={undefined}
                      onClick={function noRefCheck() {}}
                      transform="translate(305 5)"
                      xlinkHref="#full-itsa-react-star-1" />
                    <use
                      color={undefined}
                      onClick={function noRefCheck() {}}
                      transform="translate(405 5)"
                      xlinkHref="#empty-itsa-react-star-1" />
                  </svg>
                </div>
            );
            expect(actual).to.equalJSX(expected);
        });
/*
        it("buttonHTML", function () {
            renderer.render(<Button buttonHTML="Press <b>me</b>" />);
            const actual = renderer.getRenderOutput();
            const expected = (
               <button
                  accessKey={undefined}
                  aria-label="Press me"
                  aria-pressed={undefined}
                  className="itsa-button itsa-formelement"
                  dangerouslySetInnerHTML={{__html: 'Press <b>me</b>'}}
                  disabled={false}
                  name={undefined}
                  onClick={undefined}
                  onKeyDown={function noRefCheck() {}}
                  onKeyUp={function noRefCheck() {}}
                  onMouseDown={function noRefCheck() {}}
                  onMouseOut={function noRefCheck() {}}
                  onMouseUp={function noRefCheck() {}}
                  role="button"
                  style={undefined}
                  tabIndex={undefined}
                  type="button"
                />
            );
            expect(actual).to.equalJSX(expected);
        });

        it("buttonText", function () {
            renderer.render(<Button buttonText="Press <b>me</b>" />);
            const actual = renderer.getRenderOutput();
            const expected = (
                <button
                  accessKey={undefined}
                  aria-label="Press me"
                  aria-pressed={undefined}
                  className="itsa-button itsa-formelement"
                  dangerouslySetInnerHTML={undefined}
                  disabled={false}
                  name={undefined}
                  onClick={undefined}
                  onKeyDown={function noRefCheck() {}}
                  onKeyUp={function noRefCheck() {}}
                  onMouseDown={function noRefCheck() {}}
                  onMouseOut={function noRefCheck() {}}
                  onMouseUp={function noRefCheck() {}}
                  role="button"
                  style={undefined}
                  tabIndex={undefined}
                  type="button"
                >
                  Press me
                </button>
            );
            expect(actual).to.equalJSX(expected);
        });

        it("buttonText and buttonHTML", function () {
            renderer.render(<Button buttonText="Press <b>me</b>" buttonHTML="Press <b>me</b>" />);
            const actual = renderer.getRenderOutput();
            const expected = (
               <button
                  accessKey={undefined}
                  aria-label="Press me"
                  aria-pressed={undefined}
                  className="itsa-button itsa-formelement"
                  dangerouslySetInnerHTML={{__html: 'Press <b>me</b>'}}
                  disabled={false}
                  name={undefined}
                  onClick={undefined}
                  onKeyDown={function noRefCheck() {}}
                  onKeyUp={function noRefCheck() {}}
                  onMouseDown={function noRefCheck() {}}
                  onMouseOut={function noRefCheck() {}}
                  onMouseUp={function noRefCheck() {}}
                  role="button"
                  style={undefined}
                  tabIndex={undefined}
                  type="button"
                />
            );
            expect(actual).to.equalJSX(expected);
        });

        it("Toggled true", function () {
            renderer.render(<Button toggled={true} buttonText="Press <b>me</b>" />);
            const actual = renderer.getRenderOutput();
            const expected = (
                <button
                  accessKey={undefined}
                  aria-label="Press me"
                  aria-pressed={true}
                  className="itsa-button itsa-formelement itsa-button-active itsa-button-toggled itsa-button-togglebtn"
                  dangerouslySetInnerHTML={undefined}
                  disabled={false}
                  name={undefined}
                  onClick={undefined}
                  onKeyDown={function noRefCheck() {}}
                  onKeyUp={function noRefCheck() {}}
                  onMouseDown={function noRefCheck() {}}
                  onMouseOut={function noRefCheck() {}}
                  onMouseUp={function noRefCheck() {}}
                  role="button"
                  style={undefined}
                  tabIndex={undefined}
                  type="button"
                >
                  Press me
                </button>
            );
            expect(actual).to.equalJSX(expected);
        });

        it("Toggled false", function () {
            renderer.render(<Button toggled={false} buttonText="Press <b>me</b>" />);
            const actual = renderer.getRenderOutput();
            const expected = (
                <button
                  accessKey={undefined}
                  aria-label="Press me"
                  aria-pressed={false}
                  className="itsa-button itsa-formelement itsa-button-togglebtn"
                  dangerouslySetInnerHTML={undefined}
                  disabled={false}
                  name={undefined}
                  onClick={undefined}
                  onKeyDown={function noRefCheck() {}}
                  onKeyUp={function noRefCheck() {}}
                  onMouseDown={function noRefCheck() {}}
                  onMouseOut={function noRefCheck() {}}
                  onMouseUp={function noRefCheck() {}}
                  role="button"
                  style={undefined}
                  tabIndex={undefined}
                  type="button"
                >
                  Press me
                </button>
            );
            expect(actual).to.equalJSX(expected);
        });

    });

    describe("Events Button", function () {

        it("onClick-event", function () {
            let clicked = false;
            const handleClick = () => {
                clicked = true;
            };
            const button = TestUtils.renderIntoDocument(<Button onClick={handleClick} />);
            const buttonNode = ReactDOM.findDOMNode(button);
            expect(clicked).to.be.false;
            TestUtils.Simulate.mouseDown(buttonNode);
            TestUtils.Simulate.mouseUp(buttonNode);
            expect(clicked).to.be.true;
        });

        it("onKeyDown-event different key", function () {
            let clicked = false;
            const handleClick = () => {
                clicked = true;
            };
            const button = TestUtils.renderIntoDocument(<Button onClick={handleClick} />);
            const buttonNode = ReactDOM.findDOMNode(button);
            expect(clicked).to.be.false;
            TestUtils.Simulate.keyDown(buttonNode, {keyCode : 65});
            expect(clicked).to.be.false;
        });

        it("onKeyDown-event enter-key", function (done) {
            let clicked = false;
            const handleClick = () => {
                clicked = true;
            };
            const button = TestUtils.renderIntoDocument(<Button onClick={handleClick} />);
            const buttonNode = ReactDOM.findDOMNode(button);
            expect(clicked).to.be.false;
            TestUtils.Simulate.keyDown(buttonNode, {keyCode : 13});
            TestUtils.Simulate.keyUp(buttonNode);
            setTimeout(function() {
              expect(clicked).to.be.true;
              done();
            }, 150);
        });

        it("onKeyDown-event enter-key without directResponse", function (done) {
            let clicked = false;
            const handleClick = () => {
                clicked = true;
            };
            const button = TestUtils.renderIntoDocument(<Button onClick={handleClick} directResponse={false} />);
            const buttonNode = ReactDOM.findDOMNode(button);
            expect(clicked, "Click value before keyDown event").to.be.false;
            TestUtils.Simulate.keyDown(buttonNode, {keyCode : 13});
            TestUtils.Simulate.keyUp(buttonNode);
            expect(clicked, "Click value immediate after keyDown event").to.be.false;
            setTimeout(() => {
                expect(clicked, "Click value 0.5sec after keyDown event").to.be.true;
                done();
            }, 500);
        });

        it("onKeyDown-event enter-key without directResponse and different buttonPressTime", function (done) {
            let clicked = false;
            const handleClick = () => {
                clicked = true;
            };
            const button = TestUtils.renderIntoDocument(<Button onClick={handleClick} directResponse={false} buttonPressTime={1000} />);
            const buttonNode = ReactDOM.findDOMNode(button);
            expect(clicked, "Click value before keyDown event").to.be.false;
            TestUtils.Simulate.keyDown(buttonNode, {keyCode : 13});
            TestUtils.Simulate.keyUp(buttonNode);
            expect(clicked, "Click value immediate after keyDown event").to.be.false;
            setTimeout(() => {
                expect(clicked, "Click value 0.5sec after keyDown event").to.be.false;
                setTimeout(() => {
                    expect(clicked, "Click value 1.5sec after keyDown event").to.be.true;
                    done();
                }, 1000);
            }, 500);
        });
*/
    });

});
