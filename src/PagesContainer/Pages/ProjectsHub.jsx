
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
const ProjectsHub = () => {
  const projects = useSelector((state) => state?.projectsReducer?.projects
  )

  const [filtered , setFilter] = useState(null);
//using tareniry operator iif true so 1irst wala else "";

const serachTerm = useSelector((state)=>state.searchReducer?.searchTerms ? state.searchReducer?.searchTerms : "")
  useEffect(()=>{
    if(serachTerm.length>0){
     setFilter(
      projects?.filter((project)=>{
        const lowerCaseItem = project?.title.toLowerCase();
        return serachTerm.split("").every((letter)=>lowerCaseItem.includes(letter));
      })
     )
    }
    else{
      setFilter(null)
    }
  } , [serachTerm]);

  //console.log("projectsPage", projects)
  return (
    <>
      <div className='w-full py-6 flex justify-center items-center gap-6 flex-wrap mt-4'>
        {
          filtered ? <>{filtered && filtered.map((project, idx) => {
          return (
            <ProjectCard key={project.id} index={idx} project={project} />
          )
        })}</>:<>{projects && projects.map((project, idx) => {
          return (
            <ProjectCard key={project.id} index={idx} project={project} />
          )
        })}</>
        }
      </div>
    </>
  )
}

export default ProjectsHub
// project Card
export function ProjectCard({ index, project }) {
  const user = useSelector((state) => state.userReducer?.user);
  //const projects = useSelector((state) => state?.projectsReducer?.projects)
 // console.log("pprijjectHub", project)
  return (
    <>
      <motion.div index={index} className="w-full cursor-pointer md:w-[450px] h-[375px] bg-secondary rounded-md p-4 flex flex-col items-center justify-center gap-4">
        <div className='w-full h-full bg-primary roundedd-md overflow-hidden'>
          <iframe
            title='Result'
            srcDoc={project.output}
            style={{ width: "100%", height: "100%", border: "none" }}

          />
        </div>
        <div className="w-full flex items-center justify-start gap-3 ">
          {
            project.user?.photoURL ? (
              <>
                <motion.img src={project.user?.photoURL} alt={user?.displayName} referrerPolicy='no-refer' className='w-[40px]   rounded-r-2xl object-cover' />
                <p className="text-white text-2xl">{project.user?.displayName}</p>
              </>
            ) : <>
              <p className=" whitespace-nowrap  bg-emerald-500 px-6 py-2 font-bold hover:bg-emerald-700 text-white  cuesor-pointer rounded">{project.user?.email[0]}</p>
              <p className="text-white text-2xl">{project.user?.email}</p>
            </>
          }
        </div>
        <div>
          <p className='text-white text-2xl font-semibold'>{project.title}</p>
          </div>
      </motion.div>
    </>
  )
}