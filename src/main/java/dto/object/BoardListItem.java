package dto.object;

public class BoardListItem {
    private int boardNumber;
    private String title;
    private String content;
    private String boardTitleImage;
    private int favoriteCount;
    private int viewCount;
    private String writeDateTime;
    private String writerNickName;

    public String getWriterProfileImage() {
        return writerProfileImage;
    }

    public void setWriterProfileImage(String writerProfileImage) {
        this.writerProfileImage = writerProfileImage;
    }

    public String getWriterNickName() {
        return writerNickName;
    }

    public void setWriterNickName(String writerNickName) {
        this.writerNickName = writerNickName;
    }

    public String getWriteDateTime() {
        return writeDateTime;
    }

    public void setWriteDateTime(String writeDateTime) {
        this.writeDateTime = writeDateTime;
    }

    public BoardListItem(int boardNumber, String title, String content, String boardTitleImage, int favoriteCount, int viewCount, String writeDateTime, String writerNickName, String writerProfileImage) {
        this.boardNumber = boardNumber;
        this.title = title;
        this.content = content;
        this.boardTitleImage = boardTitleImage;
        this.favoriteCount = favoriteCount;
        this.viewCount = viewCount;
        this.writeDateTime = writeDateTime;
        this.writerNickName = writerNickName;
        this.writerProfileImage = writerProfileImage;
    }

    public int getViewCount() {
        return viewCount;
    }

    public void setViewCount(int viewCount) {
        this.viewCount = viewCount;
    }

    public int getFavoriteCount() {
        return favoriteCount;
    }

    public void setFavoriteCount(int favoriteCount) {
        this.favoriteCount = favoriteCount;
    }

    public String getBoardTitleImage() {
        return boardTitleImage;
    }

    public void setBoardTitleImage(String boardTitleImage) {
        this.boardTitleImage = boardTitleImage;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getBoardNumber() {
        return boardNumber;
    }

    public void setBoardNumber(int boardNumber) {
        this.boardNumber = boardNumber;
    }

    private String writerProfileImage;

}