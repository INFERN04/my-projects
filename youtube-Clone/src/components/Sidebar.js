import React from 'react'
import { AiFillHome } from "react-icons/ai";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { MdVideoLibrary } from "react-icons/md";
import { LuHistory } from "react-icons/lu";
import { MdOutlineWatchLater } from "react-icons/md";
import { BiLike } from "react-icons/bi";


export default function Sidebar() {
  
   const mainLinks = [
       {
        icon: <AiFillHome className='text-xl'/>,
        name: 'Home'
       },
       {
        icon: <SiYoutubeshorts className='text-xl' />,
        name: 'Shorts'
       },
       {
        icon: <MdSubscriptions className='text-xl'/>,
        name: 'Subscriptions'
       }
   ];

   const otherLinks = [
       {
        icon: <MdVideoLibrary className='text-xl'/>,
        name: 'Library'
       },
       {
        icon: <LuHistory className='text-xl'/>,
        name: 'History'
       },
       {
        icon: <MdOutlineWatchLater className='text-xl'/>,
        name: 'Watch Later'
       },
       {
        icon: <BiLike className='text-xl'/>,
        name: 'Liked Videos'
       }
   ]



  return (
    <div className='w-2/12 bg-[#212121] p-2 pr-5 overflow-auto pb-8 h-screen'>
      <ul className='flex flex-col border-b-2 border-gray-700'>
        {mainLinks.map(
          ({icon,name}) => {
            return(
              <li key={name} className= {`pl-5 py-3 hover:bg-zinc-600 rounded-xl`}>
                 <a href='#' className='flex items-center gap-5'>
                  {icon}
                  <span className='text-sm tracking-wider'>{name}</span>
                 </a>
              </li>
            )
          }
        )}
      </ul> 
      <ul className='flex flex-col border-b-1'>
        {otherLinks.map(
          ({icon,name}) => {
            return(
              <li key={name} className= {`pl-5 py-3 hover:bg-zinc-600 rounded-xl`}>
                 <a href='#' className='flex items-center gap-5'>
                  {icon}
                  <span className='text-sm tracking-wider'>{name}</span>
                 </a>
              </li>
            )
          }
        )}
      </ul> 
    </div>
  )
}
