import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyCwfJbr7O_z2vb6MxlmLfFQTeXQI1vnlnA",
  authDomain: "netflix-clone-fc0f3.firebaseapp.com",
  projectId: "netflix-clone-fc0f3",
  storageBucket: "netflix-clone-fc0f3.firebasestorage.app",
  messagingSenderId: "316711988382",
  appId: "1:316711988382:web:03050c06e8993ffe6cdf8f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password)=>{
   try {
     const res = await createUserWithEmailAndPassword(auth, email, password);
     const user = res.user;
     await addDoc(collection(db , "user"), {
        uid: user.uid,
        name,
        authProvider: "local",
        email,
     })
   } catch(error){
       console.log(error);
       toast.error(error.code.split("/")[1].split("-").join(" "));
   }
}

const login = async (email, password) => {
   try{
     await signInWithEmailAndPassword(auth, email,password);
   }catch(error){
     console.log(error);
     toast.error(error.code.split("/")[1].split("-").join(" "));
   }
}

const logout = ()=>{
    signOut(auth);
}

export { auth, db, login, signup, logout};