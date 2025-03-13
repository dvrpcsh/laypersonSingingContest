import Title from '../Title';
import Description from '../Description';
import Body from '../Body';
import ActionButtons from '../ActionButtons';
import styled from 'styled-components';

function QuestionBox( {questions, questionsLength, step, answer, setAnswer} ) {

    return (
        <QuestionBoxWrapper>
            <Title>{questions.title}</Title>
            <Description>{questions.description}</Description>
            <Body type={questions.type} answer={answer} setAnswer={setAnswer} options={questions.options}></Body>
            <ActionButtons step={step} questionsLength={questionsLength}/>
        </QuestionBoxWrapper>
    )
}

const QuestionBoxWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

export default QuestionBox;