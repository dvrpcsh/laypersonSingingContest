import { Link } from 'react-router-dom';
import QuestionBox from '../../components/QuestionBox';
import ProgressIndicator from '../../components/ProgressIndicator';
import { useState, useCallback } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';


function SurveyPage() {
    const params = useParams();

    const questions = [

        {title: "질문1 입니다.", description: "설명입니다.", type:"text", options: {}, required: false},
        {title: "질문2 입니다.", description: "설명입니다.", type:"text", options: {}, required: false},
        {title: "질문3 입니다.", description: "설명입니다.", type:"text", options: {}, required: false}
    ];


    const step = parseInt(params.step);

    const [answers, setAnswers] = useState([]);

    return (
        <>
            <div>
                <ProgressIndicator />
                <QuestionBox
                    questions={questions[step]}
                    step={step}
                    questionsLength={questions.length}
                    answers={answers[step]}
                    setAnswer={(newAnswer) => {
                        setAnswers((answers) => {
                            const newAnswers = [...answers];
                            newAnswers[step] = newAnswer;

                            return newAnswers;
                        })
                    }}
                />
            </div>
        </>
    )
}

export default SurveyPage;