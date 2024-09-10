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

    public User(@NonNull int favoriteID, @NonNull String title, @NonNull String date) {
        this.favoriteID = favoriteID;
        this.title = title;
        this.date = date;
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

    public boolean equals(Object object) {
        if (this == object) return true;
        if (object == null || getClass() != object.getClass()) return false;
        if (!super.equals(object)) return false;
        FavoriteArticle that = (FavoriteArticle) object;
        return favoriteID == that.favoriteID && userID == that.userID && java.util.Objects.equals(title, that.title) && java.util.Objects.equals(date, that.date);
    }

    public int hashCode() {
        return Objects.hash(super.hashCode(), favoriteID, userID, title, date);
    }

    @java.lang.Override
    public java.lang.String toString() {
        return "FavoriteArticle{" +
                "favoriteID=" + favoriteID +
                ", userID=" + userID +
                ", title='" + title + '\'' +
                ", date='" + date + '\'' +
                '}';
    }
}
