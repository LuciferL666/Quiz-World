import React, { useState, useRef } from "react";
import '../basicQuizQuestions/BasicQuiz.css';
import { animalQuiz } from "../../../public/Questions/animalsQ";

const AnimalQuiz = () => {
    let [index, setIndex] = useState(0);
    let [question, setQuestion] = useState(animalQuiz[index]);
    let [lock, setLock] = useState(false);
    let [score, setScore] = useState(0);
    let [result, setResult] = useState(false);

    let Option1 = useRef(null);
    let Option2 = useRef(null);
    let Option3 = useRef(null);
    let Option4 = useRef(null);

    let option_array = [Option1, Option2, Option3, Option4];

    const checkAns = (e, ans) => {
        if (!lock) {
            if (question.ans === ans) {
                e.target.classList.add('correct');
                setScore(prev => prev + 1);
            } else {
                e.target.classList.add('wrong');
                option_array[question.ans - 1].current.classList.add('correct');
            }
            setLock(true);
        }
    }

    const next = () => {
        if (lock) {
            if (index === animalQuiz.length - 1) {
                setResult(true);
            } else {
                setIndex(index + 1);
                setQuestion(animalQuiz[index + 1]);
                setLock(false);
                option_array.forEach(option => {
                    option.current.classList.remove('wrong');
                    option.current.classList.remove('correct');
                });
            }
        }
    }

    const reset = () => {
        setIndex(0);
        setQuestion(animalQuiz[0]);
        setScore(0);
        setLock(false);
        setResult(false);
    }

    return (
        <div className="container">
            <h1>Animal Sound Quiz</h1>
            <hr />
            {result ? <></> : (
                <>
                    <h2>{index + 1}. {question.question}</h2>
                    <audio controls>
                        <source src={question.sound} type="audio/mpeg" />
                        Your browser does not support the audio element.
                    </audio>
                    <ul>
                        {question.options.map((option, idx) => (
                            <li key={idx} ref={option_array[idx]} onClick={(e) => { checkAns(e, idx + 1) }}>
                                {String.fromCharCode(65 + idx)}) {option}
                            </li>
                        ))}
                    </ul>
                    <button onClick={next}>Next</button>
                    <div className="index">{index + 1} of {animalQuiz.length} questions</div>
                </>
            )}
            {result && (
                <>
                    <h2>Your Scored {score} out of {animalQuiz.length}</h2>
                    <button onClick={reset}>Reset</button>
                </>
            )}
        </div>
    );
}

export default AnimalQuiz;
