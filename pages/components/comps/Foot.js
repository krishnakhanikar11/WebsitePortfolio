function Foot() {
    return (
        <footer>
            <div className='bg-blue-x text-center pb-5 h-[100%] w-full'>
                        <div className='flex items-center justify-center flex-col  space-y-3 md:space-y-5 text-center'>
                        <div className='md:hidden grid grid-cols-3 grid-rows-1 w-[50%] md:w-[10%] place-items-center'>
                                <div>
                                    <a href="https://www.instagram.com/krishna.design/?hl=en" rel="noreferrer" target="_blank">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            role="img"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            
                                            strokeLinejoin="round"
                                            className="feather feather-instagram text-lightest-slate w-5 hover:text-green-x ">
                                            <title>Instagram</title>
                                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                        </svg>
                                    </a>
                                </div>

                                <div>
                                    <a href="https://github.com/krishnakhanikar11" rel="noreferrer" target="_blank">
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

                                <div>
                                    <a href="https://www.linkedin.com/in/krishnakhanikar/" rel="noreferrer" target="_blank">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        role="img"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-linkedin  text-lightest-slate w-5 hover:text-green-x  ">
                                        <title>LinkedIn</title>
                                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                        <rect x="2" y="9" width="4" height="12"></rect>
                                        <circle cx="4" cy="4" r="2"></circle>
                                    </svg>
                                    </a>
                                </div>

                                </div>
                                <span className=" text-center font-greenText text-gray-600 md:text-sm text-xs">Developed by Krishna Khanikar © {new Date().getFullYear()}</span> 
                        </div>
                    </div>
                
            
        </footer>
    )
}

export default Foot
