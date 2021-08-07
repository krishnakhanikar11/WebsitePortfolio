import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import Link from 'next/link';
import Image from 'next/image'

import {
  MenuIcon,
  XIcon,
} from '@heroicons/react/outline'
import Button from '../Button'
import {useState} from 'react';



const solutions = [
  {
    name: 'About',
    number: '01.',
    
    href: '#aboutMe'
    
  },
  {
    name: 'Experience',
    number: '02.',
    href: '#experience'
    
  },

  { name: 'Work',
   number: '03.',
   href: '#work'},
 
  {
    name: 'Contact',
    number: '04.',
    href: '#contact'
  }
]



function Header() {

    const [navbar,setNavbar]=useState(false)

    const changeBackground = () => {
        if(window.scrollY>=10){
            setNavbar(true);
        }else{
            setNavbar(false);
        }
    }

    if (typeof window !== "undefined") {
        window.addEventListener('scroll', changeBackground);
      }
    
  return (
    <Popover className={ navbar ? 'navbarSD' : 'navbarND'}>
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-1 ">
            <div className="flex justify-between items-center  py-4 md:justify-start md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <Link href='/'>
                <a >
                  <span className="sr-only">Krishna Khanikar</span>
                  <Image

                    className="h-10 w-auto sm:h-12"
                    src="/logo_krishna.png"
                    alt=""
                    height={48}
                    width={48}
            
                  />
                </a>
                </Link>
              </div>

              <div className="mr-2 -my-2 md:hidden ">
                <Popover.Button className="bg-transparent rounded-md p-2 inline-flex items-center justify-center text-green-x   focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-x">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>


              <Popover.Group as="nav" className="hidden md:flex space-x-10 ">
                {solutions.map((item) => (
                          <Link href={item.href} key={item.name}>
                            <a
                            className="m-3 p-3 flex items-center"
                            ><span className="ml-3 text-xs font-normal font-greenText text-green-x">{item.number}</span>
                            <span className="ml-3 text-sm font-normal font-greenText text-light-slate hover:text-green-x">{item.name}</span>
                            </a>
                            </Link>
                    ))}
              </Popover.Group>

              <Button 
                  title = "Resume"
                  url = "/ResumeKrish.pdf"

              />

            </div>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              static
              className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-light-blue ">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <Image
                        className="h-8 w-auto"
                        src="/logo_krishna.png"
                        alt="Workflow"
                        height={32}
                        width={32}
                        
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-transparent rounded-md p-2 inline-flex items-center justify-center text-green-x   focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-x">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <nav className="grid gap-y-8">
                      {solutions.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="-m-3 p-3 flex items-center "
                        >
                          <span className="ml-3 text-sm font-greenText font-medium text-light-slate hover:text-green-x">{item.name}</span>
                        </a>
                        
                      ))}
                      <div className="flex items-center">
                <a
                  href='#'
                  className="whitespace-nowrap p-2 mx-3  items-center justify-center font-greenText border border-green-x rounded-md shadow-sm text-sm font-normal text-green-x bg-transparent hover:bg-green-tint"
                >
                  Resume
                </a>
                </div>
                  
                    </nav>
                 </div>
                


                 
                </div>
                
              </div>
              
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
    
  )
}


export default Header









