import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAi7rxyEp0fFNSqK9JIBy8cD5z9604B1aU",
  authDomain: "linkedin-clone-c4b0e.firebaseapp.com",
  projectId: "linkedin-clone-c4b0e",
  storageBucket: "linkedin-clone-c4b0e.appspot.com",
  messagingSenderId: "368650831021",
  appId: "1:368650831021:web:a07c22ea053b4818c27224",
  measurementId: "G-FY1ZRVRN08",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
