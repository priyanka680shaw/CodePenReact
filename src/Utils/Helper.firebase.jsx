import {  createUserWithEmailAndPassword } from "firebase/auth";
//import { initializeApp } from "firebase/app";
import { signInWithPopup, GoogleAuthProvider ,  GithubAuthProvider , signOut } from "firebase/auth";
import { auth } from "../Firebase/Firebase.confg";


//singUpWithEmailAndPasswordnoo
export async function singUpWithEmailAndPassword(auth , email , password){
   try{
    const result = await createUserWithEmailAndPassword(auth , email , password);
    console.log(result)
   }
   catch(err){
    console.log(err);
   }
}

//singinWiddthGoogle
const googlProvider = new GoogleAuthProvider();
export  async function singinWidthGoogle(){
   const result = await signInWithPopup(auth , googlProvider).then((data)=>window.location.reload())
   console.log("googlePopUp" , result)
}

//singUpwithGitHub
const gitHubProvier = new GithubAuthProvider();

export async function singInWithGitHub(){
  try{
   const result = await signInWithPopup(auth , gitHubProvier);
   console.log("gitAuth" , result);
  }
  catch(err){
   console.log(err);
  }
}

//logout

export async function logOut(auth){
      try{
         const logout = await signOut(auth)
      console.log("logout" , logout)
}
catch(err){
   console.log(err);
}
      }