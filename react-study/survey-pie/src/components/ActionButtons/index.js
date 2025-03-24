import { useNavigate } from 'react-router-dom';
import Button from '../Button';
import styled from 'styled-components';
import questionsLengthState from '../../globalVariable/survey/questionsLengthState';
import { useRecoilValue } from 'recoil';
import useStep from '../../hooks/useStep';
import useSurveyId from '../../hooks/useSurveyId';
import postAnswers from '../../services/postAnswers';
import useAnswers from '../../hooks/useAnswers';

function ActionButtons () {
    const step = useStep();
    const surveyId = useSurveyId();
    const questionsLength = useRecoilValue(questionsLengthState);
    const answers = useAnswers();

    const isLast= questionsLength-1 === step;
    const navigate = useNavigate();


    return (
    <ActionButtonsWrapper>
        {step === 0 || <Button type="TERTIARY" onClick={() => {navigate(`${step-1}`)}}>이전</Button>}
        {isLast ? <Button type="PRIMARY"
                          onClick={() => {
                            postAnswers(surveyId, answers);
                            navigate('/done');
                          }}
                  >제출</Button> :
                  <Button type="PRIMARY" onClick={() => {navigate(`${step+1}`)}}>다음</Button>}

    </ActionButtonsWrapper>
    )
}

const ActionButtonsWrapper = styled.div`
    margin-top: 72px;
    justify-content: center;
    display: flex;
    gap: 16px;
`

export default ActionButtons;