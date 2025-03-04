import MemoList from './MemoList';
import SideBarHeader from './SideBarHeader';
import SideBarFooter from './SideBarFooter';

function SideBar({memos, setSelectedMemoIndex, selectedMemoIndex}) {
    return (
    <div className="SideBar">
        <SideBarHeader />
        <MemoList
         memos={memos}
         setSelectedMemoIndex={setSelectedMemoIndex}
         selectedMemoIndex={selectedMemoIndex}/>
        <SideBarFooter />
    </div>
    )
}

export default SideBar;