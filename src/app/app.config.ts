import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"ring-of-fire-c61ca","appId":"1:819955961846:web:e23fcba92fb310096b81d7","storageBucket":"ring-of-fire-c61ca.firebasestorage.app","apiKey":"AIzaSyBK_AdBgKUpJJAw11oLqcjKFDRhclweI_A","authDomain":"ring-of-fire-c61ca.firebaseapp.com","messagingSenderId":"819955961846"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideDatabase(() => getDatabase()), provideMessaging(() => getMessaging())]
};
