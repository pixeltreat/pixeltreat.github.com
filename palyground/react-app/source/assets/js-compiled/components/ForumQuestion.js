/* jshint esnext:true */

class ForumQuestion extends React.Component {
    render() {
        return(
            /*jshint ignore:start */
            React.createElement(
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
            )
            /*jshint ignore:end */

        );
    }
}

export default ForumQuestion;