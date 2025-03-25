import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import Button from '../Button';
import styled from 'styled-components';
import questionsLengthState from '../../globalVariable/survey/questionsLengthState';
import useStep from '../../hooks/useStep';
import useSurveyId from '../../hooks/useSurveyId';
import postAnswers from '../../services/postAnswers';
import useAnswers from '../../hooks/useAnswers';

import useRequiredOption from '../../hooks/useRequiredOption';

function ActionButtons () {
    const step = useStep();
    const surveyId = useSurveyId();

    const questionsLength = useRecoilValue(questionsLengthState);
    const [answers, setAnswers] = useAnswers();
    const [isPosting, setIsPosting] = useState(false);
    const isRequired = useRequiredOption();

    const navigate = useNavigate();
    const isLast= questionsLength-1 === step;
    const isBlockToNext = isRequired ? !answers[step]?.length : false;




    return (
    <ActionButtonsWrapper>
        {step === 0 || (
            <Button
              type="SECONDARY"
              onClick={() => {
                navigate(`${step-1}`);
                }}>이전</Button>
        )}
        {isLast ? (<Button
                     type="PRIMARY"
                     onClick={() => {
                        setIsPosting(true);
                        postAnswers(surveyId, answers)
                            .then(() => {
                                setAnswers([]);
                                navigate(`/done/${surveyId}`);
                            })
                            .catch((err) => {
                                alert('에러가 발생했습니다. 다시 시도해주세요.');
                                setIsPosting(false);
                            });
                     }}
                     disabled = {isPosting || isBlockToNext}
                  >
                    {isPosting ? '제출 중 입니다...' : 제출 }
                  </Button>) : (
                  <Button
                    type="PRIMARY"
                    onClick={() => {
                        navigate(`${step+1}`);
                    }}
                    disabled = {isBlockToNext}
                    >
                        다음
                    </Button>
                    )}
    </ActionButtonsWrapper>
    );
}

const ActionButtonsWrapper = styled.div`
    margin-top: 72px;
    justify-content: center;
    display: flex;
    gap: 16px;
`;

export default ActionButtons;