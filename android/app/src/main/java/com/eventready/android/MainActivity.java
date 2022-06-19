package com.eventready.android;



import static com.blitzapp.animatedsplash.animation.AnimatedImage.FIT_CENTER;
import static com.blitzapp.animatedsplash.animation.AnimatedImage.getCenterX;
import static com.blitzapp.animatedsplash.animation.AnimatedImage.getCenterY;
import static com.blitzapp.animatedsplash.animation.GroupAnimation.splash;
import static com.blitzapp.animatedsplash.animation.Splash.FADE;
import static com.blitzapp.animatedsplash.animation.Splash.SPLASHFADE;
import static com.blitzapp.animatedsplash.animation.Splash.performSingleAnimation;
import static com.blitzapp.animatedsplash.animation.Splash.screenWidth;
import static com.blitzapp.animatedsplash.animation.Splash.setBackgroundColor;
import static com.blitzapp.animatedsplash.animation.Splash.setSplashHideAnimation;
import static com.blitzapp.animatedsplash.animation.Splash.setSplashHideDelay;
import static com.blitzapp.animatedsplash.animation.Splash.splashShow;

import android.os.Bundle;

import com.blitzapp.animatedsplash.animation.AnimatedImage;
import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;

public class MainActivity extends ReactActivity {
  public void onCreate(Bundle saved) {
    super.onCreate(saved);
    initiateSplash();
  }
  public void initiateSplash() {
    splash.createSplashView(MainActivity.this);
    setBackgroundColor("#FFFFFF");
    setSplashHideAnimation(SPLASHFADE);
    setSplashHideDelay(1000);
    double logoWidth = screenWidth * 0.624;
    double logoHeight = logoWidth * 1.064;
    AnimatedImage logo = new AnimatedImage(R.drawable.logo, logoWidth, logoHeight, getCenterX(logoWidth), getCenterY(logoHeight), 0, FIT_CENTER, false);
    performSingleAnimation(logo, FADE, 600, 0f, 1f);
    splashShow();
  }
  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "eventReady";
  }

  /**
   * Returns the instance of the {@link ReactActivityDelegate}. There the RootView is created and
   * you can specify the rendered you wish to use (Fabric or the older renderer).
   */
  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new MainActivityDelegate(this, getMainComponentName());
  }

  public static class MainActivityDelegate extends ReactActivityDelegate {
    public MainActivityDelegate(ReactActivity activity, String mainComponentName) {
      super(activity, mainComponentName);
    }

    @Override
    protected ReactRootView createRootView() {
      ReactRootView reactRootView = new ReactRootView(getContext());
      // If you opted-in for the New Architecture, we enable the Fabric Renderer.
      reactRootView.setIsFabric(BuildConfig.IS_NEW_ARCHITECTURE_ENABLED);
      return reactRootView;
    }
  }
}
