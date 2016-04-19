/* jshint esnext:true */

class ForumAddAnswer extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
           value: ''
        };
    }

    _addAnswer() {
        console.log('clicked');
        //this.props.onAddAnswer(this.state.value);
    }

    _onChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    render() {
        return (
            /*jshint ignore:start */
            <div className="add-answer">
                <div className="add-answer__textarea">
                    <label className="add-answer__textarea_label">Add an answer</label>
                    <textarea className="add-answer__textarea_input" rows="2" onChange={ this._onChange }></textarea>
                </div>

                <div className="add-answer__button-section">
                    <button
                        type="submit"
                        className="mdl-button mdl-button--raised mdl-button--accent"
                        onClick={ this._addAnswer } >Add</button>
                </div>
            </div>
            /*jshint ignore:end */
        );
    }
}

export default ForumAddAnswer;
