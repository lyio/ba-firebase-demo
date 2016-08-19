import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { BaFirebaseDemoAppComponent, environment } from './app/';
import {FIREBASE_PROVIDERS, defaultFirebase, AngularFire} from 'angularfire2';

if (environment.production) {
  enableProdMode();
}

bootstrap(BaFirebaseDemoAppComponent, [
  FIREBASE_PROVIDERS,
  defaultFirebase({
    apiKey: "",
    authDomain: "https://ba-nosql.firebaseio.com",
    databaseURL: "https://ba-nosql.firebaseio.com",
    storageBucket: "https://ba-nosql.firebaseio.com.appspot.com",
  })
]);
