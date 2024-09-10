package com.anonymous.demoApp;

import androidx.annotation.NonNull;
import androidx.room.Entity;
import androidx.room.PrimaryKey;

import java.util.Objects;

@Entity(tableName = "favoriteArticles")
public class FavoriteArticle {
    @PrimaryKey(autoGenerate = true)
    private int favoriteID;

    @NonNull
    private int userID;

    @NonNull
    private String title;

    @NonNull
    private String date;

    @NonNull
    private String imgURL;

    @NonNull
    private String author;

    @NonNull
    private String content;

    public User(@NonNull int favoriteID, @NonNull String title, @NonNull String date, @NonNull String imgURL, @NonNull String author, @NonNull String content) {
        this.favoriteID = favoriteID;
        this.title = title;
        this.date = date;
        this.imgURL = imgURL;
        this.author = author;
        this. content = content;
    }

    public int getFavoriteID() {
        return favoriteID;
    }

    public void setFavoriteID(int favoriteID) {
        this.favoriteID = favoriteID;
    }

    public int getUserID() {
        return userID;
    }

    public void setUserID(int userID) {
        this.userID = userID;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getImgURL() {
        return imgURL;
    }

    public void setImgURL(String imgURL) {
        this.imgURL = imgURL;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public boolean equals(Object object) {
        if (this == object) return true;
        if (object == null || getClass() != object.getClass()) return false;
        if (!super.equals(object)) return false;
        FavoriteArticle that = (FavoriteArticle) object;
        return favoriteID == that.favoriteID && userID == that.userID && title.equals(that.title) && date.equals(that.date) && imgURL.equals(that.imgURL) && author.equals(that.author) && content.equals(that.content);
    }

    public int hashCode() {
        return Objects.hash(super.hashCode(), favoriteID, userID, title, date, imgURL, author, content);
    }

    @java.lang.Override
    public java.lang.String toString() {
        return "FavoriteArticle{" +
                "favoriteID=" + favoriteID +
                ", userID=" + userID +
                ", title='" + title + '\'' +
                ", date='" + date + '\'' +
                ", imgURL='" + imgURL + '\'' +
                ", author='" + author + '\'' +
                ", content='" + content + '\'' +
                '}';
    }
}
