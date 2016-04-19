/* jshint esnext:true */

class ForumHeader extends React.Component {
    render() {
        return(
            /*jshint ignore:start */
            React.createElement(
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
            )
            /*jshint ignore:end */

        );
    }
}

export default ForumHeader;