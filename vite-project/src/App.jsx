import { useState } from 'react';
import BoardListItem from './components/BoardItem';



function App() {
    return (
        <>
        {latestBoardListMock.map(boardListItem => <BoardListItem boardListItem = {boardListItem} />)}
        </>
    );
}

export default App;
