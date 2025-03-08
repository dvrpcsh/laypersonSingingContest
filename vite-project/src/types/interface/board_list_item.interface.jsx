export default interface BoardListItem {
    boardNumber: number;
    title: string;
    content: string;
    boardTitleImage: number || null;
    favoriteCount: number;
    commentCount: number;
    viewCount: number;
    writerDateTime: string;
    writeNickname: string;
    writerProfileImage: string || null;

}