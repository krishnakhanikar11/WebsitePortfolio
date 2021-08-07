import Link from 'next/link';
import ProjectCard from './components/ProjectCard';

import {useState} from 'react';


const data = [
    {
    gitLink:'https://github.com/krishnakhanikar11/Note-Taking-App',
    projectLink:'#',
    projectTitle:'Note taking app using React and Hooks',
    projectDesc:'Building a note taking app with a custom features using React hooks. Styled with pure CSS. ',
    toolOne:'React.js',
    toolTwo:'HTML',
    toolThree:'CSS',
    toolFour:'Hooks'},

    {gitLink:'https://github.com/krishnakhanikar11/Netflix-Clone',
    projectLink:'https://netflix-cloneind.herokuapp.com/',
    projectTitle:'Netflix Landing page clone using HTML CSS JS',
    projectDesc:'Netflix Landing page clone built with fully responsive across various devices with custom Table.',
    toolOne:'HTML',
    toolTwo:'CSS',
    toolThree:'JS',
    toolFour:''},

    {gitLink:'https://github.com/krishnakhanikar11/Memory-Flash-Card-',
    projectLink:'#',
    projectTitle:'Memory Flash Card GUI using Python',
    projectDesc:"Memory Flash Card using Python. It is the easiest way to master what you're learning.",
    toolOne:'Python',
    toolTwo:'Firebase',
    toolThree:'NextJS',
    toolFour:''},

    {gitLink:'https://github.com/krishnakhanikar11/firstwebsite',
    projectLink:'https://dolla-banking.herokuapp.com/',
    projectTitle:'Huddle Landing Page using HTML & CSS',
    projectDesc:'Huddle re-imagines the way we build communities. You have a voice, but so does your audience.',
    toolOne:'HTML',
    toolTwo:'CSS',
    toolThree:'Bootstrap',
    toolFour:''},

    {gitLink:'https://github.com/krishnakhanikar11/Workout-tracker-',
    projectLink:'#',
    projectTitle:'Workout Tracker using Natural Language/Google sheets',
    projectDesc:'Track all your custom workout plans. Build using with the help of NL & Google sheets.',
    toolOne:'Python',
    toolTwo:'Natural Language',
    toolThree:'API',
    toolFour:''},

    {gitLink:'https://github.com/krishnakhanikar11/dolla',
    projectLink:'https://dol11.herokuapp.com/',
    projectTitle:'DOLLA Virtual Banking landing Page',
    projectDesc:'Building a custom site for a random personal Project using HTML, CSS and bootstrap. ',
    toolOne:'HTML',
    toolTwo:'CSS',
    toolThree:'Bootstrap',
    toolFour:''},

    {gitLink:'https://github.com/krishnakhanikar11/To-Do-WebApp',
    projectLink:'#',
    projectTitle:'TO-DO web app build with React',
    projectDesc:'Plan, and collaborate on tasks and projects with To-do web app across multiple devices',
    toolOne:'HTML',
    toolTwo:'CSS',
    toolThree:'React.js',
    toolFour:''},

    {gitLink:'https://github.com/krishnakhanikar11/Stock-Trading-News-Alert',
    projectLink:'#',
    projectTitle:'Stock Trading News alert using Python',
    projectDesc:'Building a custom multisite compatible WordPress plugin to build global search with Algolia',
    toolOne:'Python',
    toolTwo:'API',
    toolThree:'Twillio',
    toolFour:''},

    
]

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
