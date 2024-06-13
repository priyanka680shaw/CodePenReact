import React, { useState } from 'react';
import { FcSearch } from "react-icons/fc";
import { NavLink, Route, Routes } from 'react-router-dom';
import { motion } from "framer-motion"
import { ProjectsHub, SingUP } from '../Pages/Index';

const RightSideBar = () => {
  //user Auth
  const [userAuth, setUserAuth] = useState(null);

  return (
    // complete div representataion (flex-1 : to occoupie the reamaning space in flex)
    <>
      <div className='flex-1 min-h-screen max-h-screen overflow-y-auto overflow-x-hidden h-full flex flex-col  px-4 md:px-4 py-4 md:py-12'>
        {/* top section start from here */}
        <div className='flex justify-between items-center gap-3 w-full'>
          {/* search Bar */}
          <div className='w-full bg-secondary  border-gray-400 px-4 py-1 flex justify-start items-center gap-3 rounded'>
            <FcSearch className='text-2xl' />
            <input type='text' className='placeholder:text-gray-400 flex-1 px-4 py-1 text-xl bg-transparent text-primaryText outline-none border-none' placeholder='Search for Projects ...' />
          </div>
          {/* *********************** */}
          {/* user Profile SingIin or Login */}

          {/* userAuth not present false for ti Sig in */}
          {
            !userAuth && (
              <motion.div whileTap={{ scale: 0.9 }}
                className=' flex justify-center items-center '>
                <NavLink to={"/home/auth"} className="whitespace-nowrap  bg-emerald-500 px-6 py-2 font-bold hover:bg-emerald-700 text-white  cuesor-pointer rounded">
                  Sing In
                </NavLink>
              </motion.div>
            )
          }
          {/* userAuth not present true for login*/}
          {
            userAuth && (
              <motion.div whileTap={{ scale: 0.9 }}
                className=' flex justify-center items-center '>
                <NavLink to={"/home/logiinPage"} className="whitespace-nowrap  bg-emerald-500 px-6 py-2 font-bold hover:bg-emerald-700 text-white  cuesor-pointer rounded">
                  Log In
                </NavLink>
              </motion.div>
            )
          }
        </div>
        
        {/*************************************************************************/}
        {/* bottom Section  */}
        <div className='w-full flex justify-center items-center flex-1'>
          <Routes>
            {/* if ligin so redirect to the Projects Page */}
            <Route path='/projectshub' element={<ProjectsHub/>} />
            {/* if not so create account */}
            <Route path='/auth' element={<SingUP />} />
          </Routes>
        </div>
        </div>
    </>
  );
}

export default RightSideBar;
