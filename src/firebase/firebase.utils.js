/* import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';


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
  const userRef = firestore.get()
  const snapShot = await userRef.get()

  if (!snapShot.exist) {
    const { displayName, email } = userAuth
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      })
    } catch (error) {
      console.log('Error al crear el usuario', error.message)
    }
  }
  return userRef;
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const firestore = getFirestore(app)

const provider = new GoogleAuthProvider()
signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
  });
 */