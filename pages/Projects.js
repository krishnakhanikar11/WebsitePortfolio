import Link from 'next/link';
import ProjectCard from './components/ProjectCard';
import data from './components/Data';
import {useState} from 'react';




function Projects() {

   const [showCard,setShowCard] = useState(6)
   const [showText,setShowText] = useState('Show More')
    

    const handleClick = (e) => {
        e.preventDefault();

        if (showCard ===6){
            setShowCard((prevValue) => prevValue +5);
        }
           
        setShowText("Show less")
    };

    const doubleClick = (e) => {
        e.preventDefault();
        
        setShowCard(6)
        setShowText("Show More")
    }
    
    return (
       <div className='h-full bg-blue-x  w-full '>
            
            <div className=' px-6 pt-10 pb-10 md:pl-56 md:pr-56 '>

                <div className='flex justify-center items-center '>
                    <div className='flex flex-col items-center space-y-1 p-5 pb-8'>
                        <h3 className='text-lightest-slate font-mainText text-2xl md:text-3xl items-center font-medium'>Other Noteworthy Projects</h3>
                        <h1  className='text-green-x font-greenText text-sm'>
                            <Link href='../Archives'><a>View Archive</a></Link>
                        </h1>
                    </div>
                </div>
                
                <div className='grid justify-items-center grid-row-1 md:grid-cols-3 md:grid-rows-auto gap-4 '>
                    {data.slice(0,showCard).map((item) => (
                        <ProjectCard 
                            key={item.projectLink}
                            projectLink={item.projectLink}
                            projectTitle={item.projectTitle}
                            projectDesc={item.projectDesc}
                            toolOne={item.toolOne}
                            toolTwo={item.toolTwo}
                            toolThree={item.toolThree}
                            toolFour= {item.toolFour}
                        />
                    ))


                    }
                </div>
                
                <div className="flex items-center  pt-8 justify-center"> <a href='#' onClick={showCard===6 ? handleClick : doubleClick} className="main-btn">{showText}</a> </div>
                
                
            </div>

       </div>
    )
}

export default Projects
