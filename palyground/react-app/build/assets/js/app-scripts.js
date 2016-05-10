"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* jshint esnext:true */

/**
 * Event Emitter with JS objects, it won't touch the DOM
 * 
 * @class EventEmitter
 */

var EventEmitter = function () {
    /**
     * Creates an instance of EventEmitter.
     * events property to share between methods
     */

    function EventEmitter() {
        _classCallCheck(this, EventEmitter);

        this._events = {};
    }

    /**
     * adds event listner
     * @param  {string}   eventType - Event type/name
     * @param  {Function} callback  - Function triggered when event emmitted
     */


    _createClass(EventEmitter, [{
        key: "on",
        value: function on(eventType, callback) {
            this._events[eventType] = this._events[eventType] || [];
            this._events[eventType].push(callback);
        }

        /**
         * removes event listner
         * @param  {string}   eventType - Event type/name
         * @param  {Function} callback  - Function triggered when event emmitted
         */

    }, {
        key: "off",
        value: function off(eventType, callback) {
            if (this._events[eventType]) {
                this._events[eventType].splice(this._events[eventType].indexOf(callback), 1);
            }
        }

        /**
         * triggers event
         * @param  {string}   eventType - Event type/name
         */

    }, {
        key: "trigger",
        value: function trigger(eventType) {
            if (this._events[eventType]) {
                this._events[eventType].forEach(function (callback) {
                    return callback();
                });
            }
        }
    }]);

    return EventEmitter;
}();

/* jshint esnext:true */

var ForumHeader = function (_React$Component) {
    _inherits(ForumHeader, _React$Component);

    function ForumHeader() {
        _classCallCheck(this, ForumHeader);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(ForumHeader).apply(this, arguments));
    }

    _createClass(ForumHeader, [{
        key: "render",
        value: function render() {
            return(
                /*jshint ignore:start */
                React.createElement("header", { className: "mdl-layout__header form__header" }, React.createElement("h1", { className: "form__header_title" }, "React App"), React.createElement("h2", { className: "form__header_sub-title" }, "Experiment with react liberary"))
                /*jshint ignore:end */

            );
        }
    }]);

    return ForumHeader;
}(React.Component);

/* jshint esnext:true */

var ForumQuestion = function (_React$Component2) {
    _inherits(ForumQuestion, _React$Component2);

    function ForumQuestion() {
        _classCallCheck(this, ForumQuestion);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(ForumQuestion).apply(this, arguments));
    }

    _createClass(ForumQuestion, [{
        key: "render",
        value: function render() {
            return(
                /*jshint ignore:start */
                React.createElement("div", { className: "form__question" }, React.createElement("h3", { className: "form__question_title" }, "What is React and Flux?"), React.createElement("p", null, "I don't understand React or Flux. Can someone help me?"))
                /*jshint ignore:end */

            );
        }
    }]);

    return ForumQuestion;
}(React.Component);

/* jshint esnext:true */

var ForumAnswer = function (_React$Component3) {
    _inherits(ForumAnswer, _React$Component3);

    function ForumAnswer() {
        _classCallCheck(this, ForumAnswer);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(ForumAnswer).apply(this, arguments));
    }

    _createClass(ForumAnswer, [{
        key: "render",
        value: function render() {
            var answer = this.props.answer;

            return(
                /*jshint ignore:start */
                React.createElement("li", { className: "mdl-list__item" }, React.createElement("span", { className: "mdl-list__item__label" }, answer.body))
                /*jshint ignore:end */

            );
        }
    }]);

    return ForumAnswer;
}(React.Component);

ForumAnswer.propTypes = {
    answer: React.PropTypes.object.isRequired
};

var ForumAnswers = function (_React$Component4) {
    _inherits(ForumAnswers, _React$Component4);

    function ForumAnswers() {
        _classCallCheck(this, ForumAnswers);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(ForumAnswers).apply(this, arguments));
    }

    _createClass(ForumAnswers, [{
        key: "render",
        value: function render() {
            var allAnswers = this.props.allAnswers;
            var answers = [];
            /*jshint ignore:start */
            for (var key in allAnswers) {
                answers.push(React.createElement(ForumAnswer, {
                    key: key,
                    id: key,
                    answer: allAnswers[key] }));
            }

            return React.createElement("div", { className: "form__answers" }, React.createElement("ul", { className: "mdl-list" }, answers));
            /*jshint ignore:end */
        }
    }]);

    return ForumAnswers;
}(React.Component);

/* jshint esnext:true */

var ForumAddAnswer = function (_React$Component5) {
    _inherits(ForumAddAnswer, _React$Component5);

    function ForumAddAnswer(props) {
        _classCallCheck(this, ForumAddAnswer);

        var _this5 = _possibleConstructorReturn(this, Object.getPrototypeOf(ForumAddAnswer).call(this, props));

        _this5.state = {
            value: ''
        };
        return _this5;
    }

    _createClass(ForumAddAnswer, [{
        key: "_addAnswer",
        value: function _addAnswer() {
            console.log('clicked');
            //this.props.onAddAnswer(this.state.value);
        }
    }, {
        key: "_onChange",
        value: function _onChange(event) {
            this.setState({
                value: event.target.value
            });
        }
    }, {
        key: "render",
        value: function render() {
            return(
                /*jshint ignore:start */
                React.createElement('div', { className: 'add-answer' }, React.createElement('div', { className: 'add-answer__textarea' }, React.createElement('label', { className: 'add-answer__textarea_label' }, 'Add an answer'), React.createElement('textarea', { className: 'add-answer__textarea_input', rows: '2', onChange: this._onChange })), React.createElement('div', { className: 'add-answer__button-section' }, React.createElement('button', {
                    type: 'submit',
                    className: 'mdl-button mdl-button--raised mdl-button--accent',
                    onClick: this._addAnswer }, 'Add')))
                /*jshint ignore:end */

            );
        }
    }]);

    return ForumAddAnswer;
}(React.Component);

var allAnswers = {
    "1": {
        body: "Isn't that about time travel?",
        correct: false
    },
    "2": {
        body: "React and Flux are a tool and methodologies for building the front end of web applications.",
        correct: false
    },
    "3": {
        body: "React is a synonym for 'respond'",
        correct: false
    }
};

var Forum = function (_React$Component6) {
    _inherits(Forum, _React$Component6);

    function Forum(props) {
        _classCallCheck(this, Forum);

        var _this6 = _possibleConstructorReturn(this, Object.getPrototypeOf(Forum).call(this, props));

        _this6.state = {
            allAnswers: allAnswers
        };
        return _this6;
    }

    _createClass(Forum, [{
        key: "render",
        value: function render() {
            return(
                /*jshint ignore:start */
                React.createElement('div', { className: 'mdl-layout mdl-layout--fixed-header form' }, React.createElement(ForumHeader, null), React.createElement('main', { className: 'mdl-layout__content' }, React.createElement(ForumQuestion, null), React.createElement(ForumAnswers, { allAnswers: this.state.allAnswers }), React.createElement(ForumAddAnswer, { onAddAnswer: this._onAddAnswer })))
                /*jshint ignore:end */

            );
        }
    }]);

    return Forum;
}(React.Component);

(function () {
    document.addEventListener('DOMContentLoaded', domReady, false);

    function domReady() {
        var pageView = document.querySelector('#page-view');
        var forumEle = React.createElement(Forum, null);
        var emit = new EventEmitter();

        // render page view
        ReactDOM.render(forumEle, pageView);

        // emit.on('APP_START', function(){
        //     console.log('app started1');
        // });
        //
        // emit.on('APP_START', function(){
        //     console.log('app started2');
        // });
        //
        // emit.trigger('APP_START');
    }
})();
//# sourceMappingURL=app-scripts.js.map