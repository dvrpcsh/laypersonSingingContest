import SurveyPage from './pages/SurveyPage';
import CompletionPage from './pages/CompletionPage';
import { Route, Routes } from 'react-router-dom';

function App() {


  return (
    <div className="App">
        <Routes>CompletionPage
            <Route path= "/done" element={<CompletionPage />} />
            <Route path= "/survey/:surveyId" element={<SurveyPage />}>
                <Route path=":step" element={<SurveyPage />} />
            </Route>
        </Routes>
    </div>
  );
}

export default App;
