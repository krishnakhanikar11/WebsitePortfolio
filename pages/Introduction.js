import Particles from 'react-particles-js';
import Fade from 'react-reveal/Fade';
import Parallax from 'react-rellax'
import Image from 'next/image'


 function Introduction() { 
     return ( <div className=" flex h-screen bg-blue-x z-0 " >
     <div className='flex  justify-items-center  px-6 pt-20 md:pl-56 md:pt-20 z-5'>
       <Fade Top delay={500}>
            <div className='flex relative flex-col justify-items-center items-start  '>
                <h3 className='font-greenText text-sm md:text-base  text-green-x font-medium'>Hi, my name is</h3>
                <h1 className='font-mainText pb-2 pt-4 text-4xl md:text-7xl text-lightest-slate font-medium md:pb-2 md:pt-6'>Krishna Khanikar.</h1>
                <h1 className='font-mainText text-4xl leading-9 pb-3 md:text-7xl text-light-slate font-medium md:pb-4'>I build things for the web.</h1>
                <div className='flex sm:w-full md:w-[80%]'>
                    <p className='para'>I am a self taught Developer and Product designer with experience in creating digital interface. I mainly focus on telling stories visually through enjoyable and meaningful experience at<a className=' text-green-x'> Buildnetic.</a> </p>
                </div>
                <div className="flex items-center pt-8 relative"> <a rel="noreferrer" href='mailto:krishnakhanikarkhanikar.com' className="main-btn"> Get in Touch </a> </div>
               
            </div>
            <div className=' hidden xl:flex flex-col justify-self-start m-44 z-10'>
                <Parallax speed={-4}><Image src='/satellite4.svg' width={240} height={240} /></Parallax>
                
            </div>
            
        </Fade>
        </div>
        
    <div className=' absolute md:h-screen md:w-full z-[0]'>
        <Particles params={{
            "particles": {
                "number": {
                    "value": 160,
                    "density": {
                        "enable": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "speed": 4,
                        "size_min": 0.3
                    }
                },
                "line_linked": {
                    "enable": false
                },
                "move": {
                    "random": true,
                    "speed": 1,
                    "direction": "top",
                    "out_mode": "out"
                }
            },
            "interactivity": {
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "bubble"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "repulse"
                    }
                },
                "modes": {
                    "bubble": {
                        "distance": 250,
                        "duration": 2,
                        "size": 0,
                        "opacity": 0
                    },
                    "repulse": {
                        "distance": 400,
                        "duration": 4
                    }

                    
                }
            } 
        }} height='100vh' width='100%' />
    </div>
</div> ) } 

export default Introduction