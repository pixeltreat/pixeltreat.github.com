class ForumAddAnswer extends React.Component {
    render() {
        return React.createElement(
            "div",
            { className: "add-answer" },
            React.createElement(
                "div",
                { className: "add-answer__textarea" },
                React.createElement(
                    "label",
                    { className: "add-answer__textarea_label" },
                    "Add an answer"
                ),
                React.createElement("textarea", { className: "add-answer__textarea_input", rows: "2" })
            ),
            React.createElement(
                "div",
                { className: "add-answer__button-section" },
                React.createElement(
                    "button",
                    { type: "submit", className: "mdl-button mdl-button--raised mdl-button--accent" },
                    "Add"
                )
            )
        );
    }
}

export default ForumAddAnswer;