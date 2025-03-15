import Title from '../Title';
import Description from '../Description';
import Body from '../Body';
import ActionButtons from '../ActionButtons';
import styled from 'styled-components';
import answersState from '../../globalVariable/answers/atom';
import questionsState from '../../globalVariable/questions/atom';
import { useParams } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';


function QuestionBox( {} ) {

    const params = useParams();
    const step = parseInt(params.step);
    const questions = useRecoilValue(questionsState);
    const question = questions[step];
    const answer = answers[step];
    const [answers, setAnswers] = useRecoilState(answersState);
    const setAnswer = (newAnswer) => {
        setAnswers((answers) => {
            const newAnswers = [...answers];
            newAnswers[step] = newAnswer;

            return newAnswers;
        });
    };

    return (
        <QuestionBoxWrapper>
            <Title>{questions.title}</Title>
            <Description>{questions.description}</Description>
            <Body type={questions.type} answer={answer} setAnswer={setAnswer} options={questions.options}></Body>
            <ActionButtons />
        </QuestionBoxWrapper>
    )
}

const QuestionBoxWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

export default QuestionBox;