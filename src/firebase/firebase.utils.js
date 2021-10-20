import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat//auth'

const config={
    apiKey: "AIzaSyDDyPFMeSkrSbU1OoXuNZpQLdDyL9Iy0xo",
    authDomain: "crwn-db-db17a.firebaseapp.com",
    projectId: "crwn-db-db17a",
    storageBucket: "crwn-db-db17a.appspot.com",
    messagingSenderId: "374951430706",
    appId: "1:374951430706:web:00e005e1301a2226df4a2b",
    measurementId: "G-0707G3ZFPN"
  };

  firebase.initializeApp(config);


  export const auth=firebase.auth();
  export const firestore=firebase.auth();

  const provider=new firebase.auth.GoogleAuthProvider(); 
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle=()=> auth.signInWithPopup(provider);

  export default firebase;
