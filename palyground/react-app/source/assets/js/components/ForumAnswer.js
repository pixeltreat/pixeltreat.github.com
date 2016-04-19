/* jshint esnext:true */

class ForumAnswer extends React.Component{
    render() {
        var answer = this.props.answer;

        return (
            /*jshint ignore:start */
            <li className="mdl-list__item">
                <span className="mdl-list__item__label">
                    { answer.body }
                </span>
            </li>
            /*jshint ignore:end */
        );
    }
}

ForumAnswer.propTypes = {
    answer: React.PropTypes.object.isRequired
};

export default ForumAnswer;
