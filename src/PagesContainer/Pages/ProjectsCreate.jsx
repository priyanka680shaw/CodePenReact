import React, { useEffect, useState } from 'react';
import SplitPane, { Pane } from 'split-pane-react';
import { motion } from 'framer-motion';
import 'split-pane-react/esm/themes/default.css';
import { TfiHtml5 } from "react-icons/tfi";
import { IoSettings } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { TbBrandJavascript } from "react-icons/tb";
import CodeMirror from '@uiw/react-codemirror';
import { aura } from '@uiw/codemirror-theme-aura';
import { javascript } from '@codemirror/lang-javascript';
import { NavLink } from 'react-router-dom';
import { logo } from '../../assets/Image';
import { AnimatePresence } from 'framer-motion';
import { useSelector } from 'react-redux';
import { logOut } from '../../Utils/Helper.firebase';
import { auth } from '../../Firebase/Firebase.confg';
import { useDispatch } from 'react-redux';
import { setUser } from '../../Redux/Slice/User.Reducer';
const ProjectsCreate = () => {
  const [sizes, setSizes] = React.useState(['70%', '30%']);
  const [sizesCodePanel, setSizesCodePanel] = React.useState(['auto', 'auto', 'auto']);
  //displayn value in codepanal
  const [html, setHtml] = useState("<!DOCTYPE html>");
  const [css, setCss] = useState("body{backgrooun : red}");
  const [js, setJs] = useState("console.log()");
  const [output, setOutput] = useState()
  const [isTitle, setIsTitle] = useState(true);
  const [titleValue, setTitleValue] = useState("Untitled");
  //redux
  const user = useSelector((state)=>state.userReducer?.user);
  const dispatch = useDispatch();


  function updateOutput() {
    const displayOutput = `
    <html>
    <head>
    <style>${css}</style>
    </head>
    <body>
    ${html}
    <script src ={${js}}></script>
    </body>
    </html>`
    setOutput(displayOutput);
  }
  // to call the output functiion
  useEffect(() => {
    updateOutput();
  }, [html, css, js])
  const layoutCSS = {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  // function ssaveProgram(){
  //       console.log("save")
  // }

  return (
    <>
      {/* projects Main container */}
      <div className='flex justify-start items-start flex-col w-screen h-screen overflow-x-hidden'>


        {/* header */}
        <header className='px-12 py-4 w-full flex justify-between items-center'>
          {/* left  */}
          <div className='flex justify-center items-center gap-6'>
            {/* logo redirect to projects*/}
            <NavLink to="/home/*">
              <img src={logo} alt='codepenLogo' className='w-32 h-auto boject-contain' />
            </NavLink>
            <div className='flex flex-col justify-start items-start'>
              {/* title */}
           <div className='flex items-center gap-2 border-2 border-gray-800 p-2 shadow-md rounded'>
           <AnimatePresence>
                {
                  isTitle ? <>
                    <motion.input
                      key={"titleInput"}
                      type="text"
                      placeholder='Your Title'
                      value={titleValue}
                      onChange={(e) => {
                        setTitleValue(e.target.value);
                      }}
                      className='px-2  py-1 bg-gray-700 rounded-md border-2 border-red-900 text-white'
                    />
                  </> : <>
                    <motion.div key={"titlelable"} className='px-2 py-1 text-white text-mdd w-[100px]  rounded-xl'>
                      {titleValue}
                    </motion.div>
                  </>
                }
              </AnimatePresence>
              {/* cheack box for ecddi  */}
              <AnimatePresence>
              {/* settitle or title state upddate */}
                {
                  isTitle ? <>
                    <motion.div key={"checkButton"} className='' whileTap={{ scale: 0.9 }} onClick={() => { setIsTitle((pre) => !pre) }}>
                      <p className='text-2xl cursor-pointer'>✅</p>
                    </motion.div>
                  </> : <>
                  <motion.div key={"editButton"} className='' whileTap={{ scale: 0.9 }} onClick={() => { setIsTitle((pre) => !pre) }}>
                      <p className='text-2xl cursor-pointer'>📝</p>
                    </motion.div>
                  </>
                }
              </AnimatePresence>
           </div>

              {/* follow */}
            </div>
          </div>
          {/* right user Section */}
              <div className='flex justify-center items-center gap-3'>
                {/* saveButton  onclick ={saveProgram}*/}
                <motion.button  className='px-6 py-2 bg-primaryText cursor-pointer text-base text-white font-semibold rounded-md'>
                  Save
                </motion.button>
                
                {/* userlogin or sing in */}









                {
            !user && (
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
            user && (
              <div   className=' flex justify-center items-center gap-2'>
              <motion.div whileTap={{ scale: 0.9 }}
              >
                <NavLink to={"/home/logiinPage"} className=" whitespace-nowrap  bg-emerald-500 px-6 py-2 font-bold hover:bg-emerald-700 text-white  cuesor-pointer rounded">
                  {user[0]}
                </NavLink>
                
              </motion.div>
              <motion.div whileTap={{ scale: 0.9 }}
              >
              <NavLink to={"/home/auth"} className="whitespace-nowrap  bg-red-700 px-6 py-2 font-bold hover:bg-red-400 text-white  cuesor-pointer rounded" onClick={()=>{
                logOut(auth);
                dispatch(setUser(""));
              }}>
                  Log Out

                </NavLink>
              </motion.div>
              </div>
            )
          }






              </div>
        </header>
 {/* ************************************* */}
        {/* alret */}


        {/* coding section */}

        <div className='w-full h-screen'>
          <div style={{ height: "100vh" }}>
            <SplitPane
              split='horizontal'
              sizes={sizes}
              onChange={setSizes}
            >
            {/* top coding platte */}
              <div style={{ ...layoutCSS, background: '#ddd' }}>
                {/* adding code pltes */}

                <SplitPane
                  split='vertical'
                  sizes={sizesCodePanel}
                  onChange={setSizesCodePanel}
                >
                  {/* HTML */}

                  <div className='flex justify-start items-start flex-col w-full bg-gray-700 h-full border-2 border-white-900'>
                    {/* header htmltag*/}
                    <div className='flex justify-between items-center w-full py-2 px-2 border-2 border-gray-300'>

                      <div className='left flex gap-2 items-center px-2 bg-gray-600 rounded'>
                        <TfiHtml5 className='text-red-900' />
                        <p className='text-white'>HTML</p>
                      </div>

                      <div className='left flex gap-2 items-center'>
                        <IoSettings className='text-white' />
                        <IoIosArrowDown className='text-white' />
                      </div>
                    </div>
                    {/* codde written */}
                    <div className='py-4 px-4 w-full'>
                      {/* code mirror */}
                      <CodeMirror
                        value={html}
                        height="600px"
                        theme={aura}
                        extensions={[javascript({ jsx: true })]}
                        onChange={(value, viewUpdate) => {
                          console.log('value:', value);
                          setHtml(value)
                        }}
                      />

                    </div>
                  </div>
                  {/* ************************** */}
                  {/* CSS */}
                  <div className='flex justify-start items-start flex-col w-full bg-gray-700 h-full border-2 border-white-900'>
                    {/* header htmltag*/}
                    <div className='flex justify-between items-center w-full py-2 px-2 border-2 border-gray-300'>

                      <div className='left flex gap-2 items-center px-2 bg-gray-600 rounded'>
                        <IoLogoCss3 className='text-blue-500' />
                        <p className='text-white'>CSS</p>
                      </div>

                      <div className='left flex gap-2 items-center'>
                        <IoSettings className='text-white' />
                        <IoIosArrowDown className='text-white' />
                      </div>
                    </div>
                    {/* codde written */}
                    <div className='py-4 px-4 w-full'>
                      {/* code mirror */}
                      <CodeMirror
                        value={css}
                        height="600px"
                        theme={aura}
                        extensions={[javascript({ jsx: true })]}
                        onChange={(value, viewUpdate) => {
                          console.log('value:', value);
                          setCss(value)
                        }}
                      />

                    </div>
                  </div>
                  {/* ************************** */}
                  {/* JAVASCRIPT  */}
                  <div className='flex justify-start items-start flex-col w-full bg-gray-700 h-full border-2 border-white-900'>
                    {/* header htmltag*/}
                    <div className='flex justify-between items-center w-full py-2 px-2 border-2 border-gray-300'>

                      <div className='left flex gap-2 items-center px-2 bg-gray-600 rounded'>
                        <TbBrandJavascript className='text-yellow-500' />
                        <p className='text-white'>JS</p>
                      </div>

                      <div className='left flex gap-2 items-center'>
                        <IoSettings className='text-white' />
                        <IoIosArrowDown className='text-white' />
                      </div>
                    </div>
                    {/* codde written */}
                    <div className='py-2 px-4 w-full'>
                      {/* code mirror */}
                      <CodeMirror
                        value={js}
                        height="600px"
                        theme={aura}
                        extensions={[javascript({ jsx: true })]}
                        onChange={(value, viewUpdate) => {
                          console.log('value:', value);
                          setJs(value)
                        }}
                      />

                    </div>
                  </div>
                  {/* ************************** */}

                </SplitPane>


              </div>
            {/* ***************codinf Plate********************** */}


              {/* result bottom area */}
              <div className='w-full h-full bg-red-400'>
                <iframe
                  title='Result'
                  srcDoc={output}
                  style={{width : "100%" , height :"100%"}}
                 
                />
              </div>
 {/* **************result bottom*********************** */}
            </SplitPane>
          </div>

        </div>
        {/* ************************************* */}
      </div>
    </>
  );
}

export default ProjectsCreate;
