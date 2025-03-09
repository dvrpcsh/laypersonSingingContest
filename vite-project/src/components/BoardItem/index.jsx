import React from 'react';
import './index.css';
import { BoardListItem } from 'types/interface'; // 실제 인터페이스 경로 확인
import { useNavigate } from 'react-router-dom';
import defaultProfileImage from ''; // defaultProfileImage 경로 확인

interface Props {
  boardListItem: BoardListItem;
}

// 컴포넌트: 게시판 아이템
export default function BoardItem({ boardListItem }: Props) {
  // 구조 분해 할당
  const { boardNumber, title, content, boardTitleImage, favoriteCnt, commentCnt, viewCnt, writeDateTime, writeNickname, writeProfileImage } = boardListItem;

  // 네비게이트 함수
  const navigator = useNavigate();

  // 게시물 아이템 클릭 이벤트 처리 함수
  const onClickHandler = () => {
    navigator(`/board/${boardNumber}`); // 라우팅 경로 수정 필요
  };

  // 렌더링
  return (
    <div className="board-list-item" onClick={onClickHandler}>
      <div className="board-list-item-main-box">
        <div className="board-list-item-top">
          <div className="board-list-item-profile-box">
            <div
              className="board-list-item-profile-image"
              style={{
                backgroundImage: `url(${writeProfileImage ? writeProfileImage : defaultProfileImage})`,
              }}
            ></div>
          </div>
          <div className="board-list-item-write-box">
            <div className="board-list-item-nickname">{writeNickname}</div>
            <div className="board-list-item-write-date">{writeDateTime}</div>
          </div>
        </div>
        <div className="board-list-item-middle">
          <div className="board-list-item-title">{title}</div>
          <div className="board-list-item-content">{content}</div>
        </div>
        <div className="board-list-item-bottom">
          <div className="board-list-item-counts">
            {`댓글 ${commentCnt} 좋아요 ${favoriteCnt} 조회수 ${viewCnt}`}
          </div>
        </div>
      </div>
      {boardTitleImage !== null && (
        <div className="board-list-item-image-box">
          <div
            className="board-list-item-image"
            style={{ backgroundImage: `url(${boardTitleImage})` }}
          ></div>
        </div>
      )}
    </div>
  );
}
