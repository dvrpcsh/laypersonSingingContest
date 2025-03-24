import { useRecoilValue } from 'recoil';
import answerState from '../globalVariable/answers/atom';

function useAnswers() {
    return useRecoilValue(answerState);
}

export default useAnswers;