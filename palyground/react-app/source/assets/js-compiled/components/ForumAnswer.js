/* jshint esnext:true */

class ForumAnswer extends React.Component {
    render() {
        var answer = this.props.answer;

        return(
            /*jshint ignore:start */
            React.createElement(
                "li",
                { className: "mdl-list__item" },
                React.createElement(
                    "span",
                    { className: "mdl-list__item__label" },
                    answer.body
                )
            )
            /*jshint ignore:end */

        );
    }
}

ForumAnswer.propTypes = {
    answer: React.PropTypes.object.isRequired
};

export default ForumAnswer;