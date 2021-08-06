import {useState} from 'react';
import Fade from 'react-reveal/Fade';

function Experience() {

    const [toggleState,setToggleState] = useState(1);
     
    const toggleTab = (index) => {
        setToggleState(index);
    }


    return (
        <div className='flex items-center justify-center h-screen bg-blue-x  w-full ' id='experience'>
            <div className='px-6 pt-5 md:pl-56 md:pr-56 md:pt-10 '>
                <div className='flex  align-center items-center w-full  '>
                    <h5 className='text-lightest-slate font-mainText text-xl md:text-3xl font-medium'><span className='text-green-x font-greenText text-[1.05rem] md:text-xl'>02. </span>Where I’ve Worked</h5>
                    <div className=' w-[32%] md:w-60 h-[0.25px] border bg-lightest-slate ml-6'></div>
                </div>

                <div className='block md:flex pt-3 md:p-12 mt-5'>
                    <div className='w-full md:w-[30%] '>
                        <div className='border-b-2 md:border-l-2 border-navy flex md:flex-col md:border-b-0'>
                            <a onClick={() => toggleTab(1)} className={toggleState === 1 ? 'tab-item tab-active' : 'tab-item'}>Deskcount</a>
                            <a onClick={() => toggleTab(2)} className={toggleState === 2 ? 'tab-item tab-active' : 'tab-item'}>PayCrunch</a>
                            <a onClick={() => toggleTab(3)} className={toggleState === 3 ? 'tab-item tab-active' : 'tab-item'}>Buildnetic</a>
                        </div>
                        
                    </div>

                    <div className='flex flex-col w-full md:w-[70%] p-3 pl-5 '>

                    <Fade Top delay={300}>
                        <div className={toggleState === 1 ? 'content-active' : 'hidden'}>
                            <h3 className='font-mainText text-lightest-slate text-[1.5rem]'>Developer<a href='https://deskcount.com/' target="_blank" className='text-green-x'> @ Deskcount</a></h3>
                            <p className='font-greenText tracking-tight text-slate text-sm'>Nov 2020 - August 2021</p>

                            <div className='mt-3 flex items-start'>
                            <span className='text-green-x font-greenText text-xl font-light mr-2' >▹</span><h3 className='font-mainText text-slate tracking-wide font-thin text-[1.1rem] md:text-xl'>Developed website and improved user experience, using Javascript, HTML5, AND CSS.</h3>
                            </div>
                            <div className='mt-3 flex items-start'>
                            <span className='text-green-x font-greenText text-xl font-light mr-2' >▹</span><h3 className='font-mainText text-slate tracking-wide font-thin text-[1.1rem] md:text-xl'>Designed the UI/UX of the Deskcount's app which increased the overall downloads of the app.</h3>
                            </div>
                            <div className='mt-3 flex items-start'>
                            <span className='text-green-x font-greenText text-xl font-light mr-2' >▹</span><h3 className='font-mainText text-slate tracking-wide font-thin text-[1.1rem] md:text-xl'>Through A/B testing of different components and combination improved customer conversion by 12%.</h3>
                            </div>
                        </div>
                        </Fade>

                        <Fade Top delay={300}>
                        <div className={toggleState === 2 ? 'content-active' : 'hidden'}>
                            <h3 className='font-mainText text-lightest-slate text-[1.5rem]'>Product Designer<a href='https://paycrunch.in/' className='text-green-x' target='_blank'> @ PayCrunch</a></h3>
                            <p className='font-greenText tracking-tight text-slate text-sm'>October 2020 - Present</p>

                            <div className='mt-3 flex items-start'>
                            <span className='text-green-x font-greenText text-xl font-light mr-2' >▹</span><h3 className='font-mainText text-slate tracking-wide font-thin text-[1.1rem] md:text-xl'>As the Lead designer, I took responsibility from strategy to the design of Paycrunch App and Website.</h3>
                            </div>
                            <div className='mt-3 flex items-start'>
                            <span className='text-green-x font-greenText text-xl font-light mr-2' >▹</span><h3 className='font-mainText text-slate tracking-wide font-thin text-[1.1rem] md:text-xl'>Spearheaded all design elements, templates, and brand consistency.</h3>
                            </div>
                            <div className='mt-3 flex items-start'>
                            <span className='text-green-x font-greenText text-xl font-light mr-2' >▹</span><h3 className='font-mainText text-slate tracking-wide font-thin text-[1.1rem] md:text-xl'>Followed lean startup approach: MVP and rapid iterations.</h3>
                            </div>
                        </div>
                        </Fade>

                        <Fade Top delay={300}>
                        <div className={toggleState === 3 ? 'content-active' : 'hidden'}>
                            <h3 className='font-mainText text-lightest-slate text-[1.5rem]'>Product Developer<a href='https://buildnetic.com/'  className='text-green-x' target='_blank'> @ Buildnetic</a></h3>
                            <p className='font-greenText tracking-tight text-slate text-sm'>June 2020 - Present</p>

                            <div className='mt-3 flex items-start'>
                            <span className='text-green-x font-greenText text-xl font-light mr-2' >▹</span><h3 className='font-mainText text-slate tracking-wide font-thin text-[1.1rem] md:text-xl'>Worked with companies like Marks & Spencer and Acuver to review current products and provide design solutions to solve user's needs and business challenges.</h3>
                            </div>
                            <div className='mt-3 flex items-start'>
                            <span className='text-green-x font-greenText text-xl font-light mr-2' >▹</span><h3 className='font-mainText text-slate tracking-wide font-thin text-[1.1rem] md:text-xl'>Designed a desktop dashboard for warehouse management for an internal client, incorporating user research and usability test findings.</h3>
                            </div>
                            <div className='mt-3 flex items-start'>
                            <span className='text-green-x font-greenText text-xl font-light mr-2' >▹</span><h3 className='font-mainText text-slate tracking-wide font-thin text-[1.1rem] md:text-xl'>Led Product design/development for 5+ Companies.</h3>
                            </div>
                        </div>
                        </Fade>
 
                    </div>

                </div>
                
            </div>
            
        </div>
    )
}

export default Experience
