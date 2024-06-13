import {
  Route,
  Routes,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Spinner from "./PagesContainer/Components/Spinner";
import { Home , ProjectsCreate , ProjectsHub} from "./PagesContainer/Pages/Index";
import { auth ,db } from "./Firebase/Firebase.confg";
import {onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { doc, setDoc } from "firebase/firestore";
function App() {
const [isLoding , setIsLoding] = useState(true)
 const navigate = useNavigate();
  useEffect(()=>{
    // if user addded or adding the dats in to the firestore
      const userExistance = onAuthStateChanged(auth , (userCredencial)=>{
        if(userCredencial){
          console.log(userCredencial)
           setDoc(doc(db , "users", userCredencial?.uid) , userCredencial?.providerData[0] ).then((result)=>console.log(result))
          navigate("/home/")
        }
        else{
          console.log("user not addded");
          navigate("/home/auth")
        }
      })
      setInterval(()=>{
        setIsLoding(false)
      },2000)
      return ()=> userExistance()
  } , [])
  return (
    <>

      {
        isLoding?<div className="flex justify-center items-center w-full h-screen"><Spinner/></div>:   <Routes>
      {/* (* it is wildcart if no routes matches then show this ) */}
        <Route path="/home/*" element = {<Home/>}/>
        {/* if path not matching */}
        <Route path="*" element = {<Navigate to={'/home'}/>}/>
        <Route path="/newProject" element = {<ProjectsCreate/>}/>
        {/* <Route path="/projectshub" element ={<ProjectsHub/>}/>  */}
      </Routes>
      }
   
    </>
  )
}

export default App
