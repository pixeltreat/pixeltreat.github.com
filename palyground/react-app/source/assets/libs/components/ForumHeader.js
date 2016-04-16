class ForumHeader extends React.Component {
    render() {
        return React.createElement(
            "header",
            { className: "mdl-layout__header form__header" },
            React.createElement(
                "h1",
                { className: "form__header_title" },
                "React App"
            ),
            React.createElement(
                "h2",
                { className: "form__header_sub-title" },
                "Experiment with react liberary"
            )
        );
    }
}

export default ForumHeader;