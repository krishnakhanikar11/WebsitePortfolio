
import ArchivesList from './components/ArchivesList'
import Foot from './components/comps/Foot'

const ArchiveProject = [
    {
      year: '2021',
      title: 'Password Manager',
      madeWith: 'Python · GUI',
      Link: 'https://github.com/krishnakhanikar11/Password-Manager'
    },
    {
        year: '2021',
        title: 'Pomodor Web app',
        madeWith: 'Python · GUI',
        Link: 'https://github.com/krishnakhanikar11/Pomodor-Web-app'
      },
      {
        year: '2021',
        title: 'Crossy Road Game',
        madeWith: 'Python · GUI',
        Link: 'https://github.com/krishnakhanikar11/Crossy-Road-Python-Game'
      },
      {
          year: '2021',
          title: 'Viggify Gaming Landing Page',
          madeWith: 'CSS · Javascript· HTML',
          Link: 'https://github.com/krishnakhanikar11/Viggify-gaming'
        },
        {
            year: '2021',
            title: 'Weather Web app',
            madeWith: 'Node · Javascript',
            Link: 'https://github.com/krishnakhanikar11/Simple-GetWeather'
          },
          {
              year: '2021',
              title: 'Drum stick Musical web app',
              madeWith: 'CSS · Javascript· HTML',
              Link: 'https://github.com/krishnakhanikar11/DrumStick-webApp'
            },
            {
                year: '2021',
                title: 'Arcade Snake Game',
                madeWith: 'Python · GUI',
                Link: 'https://github.com/krishnakhanikar11/Classic-Snake-Game'
              },
              {
                  year: '2021',
                  title: 'Classic Ping-pong Arcade',
                  madeWith: 'Python · GUI',
                  Link: 'https://github.com/krishnakhanikar11/Classic---Ping-pong-Arcade-Game'
                },
                {
                    year: '2020',
                    title: 'Dice Throw game',
                    madeWith: 'HTML · Javascript',
                    Link: 'https://github.com/krishnakhanikar11/diceRandomGames'
                  },
                  {
                      year: '2020',
                      title: 'Hangman Classic Game',
                      madeWith: 'Python',
                      Link: 'https://github.com/krishnakhanikar11/Hangman-Game'
                    },
   
  ]

function Archives() {
    return (
        <div className='w-full h-[100%] bg-blue-x'>
            <div className='px-6 pt-10 pb-10 md:pl-56 md:pr-56'>
                <h1 className='font-mainText pb-2 pt-4 text-5xl md:text-6xl text-lightest-slate font-medium md:pb-2 md:pt-6'>Archive</h1>
                <h3 className='font-greenText text-sm md:text-[1rem]  text-green-x font-medium'>A big list
                 of things I’ve worked on</h3>
                 
            
                
                <div className="align-middle inline-block min-w-full   bg-blue-x pt-12 md:pt-24 pb-24 md:pb-44 ">
                    <table className="w-full">
                        <thead>
                            <tr >
                                <th className="list-head">Year</th>
                                <th className="list-head">Title</th>
                                <div className='hidden md:inline-block'><th className="list-head">Build with</th></div>
                                <th className="list-head">Links</th> 
                            </tr>
                        </thead>
                        {ArchiveProject.map((item) => (
                            <ArchivesList 
                                key ={item.title}
                                year={item.year}
                                title={item.title}
                                buildWith ={item.madeWith}
                                link={item.Link}
                            />
                        ))}
                    </table>
                
                </div>
            </div>
            <Foot />
      
            </div>
            
        
    )
}

export default Archives
