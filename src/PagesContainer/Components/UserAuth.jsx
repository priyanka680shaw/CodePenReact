import React, { useState } from 'react'

import { IoEyeSharp } from "react-icons/io5";//open
import { HiMiniEyeSlash } from "react-icons/hi2";//close

export const UserAuth = ({lable , inputType ,  placeHolder , value  , Icon , isPass , setStateFunction}) => {

    //eyes
   
    const [isShow , setIsShow] = useState(false);
    //to cheack wheather the entered data is in correct from or not for email box error show
    const [cheackuseData , setChaeackUserDta] = useState();
    const [isEmailValid , setIsEmailVlid] = useState();
    //handle User data
    function userDataHandler(e){
      setStateFunction(e.target.value);
      setChaeackUserDta(e.target.value);
      if(placeHolder === "Email"){
        const emailRegx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const status = emailRegx.test(cheackuseData)
        setIsEmailVlid(status);
      }

    }
  return (
  
   
    <>
        <div className='flex flex-col justify-center items-start text-white gap-1'>
            <label>{lable}</label>
            <div className='flex justify-center items-center gap-3 w-full md:w-96 rounded-md px-4 py-1 bg-gray-200'>
                <Icon className='text-2xl text-text555'/>
                <input type={inputType} placeholder={placeHolder} value = {value} className= { ` flex-1 w-full h-full outline-none border-none py-2 bg-transparent text-text555 text-md ${isEmailValid && placeHolder === "Email" &&   "border-2 border-red-700"}`} onChange={userDataHandler} />
                 {
                  isPass && (
                    <div className='cursor-pointer '>
                     {
                      isShow ?  <IoEyeSharp className='text-text555 text-2xl' onClick={()=>{
                        setIsShow((pre)=>!pre);
                      }}/> :  <HiMiniEyeSlash className='text-text555 text-2xl' onClick={()=>{
                        setIsShow((pre)=>!pre);
                      }}/>
                     }
                    </div>
                  )
                 }
             </div>

        </div>
    </>
  )
}
