package com.anonymous.demoApp;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;
import android.util.Log;

public class RoomModule extends ReactContextBaseJavaModule {
    RoomModule(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName() {
        return "RoomModule";
    }

    @ReactMethod
    public User getUserByID(int id){
        Log.d("Getting user from ID: " + id);
    }
}