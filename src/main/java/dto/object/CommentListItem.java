package dto.object;

public class CommentListItem {
    private String nickname;
    private String profileImage;
    private String writeDateTime;
    private String content;

    public String getNickname() {
        return nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    public String getProfileImage() {
        return profileImage;
    }

    public void setProfileImage(String profileImage) {
        this.profileImage = profileImage;
    }

    public String getWriteDateTime() {
        return writeDateTime;
    }

    public void setWriteDateTime(String writeDateTime) {
        this.writeDateTime = writeDateTime;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public CommentListItem(String nickname, String profileImage, String writeDateTime, String content) {
        this.nickname = nickname;
        this.profileImage = profileImage;
        this.writeDateTime = writeDateTime;
        this.content = content;
    }
}
