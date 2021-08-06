import Head from 'next/head'
import Introduction from './Introduction'
import AboutMe from './AboutMe'
import CoreProjects from './CoreProjects'
import Projects from './Projects'
import Contact from './Contact'
import Foot from './components/comps/Foot'
import Experience from './Experience'



// if (typeof window !== 'undefined') {
//   Scrollbar.init(document.querySelector('#my-scrollbar'));
// }

// id='my-scrollbar'


export default function Home() {

  

  return (
  
    
    <div  >
      <Head>
        <title>Krishna Khanikar | Portfolio</title>
      </Head>
      
      <div  >
      <main className=' max-h-screen w-full' >
        
        <Introduction 
          id='intro'
        />
        <AboutMe 
          
        />
        <Experience 
          id='exp'
        />
        <CoreProjects 
          id='core'
        />
        <Projects 
          id='project'
        />
        <Contact 
          id='contact'
        />
        <Foot />

      </main>
      </div>
      

    </div>
  )
}
