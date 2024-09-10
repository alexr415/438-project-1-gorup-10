import androidx.annotation.NonNull;
import androidx.room.Entity;
import androidx.room.PrimaryKey;

import java.util.Objects;

@Entity(tableName = "favoriteTopics")
public class User {
    @PrimaryKey(autoGenerate = true)
    private int favoriteID;

    @NonNull
    private int userID;

    @NonNull
    private String topic;

    public User(@NonNull int favoriteID, @NonNull String topic) {
        this.favoriteID = favoriteID;
        this.topic = topic;
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

    public String getTopic() {
        return topic;
    }

    public void setTopic(String userID) {
        this.topic = topic;
    }

    public boolean equals(Object object) {
        if (this == object) return true;
        if (object == null || getClass() != object.getClass()) return false;
        if (!super.equals(object)) return false;
        User user = (User) object;
        return favoriteID == user.favoriteID && userID == user.userID && java.util.Objects.equals(topic, user.topic);
    }

    public int hashCode() {
        return Objects.hash(super.hashCode(), favoriteID, userID, topic);
    }

    @java.lang.Override
    public java.lang.String toString() {
        return "User{" +
                "favoriteID=" + favoriteID +
                ", userID=" + userID +
                ", topic='" + topic + '\'' +
                '}';
    }
}
