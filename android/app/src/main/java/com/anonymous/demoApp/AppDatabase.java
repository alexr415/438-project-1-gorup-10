package com.anonymous.demoApp;

import android.content.Context;

import androidx.room.Database;
import androidx.room.Room;
import androidx.room.RoomDatabase;

@Database(entities={}, version = 1)
public abstract class AppDatabase extends RoomDatabase {
    // DAOs
    public abstract UserDAO getUserDAO();
    public abstract FavoriteArticleDAO getFavoriteArticleDAO();

    private static volatile AppDatabase instance;
    private static final Object LOCK = new Object();

    // Get database instance
    public static AppDatabase getInstance(Context context){
        if(instance == null){
            synchronized (LOCK){
                if (instance == null){
                    instance = Room.databaseBuilder(context.getApplicationContext(),
                            AppDatabase.class,
                            "Database").build();
                }
            }
        }
        return instance;
    }
}