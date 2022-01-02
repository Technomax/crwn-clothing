import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config={
    apiKey: "AIzaSyBf9zJOM9jgwUWsgZnxB-nXoCjvj1Ym95Q",
  authDomain: "crwn-db-18ffc.firebaseapp.com",
  projectId: "crwn-db-18ffc",
  storageBucket: "crwn-db-18ffc.appspot.com",
  messagingSenderId: "127399328766",
  appId: "1:127399328766:web:40127f329e8db41b481eaf",
  measurementId: "G-7HFN3C963V"
};

firebase.initializeApp(config);
export const auth=firebase.auth();
export const firestore=firebase.firestore();

const provider= new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle=()=>auth.signInWithPopup(provider);

export default firebase;
