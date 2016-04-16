import ForumHeader from './ForumHeader.js';
import ForumQuestion from './ForumQuestion.js';
import ForumAnswers from './ForumAnswers.js';
import ForumAddAnswer from './ForumAddAnswer.js';

const allAnswers = {
    "1": {
        body: "Isn't that about time travel?",
        correct: false
    },
    "2": {
        body: "React and Flux are a tool and methodologies for building the front end of web applications.",
        correct: false
    },
    "3": {
        body: "React is a synonym for 'respond'",
        correct: false
    }
}

class Forum extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
           allAnswers: allAnswers
        };
    }
        
    render() {
        return (
            <div className="mdl-layout mdl-layout--fixed-header form">
                <ForumHeader />

                <main className="mdl-layout__content">
                    <ForumQuestion />
                    <ForumAnswers allAnswers={ this.state.allAnswers } />
                    <ForumAddAnswer />
                </main>
            </div>
        );
    }
}

export default Forum;