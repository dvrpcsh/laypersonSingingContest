import { Link } from 'react-router-dom';
import QuestionBox from '../../components/QuestionBox';
import ProgressIndicator from '../../components/ProgressIndicator';
import { useState, useCallback } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import questionsState from '../../globalVariable/questions/atom';


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