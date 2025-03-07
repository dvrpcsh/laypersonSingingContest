import { useState, useCallback } from 'react';
import MemoContainer from './component/MemoContainer'
import SideBar from './component/SideBar'
import {setItem, getItem} from './lib/storage'
import debounce from 'lodash.debounce';

//5초동안 입력이 안되면 setItem 실행
const debounceSetItem = debounce(setItem, 5000);

function App() {
    const [memos, setMemos] = useState(
        getItem('memo') || []
    )

    const [selectedMemoIndex, setSelectedMemoIndex] = useState(0);

    const setMemo = useCallback((newMemo) => {

        setMemos((memos) => {
            const newMemos = [...memos];

            newMemos[selectedMemoIndex] = newMemo;
            debounceSetItem('memo', newMemos);

            return newMemos;
        })
    }, [selectedMemoIndex]);

    const addMemo = useCallback(() => {

        setMemos((memos) => {
            const now = new Date().getTime();
            const newMemos = [
                ...memos,
                 {
                  title: 'Untitled',
                  content: '',
                  createAt: now,
                  updateAt: now
            }];

            debounceSetItem('memo', newMemos);

            return newMemos;
        });
        setSelectedMemoIndex(memos.length);
    },[memos]);

    const deleteMemo = useCallback((index) => {

        setMemos(() => {
            const newMemos = [...memos];

            newMemos.splice(index, 1);
            debounceSetItem('memo', newMemos);

            return newMemos;
        });

        if(index > selectedMemoIndex) {
            setSelectedMemoIndex(selectedMemoIndex+1);
        } else if(index < selectedMemoIndex) {
            setSelectedMemoIndex(selectedMemoIndex-1);
        } else {
            setSelectedMemoIndex(0);
        }

    }, [selectedMemoIndex]);

    return (
        <div className="App">
            <SideBar
             memos={memos}
             addMemo={addMemo}
             selectedMemoIndex={selectedMemoIndex}
             setSelectedMemoIndex={setSelectedMemoIndex}
             deleteMemo={deleteMemo}/>
            <MemoContainer
             memo={memos[selectedMemoIndex]}
             setMemo={setMemo}/>
        </div>
    )
}

export default App;

