import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider,signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import {getFirestore, doc,  getDoc, setDoc} from 'firebase/firestore'
    
const firebaseConfig = {
  apiKey: "AIzaSyBKanvnCECQE5ifQ3ElF81p9v2URECzhb0",
  authDomain: "sit313task-5a192.firebaseapp.com",
  projectId: "sit313task-5a192",
  storageBucket: "sit313task-5a192.appspot.com",
  messagingSenderId: "423659471004",
  appId: "1:423659471004:web:983c411144e0fdca8cad59",
  measurementId: "G-TQL53RZG52"
};
  const firebaseapp = initializeApp(firebaseConfig);
  const provider= new GoogleAuthProvider();
 
  provider.setCustomParameters({
  prompt:"select_account"
});
  
  export const auth=getAuth();
  export const signInWithGooglePopup =()=> signInWithPopup(auth,provider)
  export const db =getFirestore();
  export const createuserdocfromAuth = async(userAuth, additionalInformation ={}) =>

{
  if(!userAuth.email) return;

  const userDocRef=doc (db, 'users', userAuth.uid);
  console.log(userDocRef)


const userSnapShots = await getDoc(userDocRef);
console.log(userSnapShots)
console.log(userSnapShots.exists())

if(!userSnapShots.exists())
{
   const {displayName, email} =userAuth
   const createdAt = new Date();
   try{
    await setDoc(userDocRef,{
   displayName,
   email,
   createdAt,
   ...additionalInformation
    })
  }
    catch(error){
    console.log('error in creating', error.message)
    }

   }
   return userDocRef;
}

export async function createAuthUserWithEmailAndPassword (email,password)
{ 
  if(!email || !password) 
  return
  return await createUserWithEmailAndPassword(auth,email,password)
}

export async function signinAuthUserWithEmailAndPassword (email,password)
{ 
  if(!email || !password) 
  return
  return await signInWithEmailAndPassword(auth,email,password)
}

