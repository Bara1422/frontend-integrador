import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, doc, addDoc, getDocs, setDoc } from "firebase/firestore";
import { get } from "react-scroll/modules/mixins/scroller";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCr28udwFpVoVR-uTfmpTt7NDd2wAQI59s",
  authDomain: "nucba-integrador-react.firebaseapp.com",
  projectId: "nucba-integrador-react",
  storageBucket: "nucba-integrador-react.appspot.com",
  messagingSenderId: "248856288967",
  appId: "1:248856288967:web:311c6feace5ad786fae8e2"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = doc(db, `users`, `${userAuth.uid}`);
  const snapShot = await getDocs(userRef);
  console.log(additionalData);

  if (!snapShot.exists()) {
    const { displayName, email, uid } = userAuth;

    try {
      await setDoc(userRef, {
        displayName,
        email,
        uid,
        ...additionalData,
      });
    } catch (error) {
      console.log('Error creating user', error.message);
    }
  }
  return userRef;
}

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app