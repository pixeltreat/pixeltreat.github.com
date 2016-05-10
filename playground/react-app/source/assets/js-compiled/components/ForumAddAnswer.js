/* jshint esnext:true */

class ForumAddAnswer extends React.Component {
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
        return(
            /*jshint ignore:start */
            React.createElement(
                'div',
                { className: 'add-answer' },
                React.createElement(
                    'div',
                    { className: 'add-answer__textarea' },
                    React.createElement(
                        'label',
                        { className: 'add-answer__textarea_label' },
                        'Add an answer'
                    ),
                    React.createElement('textarea', { className: 'add-answer__textarea_input', rows: '2', onChange: this._onChange })
                ),
                React.createElement(
                    'div',
                    { className: 'add-answer__button-section' },
                    React.createElement(
                        'button',
                        {
                            type: 'submit',
                            className: 'mdl-button mdl-button--raised mdl-button--accent',
                            onClick: this._addAnswer },
                        'Add'
                    )
                )
            )
            /*jshint ignore:end */

        );
    }
}

export default ForumAddAnswer;