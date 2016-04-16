class ForumHeader extends React.Component {
    render() {
        return React.createElement(
            "header",
            { className: "mdl-layout__header form__header" },
            React.createElement(
                "h1",
                { className: "form__header_title" },
                "React App"
            ),
            React.createElement(
                "h2",
                { className: "form__header_sub-title" },
                "Experiment with react liberary"
            )
        );
    }
}

class ForumQuestion extends React.Component {
    render() {
        return React.createElement(
            "div",
            { className: "form__question" },
            React.createElement(
                "h3",
                { className: "form__question_title" },
                "What is React and Flux?"
            ),
            React.createElement(
                "p",
                null,
                "I don't understand React or Flux. Can someone help me?"
            )
        );
    }
}

class ForumAnswer extends React.Component {
    render() {
        var answer = this.props.answer;

        return React.createElement(
            "li",
            { className: "mdl-list__item" },
            React.createElement(
                "span",
                { className: "mdl-list__item__label" },
                answer.body
            )
        );
    }
}

ForumAnswer.propTypes = {
    answer: React.PropTypes.object.isRequired
};

class ForumAnswers extends React.Component {
    render() {
        var allAnswers = this.props.allAnswers;
        var answers = [];

        for (var key in allAnswers) {
            answers.push(React.createElement(ForumAnswer, {
                key: key,
                id: key,
                answer: allAnswers[key] }));
        }

        return React.createElement(
            "div",
            { className: "form__answers" },
            React.createElement(
                "ul",
                { className: "mdl-list" },
                answers
            )
        );
    }
};

class ForumAddAnswer extends React.Component {
    render() {
        return React.createElement(
            "div",
            { className: "add-answer" },
            React.createElement(
                "div",
                { className: "add-answer__textarea" },
                React.createElement(
                    "label",
                    { className: "add-answer__textarea_label" },
                    "Add an answer"
                ),
                React.createElement("textarea", { className: "add-answer__textarea_input", rows: "2" })
            ),
            React.createElement(
                "div",
                { className: "add-answer__button-section" },
                React.createElement(
                    "button",
                    { type: "submit", className: "mdl-button mdl-button--raised mdl-button--accent" },
                    "Add"
                )
            )
        );
    }
}

const allAnswers = {
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

class Forum extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            allAnswers: allAnswers
        };
    }

    render() {
        return React.createElement(
            'div',
            { className: 'mdl-layout mdl-layout--fixed-header form' },
            React.createElement(ForumHeader, null),
            React.createElement(
                'main',
                { className: 'mdl-layout__content' },
                React.createElement(ForumQuestion, null),
                React.createElement(ForumAnswers, { allAnswers: this.state.allAnswers }),
                React.createElement(ForumAddAnswer, null)
            )
        );
    }
}

(function () {
    document.addEventListener('DOMContentLoaded', domReady, false);

    function domReady() {
        var pageView = document.querySelector('#page-view');
        var forumEle = React.createElement(Forum, null);

        // render page view
        ReactDOM.render(forumEle, pageView);
    }
})();
//# sourceMappingURL=app-scripts.js.map