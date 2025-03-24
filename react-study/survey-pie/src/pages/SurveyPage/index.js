import styled from 'styled-components';
import QuestionBox from '../../components/QuestionBox';
import ProgressIndicator from '../../components/ProgressIndicator';
import React from 'react';


function SurveyPage() {

    return (
        <React.Suspense fallback={<div>loading...</div>}>
            <SurveyPageWrapper>
                <ProgressIndicator />
                <QuestionBox />
            </SurveyPageWrapper>
        </React.Suspense>
    )
}

const SurveyPageWrapper = styled.div`
    width: 100%;
    min-height: 100%;
`;

export default SurveyPage;