/* jshint esnext:true */
import ForumAnswer from './ForumAnswer.js';

class ForumAnswers extends React.Component {
    render() {
        var allAnswers = this.props.allAnswers;
        var answers = [];
        /*jshint ignore:start */
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
        /*jshint ignore:end */
    }
}

export default ForumAnswers;