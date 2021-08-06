import { ExternalLinkIcon } from "@heroicons/react/outline";

function ArchivesList({year,title,buildWith,link}) {
    return (
        <tbody className="bg-blue-x  hover:bg-light-blue">
            <tr >
                <td className="px-2 md:px-6 md:py-4 whitespace-no-wrap ">
                    <div className="flex items-center">
                        <div>
                            <div className="font-greenText text-green-x">{year}</div>
                        </div>
                    </div>
                </td>
                <td className="px-2 md:px-6 md:py-4 p-3 whitespace-no-wrap">
                    <div className=" font-medium text-[1.20rem] font-mainText text-lightest-slate">{title}</div>
                </td>
                <div className='hidden md:inline-block'><td className="px-6 md:py-4 md:whitespace-no-wrap  text-slate font-greenText  text-sm leading-5">{buildWith}</td></div>
                
                <td className="px-2 md:px-6 md:py-4 whitespace-no-wrap "><a href={link}>
                <ExternalLinkIcon className='text-slate w-[25px] hover:text-green-x  '/></a></td>        
            </tr>
        </tbody>
    )
}

export default ArchivesList
