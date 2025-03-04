import MemoItem from "./MemoItem";

function MemoList({ memos, setSelectedMemoIndex, selectedMemoIndex}) {
    return (
        <div>
            {memos.map((memo, index) => (
                <MemoItem key={index}
                index={index}
                onClick={() => {
                    setSelectedMemoIndex(index);
                }}
                isSelected={index === selectedMemoIndex}

                setSelectedMemoIndex={setSelectedMemoIndex}
                >{memo.title}</MemoItem>
            ))}
        </div>
    );
}

export default MemoList;