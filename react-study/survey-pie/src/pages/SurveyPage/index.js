import styled from 'styled-components';
import QuestionBox from '../../components/QuestionBox';
import ProgressIndicator from '../../components/ProgressIndicator';


function SurveyPage() {

    return (
        <SurveyPageWrapper>
            <ProgressIndicator />
            <QuestionBox />
        </SurveyPageWrapper>
    )
}

const SurveyPageWrapper = styled.div`
    width: 100%;
    min-height: 100%;
`;

export default SurveyPage;