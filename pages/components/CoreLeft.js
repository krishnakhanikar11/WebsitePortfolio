import { ExternalLinkIcon } from "@heroicons/react/outline";
import Fade from 'react-reveal/Fade';
import Image from 'next/image'

function CoreLeft({title,desc,src,link,linkExt,tool1,tool2,tool3,tool4}) {
    return (
        <Fade Top delay={500}>
        <div className='flex pt-4 md:pb-28 pb-0 2xl:pb-56 2xl:pt-28'>
        <div className='flex flex-col  right-[1%] md:text-right  w-full md:w-[55%] z-10'>
        <div className='bg-green-tint rounded-sm shadow-inner md:shadow-none md:bg-transparent relative md:left-[78%] p-4 md:p-0'>
            <h5 className='font-greenText text-xs md:text-sm  text-green-x font-medium'>Featured Project</h5>
            <h3 className='font-mainText text-3xl text-lightest-slate pt-3 pb-3 font-medium '>{title}</h3>
            <div className='rounded-sm md:shadow-xl md:bg-navy bg-transparent w-full  z-10 md:p-5'>
                <p className='para'>{desc}
                </p>
            </div>
            <div className='flex md:justify-end md:pb-5 md:pt-5 pb-1 pt-2 tracking-tight font-greenText  text-sm md:text-sm text-slate space-x-5 '>
                <p>{tool1}</p>
                  <p>{tool2}</p>
                  <p>{tool3}</p>
                  <p>{tool4}</p>
            </div>
            <div className='flex md:justify-end space-x-5 pt-2 md:pt-0'>
                <div>
                    <a href={link}>
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
                </div>
                <a href={linkExt}>
                    <ExternalLinkIcon className='text-lightest-slate w-[25px] hover:text-green-x  '/>
                </a>
            </div>
        </div>
        </div>
         <div className="md:ml-[5] w-[0%]  md:w-[37%]  z-0 absolute md:left-[17%] ">
            <Image className=' rounded' src={src} alt="" width={530} height={315} />
         </div>
      </div>
      </Fade>
    
    )
}

export default CoreLeft
