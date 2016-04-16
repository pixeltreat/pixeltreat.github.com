class ForumAddAnswer extends React.Component{
    render() {
        return (
            <div className="add-answer">
                <div className="add-answer__textarea">
                    <label className="add-answer__textarea_label">Add an answer</label>
                    <textarea className="add-answer__textarea_input" rows="2"></textarea>
                </div>
            
                <div className="add-answer__button-section">
                    <button type="submit" className="mdl-button mdl-button--raised mdl-button--accent">Add</button>
                </div>
            </div>
        );
    }
}

export default ForumAddAnswer;