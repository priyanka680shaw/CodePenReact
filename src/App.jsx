import {
  Route,
  Routes,
  Navigate,
  useNavigate,
} from "react-router-dom";
import { useSelector , useDispatch } from "react-redux";
import { setUser } from "./Redux/Slice/User.Reducer";
import Spinner from "./PagesContainer/Components/Spinner";
import { Home , ProjectsCreate } from "./PagesContainer/Pages/Index";
import { auth ,db } from "./Firebase/Firebase.confg";
import {onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { set_Project } from "./Redux/Slice/Project.Reducer";
import { collection, doc, onSnapshot, orderBy, query, setDoc } from "firebase/firestore";
function App() {

const dispatch = useDispatch();

const store = useSelector((state)=>state);
//console.log("store test" , store)

const [isLoding , setIsLoding] = useState(true)
 const navigate = useNavigate();
 //user Information
  useEffect(()=>{
    // if user addded or adding the datas in to the firestore
      const userExistance = onAuthStateChanged(auth , (userCredencial)=>{
        if(userCredencial){
          //console.log("userCreadencial" , userCredencial)
          //database is going  to store all the data sff
          try{
            setDoc(doc(db , "users", userCredencial?.uid) , userCredencial?.providerData[0]).
           // ddispatch the action to the store
            then(()=>{ 
              dispatch(setUser(userCredencial?.providerData[0]))
              navigate("/home")      
            })
          }
          catch(err){
            console.log("set ddoc error" , err)
          }
          
          
        }
        else{
          console.log("user not addded");
          navigate("/home")
        }
      })
      setInterval(()=>{
        setIsLoding(false)
      },2000) 
      return ()=> userExistance()
  } , [])

  //useEffect for Projects to push the projects ddata
  useEffect(()=>{
    const projectQuery = query(
      collection(db , "projects"),
      orderBy("id" , "desc")
    )
    const unSuscribe = onSnapshot(projectQuery , (querySnaps =>{
      const projectsList = querySnaps.docs.map(doc => doc.data())
      dispatch(set_Project(projectsList));
      return unSuscribe ; 
    }))
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
