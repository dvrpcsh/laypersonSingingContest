import { useState } from 'react';
import MemoContainer from './component/MemoContainer'
import SideBar from './component/SideBar'

function App() {
    const [memos, setMemos] = useState([
        {   title: 'Memo 1',
            content: 'This is memo 1',
            createAt: 1741002500086, //시간 값
            updateAt: 1741002500086, //시간 값
        },
        {   title: 'Memo 2',
            content: 'This is memo 2',
            createAt: 1741002553732, //시간 값
            updateAt: 1741002553732, //시간 값
        }
    ])

    const [selectedMemoIndex, setSelectedMemoIndex] = useState(0);

    const setMemo = (newMemo) => {
        const newMemos = [...memos];

        newMemos[selectedMemoIndex] = newMemo;

        setMemos(newMemos);
    }

    return (
        <div className="App">
            <SideBar
             memos={memos}
             selectedMemoIndex={selectedMemoIndex}
             setSelectedMemoIndex={setSelectedMemoIndex} />
            <MemoContainer
             memo={memos[selectedMemoIndex]}
             setMemo={setMemo}/>
        </div>
    )
}

export default App;

