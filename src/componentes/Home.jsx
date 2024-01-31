

import Proyects from './Proyects'
import Contacts from './Contact'
import Footer from './Footer'
import Skill from './Skill'
import Navbar from './Navbar'
import Profile from './Profile'

function Home() {



  return (
    <div >
      <div className='bg-[#eff6e0] h-auto'>
        <Navbar/>    
        <Profile/>
      </div> 
      <div>
       <Proyects/>
      </div>
        <Skill/>
      <div>
      <Contacts/>
      </div>
      <Footer/> 
    </div>
  )
}

export default Home
