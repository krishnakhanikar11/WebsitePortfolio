import Link from 'next/link';
import Particles from 'react-particles-js';




function notFound() {
    return (

        <div className='flex flex-col h-screen w-full bg-blue-x justify-center items-center'>
            

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
            <h1 className='font-extrabold font-greenText text-[8rem] md:text-[12rem] text-green-x '>404</h1>
            <p className='font-greenText text-slate text-xl '>Oops! Something went wrong.</p>
            <div className=" pt-8 relative ">
                <Link href='/'>
                <a className="main-btn">Go Home</a>  
                </Link> 
            </div>
       
            
        </div>
       





    )
}

export default notFound
