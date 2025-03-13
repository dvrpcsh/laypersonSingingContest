import { Link } from 'react-router-dom';
import QuestionBox from '../../components/QuestionBox';
import ProgressIndicator from '../../components/ProgressIndicator';
import { useState, useCallback } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import styled from 'styled-components';


function SurveyPage() {
    const params = useParams();

    const questions = [

        {title: "질문1 입니다.", description: "설명입니다.", type:"text", options: {}, required: false},
        {title: "질문2 입니다.", description: "설명입니다.", type:"textarea", options: {placeholder: "placeholder 입니다."}, required: false},
        {title: "질문3 입니다.", description: "설명입니다.", type:"select", options: {items:['답변1','답변2','답변3','답변4','답변5']}, required: false}
    ];


    const step = parseInt(params.step);

    const [answers, setAnswers] = useState([]);

    return (
        <SurveyPageWrapper>
            <div>
                <ProgressIndicator />
                <QuestionBox
                    questions={questions[step]}
                    step={step}
                    questionsLength={questions.length}
                    answer={answers[step]}
                    setAnswer={(newAnswer) => {
                        setAnswers((answers) => {
                            const newAnswers = [...answers];
                            newAnswers[step] = newAnswer;

                            return newAnswers;
                        })
                    }}
                />
            </div>
        </SurveyPageWrapper>
    )
}

const SurveyPageWrapper = styled.div`
    width: 100%;
    min-height: 100%;
`;

export default SurveyPage;