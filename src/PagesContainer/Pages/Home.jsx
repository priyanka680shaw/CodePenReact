
import LeftSideBar from '../Components/LeftSideBar'
import RightSideBar from '../Components/RightSideBar'
const Home = () => {
  return (
    <>
    {/* left sideBar */}
    <div className='flex min-h-screen overflow-hidden'>
            <LeftSideBar/>
     
    {/* Right Sidde Bar */}
       
            <RightSideBar/>
       
    </div>
        
    </>
  )
}

export default Home


