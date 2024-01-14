import { initializeApp,getApp,getApps } from "firebase/app";
import {getAuth} from "firebase/auth"
import { collection, doc, getDocs, getFirestore, updateDoc } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

import { getDatabase } from "firebase/database";
import { useState } from "react";



const firebaseConfig = {
    apiKey: "AIzaSyBLLohChIsiQBVcvymYZNJO8v08lInsgNo",
    authDomain: "football-fever-325a9.firebaseapp.com",
    projectId: "football-fever-325a9",
    storageBucket: "football-fever-325a9.appspot.com",
    messagingSenderId: "1096504738014",
    appId: "1:1096504738014:web:6c7522c929b6a2a2ebc24f",
    measurementId: "G-P2J57441HH"
  };

// Initialize Firebase
const app =!getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

const db = getFirestore(app)



let val2;
const FetchAPi = async (path) => {

  try {
    const numberDoc = collection(db, "team");
    const docSnapshot = await getDocs(numberDoc);
    const size =docSnapshot.size();
    
    const val = docSnapshot.docs[0].data().d;
    val2=val;
  } catch (error) {
    console.error("Error updating value:", error);
    throw error;
  }

  return val2;
};


const UpdateValue =async(number)=>{
  const numberDoc = doc(db, "imgCount", "MwgsCuWhuN7zElYo8ddi");
 
  await updateDoc(numberDoc, {
    imgCount: number
  });
}

export {app,auth,db}