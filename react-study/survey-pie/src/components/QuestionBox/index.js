import Title from '../Title';
import Description from '../Description';
import Body from '../Body';
import ActionButtons from '../ActionButtons';

function QuestionBox( {questions, questionsLength, step, answer, setAnswer} ) {

    return (
        <div>
            <Title>{questions.title}</Title>
            <Description>{questions.description}</Description>
            <Body type={questions.type} answer={answer} setAnswer={setAnswer}></Body>
            <ActionButtons step={step} questionsLength={questionsLength}/>
        </div>
    )
}

export default QuestionBox;