import CoreRight from './components/CoreRight'
import CoreLeft from './components/CoreLeft'
import Fade from 'react-reveal/Fade';

function CoreProjects() {
return (
<div className='flex w-full items-center h-[100%] bg-blue-x justify-center' id='work'>
      

   <div className='md:pb-24 pb-8  px-6 pt-5 md:pl-56 md:pr-56 md:pt-10 relative'>
      <div className='flex align-center items-center w-full pb-6 md:pb-12   '>
         <h5 className='text-lightest-slate font-mainText text-[1.30rem] md:text-3xl font-medium'><span className='text-green-x font-greenText text-[1.05rem] md:text-xl '>03. </span>Some Things I’ve Built</h5>
         <div className=' w-[20%] md:w-60 h-[0.25px] border bg-lightest-slate ml-6'></div>
      </div>
     

      <CoreRight
        title='Buildnetic'
        desc="The  designed and developed official website of Deskcount using HTML, CSS and JS. The final outcome increased the overall traffic on the website."
        src='/buildnetic.png'
        link='#'
        linkExt ='https://deskcount.com/'
        tool1='HTML'
        tool2='CSS'
        tool3='JavaScript'
       />

        <CoreLeft
        title='Virgo'
        desc='VIRGO is a user-friendly IT based technical solution for restaurants,
         and other public places to be used as a digital menu
         and interactive tool to order food and drinks.'
        src='/Virgo.png'
        link='#'
        linkExt ='/virgoCase.pdf'
        tool1='Figma'
        tool2='Illustrator'
        
       />

{/* <CoreLeft
        title='OctoProfile'
        desc='A nicer look at your GitHub profile and repository stats
                     with data visualizations of your top languages and stars. Sort through your top repos by number of stars, forks, and size.'
        src='https://cdn.vox-cdn.com/thumbor/w-IFN0FWpN4BGfhZaV9EYqs4nLo=/51x0:977x617/1200x800/filters:focal(51x0:977x617)/cdn.vox-cdn.com/uploads/chorus_image/image/50017015/Screen_Shot_2016-07-04_at_12.37.15_PM.0.0.png'
        link='#'
        linkExt ='#'
       /> */}
        <CoreRight
        title='Facebook Clone'
        desc="A clone of Facebook's web app built using Nextjs. Integrated the user authentication for Facebook login using NextAuth along with hosting the database in Firebase.   "
        src='/fb.png'
        link='#'
        linkExt ='#'
        tool1='HTMl'
        tool2='Tailwind CSS'
        tool3='firebase'
        tool4='Next.js'
       />


      
   </div>
</div>
)
}
export default CoreProjects
