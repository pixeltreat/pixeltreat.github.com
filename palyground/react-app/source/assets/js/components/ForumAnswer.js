class ForumAnswer extends React.Component{
    render() {
        var answer = this.props.answer;
        
        return (
            <li className="mdl-list__item">
                <span className="mdl-list__item__label">
                    { answer.body }
                </span>
            </li>
        );
    }
}

ForumAnswer.propTypes = {
    answer: React.PropTypes.object.isRequired
};

export default ForumAnswer;