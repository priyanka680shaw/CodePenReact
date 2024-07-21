
import { FcSearch } from "react-icons/fc";
import { NavLink, Route, Routes } from 'react-router-dom';
import { motion } from "framer-motion"
import { ProjectsHub, SingUP } from '../Pages/Index';
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import UserProfile from "./UserProfile";
import { setSearchTerms } from "../../Redux/Slice/Search.Reducer";
import { useState } from "react";

const RightSideBar = () => {
  //user to cheack ligin or not getting data from redux store
 
  const user = useSelector((state) => state.userReducer?.user);
  //console.log("user" , user)
//filter search 

const serachTerm = useSelector((state)=>state.searchReducer?.searchTerms ? state.searchReducer?.searchTerms : "")

const dispatch = useDispatch()
const [singInDiaplay , setSingInDisplay] = useState(true)
  return (
    // complete div representataion (flex-1 : to occoupie the reamaning space in flex)
    <>
      <div className='flex-1 min-h-screen max-h-screen overflow-y-auto overflow-x-hidden h-full flex flex-col  px-4 md:px-4 py-4 md:py-12'>
        {/* top section start from here */}
        <div className={`flex justify-center items-center gap-3 w-full h-screen ${user && "h-[auto]"}`}>
          {/* search Bar */}
          {
            user &&  <div className='w-full bg-secondary  border-gray-400 px-4 py-1 flex justify-start items-center gap-3 rounded'>
            <FcSearch className='text-2xl' />
            <input type='text' className='placeholder:text-gray-400 flex-1 px-4 py-1 text-xl bg-transparent text-primaryText outline-none border-none' placeholder='Search for Project....'  value={serachTerm} onChange={(e)=>{
              dispatch(setSearchTerms(e.target.value))
            }}/>
          </div> 
          }
          {/* *********************** */}
          {/* user Profile SingIin or Login */}

          {/* userAuth not present false for ti Sig in */}
          {
            !user && (
              <motion.div whileTap={{ scale: 0.9 }}
                className={`flex justify-center items-center flex-col gap-10 `}>
                <h1 className="text-3xl text-white font-extrabold">Sing In For the fuurther enjoyment of Coding 😊😊</h1>
                <NavLink to={"/home/auth"} className="whitespace-nowrap  bg-emerald-500 px-6 py-2 font-bold hover:bg-emerald-700 text-white  cuesor-pointer rounded" onClick={()=>{
                  setSingInDisplay()
                }}>
                  Sign In
                </NavLink>
              </motion.div>
            )
          }
          {/* userAuth not present true for login*/}

        {
          user && (
            <UserProfile/>
          )
        }
        </div>
        {/*************************************************************************/}
     {/* middle of screen adding name of the user */}
       
     {/* <div className='flex justify-center items-center'>
      <div className='w-full flex justify-center items-center roundded-xl overflow-hidden cursor-pointer gap-2'>
      {
          user?.photoURL?(
            <>
              <div className="flex justify-center items-center flex-col">
                <p className="text-white text-[50px]">Welcome to Codepen !</p>
                <p className="text-white text-[40px] font-bold">{user.displayName}</p>
              
              <motion.img src={user?.photoURL} alt = {user?.displayName} referrerPolicy='no-refer' className='w-[100px]   rounded object-cover'/>
              </div>
            </>
          ):<>
          <p className=" whitespace-nowrap  bg-emerald-500 px-6 py-2 font-bold hover:bg-emerald-700 text-white  cuesor-pointer rounded">{user?.email}</p>
          
          </>

        }
      </div>
    </div>  */}












        {/* bottom Section  */}
        <div className='w-full flex justify-center  flex-1'>
       

       {/* ================================================== */}
          <Routes>
            {/* if ligin so redirect to the Projects Page */}
            <Route path='/projectshub' element={<ProjectsHub />} />
            {/* if not so create account */}
            <Route path='/auth' element={<SingUP />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default RightSideBar;
