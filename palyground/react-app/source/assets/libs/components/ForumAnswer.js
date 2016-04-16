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

export default ForumAnswer;