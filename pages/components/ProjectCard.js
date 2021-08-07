
import { ExternalLinkIcon } from "@heroicons/react/outline";
import Fade from 'react-reveal/Fade';

function ProjectCard({gitLink,projectLink,projectTitle,projectDesc,toolOne,toolTwo,toolThree,toolFour}) {
    return (
        <Fade Top delay={200}>
        <div className='w-full cursor-pointer bg-navy  rounded-sm shadow-xl '>
                        <div className='flex pl-5 pr-5 items-center '>

                            <div className='flex w-1/2 float-left'>
                                
                                <svg xmlns="http://www.w3.org/2000/svg" 
                                    className="text-green-x w-12 " 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke="currentColor">
                                    <path 
                                        strokeLinecap="round" 
                                        strokeWidth="1" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                                        />
                                </svg>
                            </div>
                
                            <div className='flex w-1/2 justify-end space-x-3 items-center'>
                                <a href={gitLink}>
                                 <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    role="img"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-github text-lightest-slate w-5 hover:text-green-x ">
                                    <title>GitHub</title>
                                    
                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                </svg>
                                </a>
                                <a href={projectLink}>
                                <ExternalLinkIcon className='text-lightest-slate w-[25px] hover:text-green-x  '/></a>
                            </div>
                        
                        </div>
                            <div className='flex flex-col pl-5 pr-5 space-y-3 pb-5'>
                                <h5 className='hover:text-green-x font-mainText text-lightest-slate text-[21px] font-medium leading-6 tracking-wide cursor-pointer'>
                                <a href='#'>{projectTitle}</a></h5>
                                <p className='para'>
                                {projectDesc}</p>
                                <div className='inline-flex space-x-4  font-greenText text-xs text-slate pt-1 '>
                                    <p>{toolOne}</p>
                                    <p>{toolTwo}</p>
                                    <p>{toolThree}</p>
                                    <p>{toolFour}</p>
                                </div>
                            </div>
                    </div>
                    </Fade>
    )
}

export default ProjectCard
