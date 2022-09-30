import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, doc, addDoc, getDocs, setDoc, collection, query, where, orderBy } from "firebase/firestore";
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

export const getOrders = async (userId) => {
  console.log(userId)
  const orderRef = query(collection(db, 'orders'), where('userId', '==', userId), orderBy('createdAt', 'desc'));
  console.log(orderRef)

 /*  let querySnapshot = await getDocs(orderRef);
  querySnapshot.forEach((doc) => {
    querySnapshot = [...querySnapshot, { id: doc.id, ...doc.data() }]
    console.log(doc.id, '>>>', doc.data())
  })

  return querySnapshot
} */
let orders = await getDocs(orderRef)
  .then((querySnapshot) => {
    let orders = [];
    querySnapshot.forEach((doc) => {
      orders = [...orders, { id: doc.id, ...doc.data() }]
      console.log(doc.uid)
      console.log(doc.data())
      console.log(orders)
    }
    );
    return orders;

  }).catch((error) => {
    console.log('error', error)
  })
console.log(orders)
return orders
}

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app