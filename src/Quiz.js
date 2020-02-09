import React, { Component } from 'react';
import QuizQuestion from "./QuizQuestion";
import QuizEnd from './QuizEnd'

let quizData = require('./quiz_data.json')

class Quiz extends Component {
    constructor(props) {
        super(props);

        this.state = { quiz_position: 1 }

    }
    render() {
        const isQuizEnd = quizData.quiz_questions.length === this.state.quiz_postion - 1 ? true : false;
        const QuestionText = quizData.quiz_questions
        return (
            <div>
                {isQuizEnd ? <QuizEnd /> : <QuizQuestion quiz_question={QuestionText[this.state.quiz_position - 1]} />}


            </div>
        )

    }
}

export default Quiz;