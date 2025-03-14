import MemoItem from "../MemoItem";
import './index.css';

function MemoList({ memos, setSelectedMemoIndex, selectedMemoIndex, deleteMemo}) {
    return (
        <div>
            {memos.map((memo, index) => (
                <MemoItem
                key={index}
                index={index}
                onClickItem={() => {
                    setSelectedMemoIndex(index);
                }}
                onClickDelete={(e) => {
                    deleteMemo(index);
                    e.preventDefault();
                    e.stopPropagation();
                }}
                isSelected={index === selectedMemoIndex}

                setSelectedMemoIndex={setSelectedMemoIndex}
                >{memo.title}</MemoItem>
            ))}
        </div>
    );
}

export default MemoList;