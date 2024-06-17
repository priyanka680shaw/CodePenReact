import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { logOut } from '../../Utils/Helper.firebase';
import { setUser } from '../../Redux/Slice/User.Reducer';
import { auth } from '../../Firebase/Firebase.confg';
import { IoMdLogOut } from "react-icons/io";
const UserProfile = () => {
  const user = useSelector((state)=>state.userReducer?.user);
  const dispatch = useDispatch()
  return (
   <>
    <div className='flex  items-center'>
      <div className='w-full flex items-center roundded-xl overflow-hidden cursor-pointer gap-2'>
      {
          user?.photoURL?(
            <>
              <motion.img src={user?.photoURL} alt = {user?.displayName} referrerPolicy='no-refer' className='w-[40px]   rounded-r-2xl object-cover'/>
              <NavLink to={"/home/auth"} className="whitespace-nowrap  bg-red-700 px-6 py-2 font-bold hover:bg-red-400 text-white  cuesor-pointer rounded" onClick={()=>{
                logOut(auth);
                dispatch(setUser(""));
              }}>
             <IoMdLogOut className='text-white  text-2xl'/>
            </NavLink>
            </>
          ):<>
          <p className=" whitespace-nowrap  bg-emerald-500 px-6 py-2 font-bold hover:bg-emerald-700 text-white  cuesor-pointer rounded">{user?.email[0]}</p>
          <NavLink to={"/home/auth"} className="whitespace-nowrap  bg-red-700 px-6 py-2 font-bold hover:bg-red-400 text-white  cuesor-pointer rounded-r-2xl" onClick={()=>{
                logOut(auth);
                dispatch(setUser(""));
              }}>
              Log Out
            </NavLink>
          </>

        }
      </div>
    </div> 
   </>
  )
}

export default UserProfile
