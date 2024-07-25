import { useState } from 'react'
import { logo } from '../../assets/Image'
import { UserAuth } from '../Components/UserAuth'
import { AiTwotoneMail } from "react-icons/ai";
import { MdOutlinePassword } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { VscGithub } from "react-icons/vsc";
import { auth } from '../../Firebase/Firebase.confg';
import { singUpWithEmailAndPassword , singinWidthGoogle , singInWithGitHub , singInWithEmailPassword} from '../../Utils/Helper.firebase';
import { Navigate, NavLink, useNavigate } from 'react-router-dom';


const SingUP = () => {
    
const navigateTo  =useNavigate()
  //email
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  console.log("email" ,email , "Passwordd"  ,password)
  //sing in button or login buttonstate
  const [isLoggin, setIsLoggin] = useState(true);

  return (
    <>
      <div className='w-full py-6 flex flex-col'>
        {/* logo Image  of codepen */}
        {/* <NavLink to={}></NavLink> */}
        <img src={logo} alt='CodePen' className='object-contain opacity-50 w-32 h-auto' onClick={()=>{
          navigateTo("/home/")
        }} />

        {/* Sing in Box  */}
        <div className='w-full flex flex-col items-center justify-center'>
          {/* heading */}
          <p className='text-primaryText text-2xl py-12'>Join with us 😊</p>
          {/* uaer data recived */}
          <div className='px-4 py-8 w-full md:w-auto bg-secondary shadow-md rounded-lg flex flex-col justify-center items-center gap-8'>
            {/* email  */}
            <UserAuth key={"email"} lable={"Email"} isPass={false} placeHolder={"Email"} inputType={"email"} value={email} Icon={AiTwotoneMail} setStateFunction={setEmail} />
            {/* passwpord */}
            <UserAuth key={"pws"} lable={"Password"} isPass={true} placeHolder={"Password"} inputType={"password"} value={password} Icon={MdOutlinePassword} setStateFunction={setPassword} />
            {/* allert Section */}
            {/* login  button */}
            {
              isLoggin ? <div  className='cursor-pointer flex justify-center items-center gap-3 w-full md:w-96 rounded-md px-4 py-1 bg-green-600 text-3xl text-white ' onClick={()=>{
                  singUpWithEmailAndPassword(auth , email , password);
                  setEmail(" ");
                  setPassword(" ");
                  setIsLoggin((pre)=>!pre)
                }} >
                <p className='text-white text-xl' >Sing Up</p>
              </div> : <div className=' cursor-pointer flex justify-center items-center gap-3 w-full md:w-96 rounded-md px-4 py-1 bg-green-600 text-3xl text-white ' onClick={()=>{
                  singInWithEmailPassword(auth , email , password);
                  setEmail(" ");
                  setPassword(" ");
                  navigateTo("/home/projectshub")
                }} >
                <p className='text-white text-xl' >Log In</p>
              </div>
            }

            {/* account text section */}
            {
              isLoggin ? <p className='text-primaryText text-sm gap-3 flex justify-center items-center'>Already Have an Account 😊?<span className='text-emerald-500 cursor-pointer hover:underline' onClick={()=>{
                  setIsLoggin((pre)=>!pre);
                }}>Login here</span></p> :
                <p className='text-primaryText text-sm gap-3 flex justify-center items-center'>Doesn't have an Account 🥹!<span className='text-emerald-500 cursor-pointer hover:underline' onClick={()=>{
                  setIsLoggin((pre)=>!pre);
                }}>Create here</span></p>
            }
            {/* or  lin section */}
            <div className='flex justify-center items-center gap-6'>
            <div className='h-[1px] w-24 rounded-md bg-gray-400'></div>
              <p className='text-sm text-primaryText'>OR</p>
              <div className='h-[1px] w-24 rounded-md bg-gray-400'></div>
            </div>
            {/* sing in with google */}
            <div onClick = {()=>{
              singinWidthGoogle()
            }} className='cursor-pointer flex justify-center items-center gap-3 w-full md:w-96 rounded-md px-4 py-1 bg-gray-600 text-xl text-white '>
            <FcGoogle className='text-3xl'/>
            <div >
                <p>Sing in with Google</p>
            </div>
            </div>
            {/* or section */}
            {/* <div className='flex justify-center items-center gap-6'>
            <div className='h-[1px] w-24 rounded-md bg-gray-400'></div>
              <p className='text-sm text-primaryText'>OR</p>
              <div className='h-[1px] w-24 rounded-md bg-gray-400'></div>
            </div> */}
            {/* sing in with github */}
            {/* <div onClick={singInWithGitHub}
            className='cursor-pointer flex justify-center items-center gap-3 w-full md:w-96 rounded-md px-4 py-1 bg-gray-600 text-xl text-white '>
            <VscGithub className='text-3xl text-purple-500'/>
            <div >
                <p>Sing in with Github</p>
            </div>
            </div> */}
          </div>

        </div>
      </div>
    </>
  )
}

export default SingUP
