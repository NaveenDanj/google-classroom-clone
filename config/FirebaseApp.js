import { initializeApp } from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDmw-UX7eza8uIYlOAK3j8LXG4Xm0S4L7E",
  authDomain: "classroom-clone-6ad7a.firebaseapp.com",
  projectId: "classroom-clone-6ad7a",
  storageBucket: "classroom-clone-6ad7a.appspot.com",
  messagingSenderId: "973011895976",
  appId: "1:973011895976:web:a8b4799a34c07e91df649d",
  measurementId: "G-QN2XSZX79J"
};

// if a Firebase instance doesn't exist, create one
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {
  db
}

export default app;
