import androidx.room.Dao;
import androidx.room.Delete;
import androidx.room.Insert;
import androidx.room.Query;
import androidx.room.Update;

import java.util.List;

@Dao
public interface FavoriteTopicsDAO {
    @Insert
    void insert(FavoriteTopic...favoriteTopic);

    @Update
    void update(FavoriteTopic...favoriteTopic);

    @Delete
    void delete(FavoriteTopic favoriteTopic);

    @Query("SELECT * FROM favoriteTopics")
    List<FavoriteTopic> getAllFavorites();

    @Query("SELECT * FROM favoriteTopics WHERE userID = :id")
    List<FavoriteTopic> getFavoritesByUserID(int id);

    @Query("SELECT * FROM favoriteTopics WHERE username = :name")
    List<FavoriteTopic> getFavoritesByUsername(String name);
}
