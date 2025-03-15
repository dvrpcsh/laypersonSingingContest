import { useNavigate } from 'react-router-dom';
import Button from '../Button';
import styled from 'styled-components';
import questionsState from '../../globalVariable/questions/atom';
import { useRecoilValue } from 'recoil';
import { useParams } from 'react-router-dom';

function ActtionButtons () {
    const isLast= questionsLength-1 === step;
    const navigate = useNavigate();
    const questionsLength = questions.length;
    const questions = useRecoilValue(questionState);
    const step = parseInt(params.step);

    return (
    <ActionButtonsWrapper>
        {step === 0 || <Button type="TERTIARY" onClick={() => {navigate(`${step-1}`)}}>이전</Button>}
        {isLast ? <Button type="PRIMARY" onClick={() => {navigate('/done')}}>제출</Button> :
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

export default ActtionButtons;