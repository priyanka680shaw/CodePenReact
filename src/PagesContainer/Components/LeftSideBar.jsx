
import { MdKeyboardDoubleArrowLeft, MdHome } from "react-icons/md";
import { motion } from "framer-motion"
import { logo } from '../../assets/Image/index';
import { NavLink } from 'react-router-dom';
import { useState } from "react";
import { useSelector } from "react-redux";
const LeftSideBar = () => {
    // state for sidebar click
    const [isSideMenu, setIsSideMenu] = useState(false);

    const user = useSelector((state)=>state.userReducer.user)
    console.log("leftSidebarPage" , user)
    return (
        <>

            {/* later make some changes */}
            <div
                className={` ${isSideMenu ? "w-2" : "w-48 "} bg-secondary min-h-screen max-h-screen relative px-3 py-6 flex flex-col justify-start items-center transition-all duration-200 ease-in-out`}>
                {/* anchor side bar click*/}
                <motion.div whileTap={{ scale: 0.9 }} className='w-6 h-6  rounded-tr-lg rounded-br-lg flex justify-center items-center absolute -right-6 cursor-pointer' onClick={() => {
                    setIsSideMenu((prev) => !prev)
                }}>
                    <MdKeyboardDoubleArrowLeft className='text-[30px] text-white' />
                </motion.div>
                {/*****************************************************************************************/}

                <div className='w-full flex flex-col gap-4  overflow-hidden'>
                    {/* logo */}
                    <NavLink to={'/home'}>
                        <img src={logo} alt='CodePenLogo' className='cursor-pointer' />
                    </NavLink>
                    {/* ********************************* */}
                    {/* start coding  */}
                    <NavLink to={'/newProject'}>
                        <div className='border-2 border-gray-200 rounded-xl px-4 py-2 hover:border-gray-400'>
                            <p className='capitalize text-gray-200 hover:text-gray-400 text-center text-sm'>start coding</p>
                        </div>
                    </NavLink>
                    {/* ********************************* */}
                    {/* if user login  then we need to show home icon else not*/}
                    {
                        user && (
                            //all thre projects where user can see
                            <NavLink to={'/home/projectshub'}>
                                <motion.div whileHover={{ scale: 1.2 }} className='flex items-center justify-center gap-2'>
                                    <MdHome className='text-primaryText text-xl' />
                                    <motion.p whileHover={{ color: 'green' }} className='text-lg text-primaryText'>Home</motion.p>
                                </motion.div>
                            </NavLink>
                        )
                    }

                </div>
            </div>

        </>
    )
}

export default LeftSideBar
