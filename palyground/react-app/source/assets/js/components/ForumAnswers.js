/* jshint esnext:true */
import ForumAnswer from './ForumAnswer.js';

class ForumAnswers extends React.Component{
    render() {
        var allAnswers = this.props.allAnswers;
        var answers = [];
        /*jshint ignore:start */
        for (var key in allAnswers) {
            answers.push(
                <ForumAnswer
                    key={key}
                    id={key}
                    answer={allAnswers[key]} />
            );
        }

        return (
            <div className="form__answers">
                <ul className="mdl-list">
                    { answers }
                </ul>
            </div>
        );
        /*jshint ignore:end */
    }
}

export default ForumAnswers;
