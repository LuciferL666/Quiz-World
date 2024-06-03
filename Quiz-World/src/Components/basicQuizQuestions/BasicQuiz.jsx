import React, { useState } from "react";
import './BasicQuiz.css';
import { basic } from "../../../public/Questions/basicQ";

const BasicQuiz = () => {

    let [index, setIndex] = useState(0);
    let [question, setQuestion] = useState(basic[index]);

    const checkAns = (e, ans) => {
        if(question.ans === ans) {
            e.target.classList.add('correct')
    const checkAns = (e,ans) => {
            if (question.ans===ans) {
                e.target.classList.add('correct');
            } else {
                e.target.classList.add('wrong');
        }
    }
    return (
        <div className="container">
            <h1>Quiz World</h1>
            <hr />
            <h2>{index + 1}. {question.question}</h2>
            <ul>
                <li onClick={(e)=>{checkAns(e,1)}}>{question.option1}</li>
                <li onClick={(e)=>{checkAns(e,2)}}>{question.option2}</li> 
                <li onClick={(e)=>{checkAns(e,3)}}>{question.option3}</li>
                <li onClick={(e)=>{checkAns(e,4)}}>{question.option4}</li>
            </ul>
            <button>Next</button>
            <div className="index">1 of 10 questions</div>
        </div>
    )
}

export default BasicQuiz