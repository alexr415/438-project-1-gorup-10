import androidx.room.Dao;
import androidx.room.Delete;
import androidx.room.Insert;
import androidx.room.Query;
import androidx.room.Update;

import java.util.List;

@Dao
public interface FavoriteArticlesDAO {
    @Insert
    void insert(FavoriteArticle...favoriteArticle);

    @Update
    void update(FavoriteArticle...favoriteArticle);

    @Delete
    void delete(FavoriteArticle favoriteArticle);

    @Query("SELECT * FROM favoriteArticles")
    List<FavoriteArticle> getAllFavorites();

    @Query("SELECT * FROM favoriteArticles WHERE favoriteID = :id")
    List<FavoriteArticle> getFavoriteByID(int id);

    @Query("SELECT * FROM favoriteArticles WHERE userID = :id")
    List<FavoriteArticle> getFavoritesByUserID(int id);

    @Query("SELECT title FROM favoriteArticles WHERE favoriteID = :id")
    List<String> getTitleByFavoriteID(int id);

    @Query("SELECT date FROM favoriteArticles WHERE favoriteID = :id")
    List<String> getDateByFavoriteID(int id);
}
