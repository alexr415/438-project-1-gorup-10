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
    private String url;

    public User(@NonNull int favoriteID, @NonNull String url) {
        this.favoriteID = favoriteID;
        this.url = url;
    }

    public int getFavoriteID(){
        return favoriteID;
    }

    public void setFavoriteID(int favoriteID){
        this.favoriteID = favoriteID;
    }

    public int getUserID() {
        return userID;
    }

    public void setUserID(int userID) {
        this.userID = userID;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String userID) {
        this.url = url;
    }

    public boolean equals(Object object) {
        if (this == object) return true;
        if (object == null || getClass() != object.getClass()) return false;
        if (!super.equals(object)) return false;
        User user = (User) object;
        return favoriteID == user.favoriteID && userID == user.userID && java.util.Objects.equals(url, user.url);
    }

    public int hashCode() {
        return Objects.hash(super.hashCode(), favoriteID, userID, url);
    }

    @java.lang.Override
    public java.lang.String toString() {
        return "User{" +
                "favoriteID=" + favoriteID +
                ", userID=" + userID +
                ", url='" + url + '\'' +
                '}';
    }
}
