import Fade from 'react-reveal/Fade';
import Skill from './components/Skill'
import Image from 'next/image'




const skills=[
    {
        skill: 'JavaScript (ES6+)'
    },
    {
        skill: 'React.js'
    },
    {
        skill: 'UI/UX'
    },
    {
        skill: 'HTML/Tailwind CSS'
    },
    {
        skill: 'Python'
    },
    {
        skill: 'Next.js'
    }
]

function AboutMe() {
    
    return (
        <div className='flex justify-center  md:h-screen h-[100%] bg-blue-x  w-full ' id='aboutMe'  >
            
                <div className='flex pb-3 items-center px-6 pt-5 md:pl-56 md:pr-56 md:pt-10'>
                    
                    <div className='flex flex-col md:w-[70%]'>
                        <Fade Top delay={500}>
                        <div className='flex flex-grow align-center items-center w-full  '>
                            <h5 className='text-lightest-slate font-mainText text-[1.30rem] md:text-3xl font-medium'><span className='text-green-x font-greenText text-[1.05rem] md:text-xl'>01. </span>About me</h5>
                            <div className=' w-40 md:w-60 h-[0.25px] border bg-lightest-slate ml-6'></div>
                        </div>
                        </Fade>
                        <Fade Top delay={500}>
                        <div className=' w-full md:w-[80%]'>
                            <p className='para pb-5 pt-10'>Hello! My name is Krishna, Front-developer and Designer based in New Delhi. My interest in Web development started when I got to know about the inspect element where we can change anything on the website with just a click. This taught me the endless possibilities of what we can build on the internet.</p>
                            <p className='para pb-5'>Fast-forward to today, and I&apos;ve had the privilege of working at a <a href='https://buildnetic.com/' target='_blank' className='text-green-x' rel="noreferrer">consultancy agency,</a> and my own <a href='#' target='_blank' rel="noreferrer" className='text-green-x '>Start-up,</a>.Currently I am Pre-final student, pursuing my majors in Electrical Engineering from  <a className='text-green-x' href='https://vit.ac.in/' target='_blank' rel="noreferrer">VIT, Vellore</a></p>
                            <p className='para pb-5'>Here are a few technologies I&apos;ve been working with recently:</p>
                        </div>
                        <div className=' w-full md:w-1/2 grid grid-flow-col grid-cols-2 grid-rows-3 gap-4'> {skills.map((item) => (
                            <Skill 
                            key={item.skill}
                            skill={item.skill}/> ) )} </div>
                            </Fade>
                    </div>
                    
                    <Fade Top delay={500}>
                    <div className='hidden md:filter  md:h-[40%] md:w-[30%] md:flex items-start hover:opacity-70'>
                    
                        <Image className='rounded-xl relative hover:transform hover:translate-y-[-1%]' src='/me.png ' width="400" height="400" />
                        
                    </div>
                    </Fade>
                   
                   
                </div>
            
        </div>
        
    )
}

export default AboutMe
