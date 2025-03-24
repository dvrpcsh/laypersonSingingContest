import styled from 'styled-components';

import Title from '../Title';
import Description from '../Description';
import Body from '../Body';
import ActionButtons from '../ActionButtons';
import useCurrentQuestion from '../../hooks/useCurrentQuestion';
import useCurrentAnswer from '../../hooks/useCurrentAnswer';


function QuestionBox() {
    const [answer,setAnswer] = useCurrentAnswer();
    const question = useCurrentQuestion();

    return (
        <QuestionBoxWrapper>
            <Title>{question.title}</Title>
            <Description>{question.description}</Description>
            <Body type={question.type} answer={answer} setAnswer={setAnswer} options={question.options}></Body>
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