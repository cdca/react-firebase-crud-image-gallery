import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBYWBoOMg3NO_W2uc5UbNM_D_E6LeKttDI",
  authDomain: "cedo-crud.firebaseapp.com",
  projectId: "cedo-crud",
  storageBucket: "cedo-crud.appspot.com",
  messagingSenderId: "701663603418",
  appId: "1:701663603418:web:747fcb02401190244053e3",
  measurementId: "G-7Q8Z7K7YDS",
};
initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
