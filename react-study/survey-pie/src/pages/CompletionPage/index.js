import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

function CompletionPage() {
    axios.get('https://github.com/hackurity01/survey-pie-server').then((res) => {
        console.log('res',res.data);
    })

    return (
        <>
            <CompletionPageWrapper><div>CompletionPage</div></CompletionPageWrapper>
        </>

    )
}

const CompletionPageWrapper = styled.div`
    background: aqua;
    padding: 4em;
`;

export default CompletionPage;