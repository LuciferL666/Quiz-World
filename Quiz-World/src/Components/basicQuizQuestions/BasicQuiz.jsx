import React, { useState } from "react";
import './BasicQuiz.css';
import { basic } from "../../../public/Questions/basicQ";

const BasicQuiz = () => {

    let [index, setIndex] = useState(0);
    let [question, setQuestion] = useState(basic[index]);

    const checkAns = (e, ans) => {
        if(question.ans === ans) {
            e.target.classList.add('correct')
        }
    }
    return (
        <div className="container">
            <h1>Quiz World</h1>
            <hr />
            <h2>{index + 1}. {question.question}</h2>
            <ul>
                <li>{question.option1}</li>
                <li>{question.option2}</li>
                <li>{question.option3}</li>
                <li>{question.option4}</li>
            </ul>
            <button>Next</button>
            <div className="index">1 of 10 questions</div>
        </div>
    )
}

export default BasicQuiz