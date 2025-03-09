import QuestionBox from './components/QuestionBox';
import ProgressIndicator from './components/ProgressIndicator';
import { useState, useCallback } from 'react';

function App() {
  const questions = [
    {title: "질문1 입니다.", description: "설명입니다.", type:"text", options: {}, required: false},
    {title: "질문2 입니다.", description: "설명입니다.", type:"text", options: {}, required: false},
    {title: "질문3 입니다.", description: "설명입니다.", type:"text", options: {}, required: false}
  ];


  const step = 2;

  const [answers, setAnswers] = useState([]);

  return (
    <div className="App">
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
  );
}

export default App;
