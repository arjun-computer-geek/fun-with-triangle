import React, { useState } from 'react'
import './Quiz.css'

const questions = [
    {
        question: "What is the third angle for the triangle where angle1 = 45° and angle2 = 45°?",
        options: ["45°", "90°", "60°"],
        answer: 1
    },
    {
        question: "What is the third angle for the triangle where angle1 = 45° and angle2 = 45°? ",
        options: ["obtuse", "acute", "right angled"],
        answer: 2
    },
    {
        question: "A triangle can have?",
        options: [" one right angle", "two right angles", "three right angles"],
        answer: 1
    },
    {
        question: "Which of the following can form a right angled triangle?",
        options: ["14, 15, 26", " 12, 16, 20"],
        answer: 1
    },
    {
        question: "Which of the following triangles are always similar?",
        options: ["Equilateral triangl", " Isosceles triangle"],
        answer: 0
    }
]

const Quiz = () => {
    const[currentQuestion, setCurrentQuestion] = useState(0);
    const[showScore, setShowScore] = useState(false);
    const[score, setScore] = useState(0);

    const handleAnswerButtonClick = (index) => {

        //checking correct answer
        if(index === questions[currentQuestion].answer){
            setScore(score + 1)
        }
        const nextQuestion = currentQuestion + 1;

        if(nextQuestion < questions.length){
            setCurrentQuestion(nextQuestion)
        }else{
            setShowScore(true)
        }
            
    }
    return (
        <div className="container quiz">
            
            <div id="quiz-container">
                {showScore ? (
                <div className="score-section">You Scored : {score} / {questions.length}</div>
                ) : (
                    <>
                        <div id="question">
                            <span>Question {currentQuestion + 1}</span>/{questions.length}
                            <p className="question-text">
                                {questions[currentQuestion].question}
                            </p>
                        </div>
                        <div id="option">
                            {questions[currentQuestion].options.map((option, index) => <button onClick={() => handleAnswerButtonClick(index)}>{option}</button>)}
                        </div>
                    </>
                )}
                
            </div>
        </div>
    )
}

export default Quiz
