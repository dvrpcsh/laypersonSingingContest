import { useRecoilValue } from 'recoil';

import surveyState from '../globalVariable/survey/surveyState';
import useStep from './useStep';


function useCurrentQuestion() {
    const step = useStep();
    const surveyData = useRecoilValue(surveyState);
    const questions = surveyData?.questions || [];

    return questions[step];
}

export default useCurrentQuestion;