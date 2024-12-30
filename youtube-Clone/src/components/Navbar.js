import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaYoutube } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { FaMicrophone } from "react-icons/fa6";
import { BiVideoPlus } from "react-icons/bi";
import { FaRegBell } from "react-icons/fa";
import { useLocation, useNavigate } from 'react-router-dom';
import { getSearchPageVideos } from '../store/reducers/getSearchPageVideos';
import { useAppDispatch, useAppSelector } from '../hooks/useApp';
import { changeSearchTerm, clearVideos } from '../features/youtube/youtubeSlice';
import { getHomePageVideos } from '../store/reducers/getHomePageVideos';


export default function Navbar() {

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const searchTerm = useAppSelector((state)=> state.youtubeApp.searchTerm);

  const handleSearch = ()=> {
    if(location.path !== '/search') navigate("/search");
    else{
       dispatch(clearVideos);
       dispatch(getHomePageVideos(false));
    }
  }





  return (
    <div className='flex justify-between px-14 h-14 items-center bg-[#212121] opacity-95 sticky'> 
      <div className='flex gap-8 items-center text-2xl text-white'>
        <div >
          <GiHamburgerMenu />
        </div>
        <div className='flex gap-2 items-center justify-center'>
           <FaYoutube className='text-2xl text-red-600'/>
           <span className='text-2xl'>Youtube</span>
        </div>
        </div>
        <div className='flex items-center justify-center gap-5'>
            <form onSubmit={(e)=>{
              e.preventDefault();
              handleSearch();
            }}>
                <div className='flex bg-zinc-900 items-center h-10 px-4 pr-0 rounded-3xl'>
                    <div className='flex gap-5 items-center pr-5'>
                        <input type='text' placeholder='search' className='w-96 bg-zinc-900 focus:outline-none border-none' value={searchTerm} onChange={e => dispatch(changeSearchTerm(e.target.value))} />
                    </div>
                    <button className='h-10 w-16 flex items-center justify-center bg-zinc-800 rounded-r-3xl'>
                      <IoIosSearch className='text-xl rounded-r-3xl'/>
                    </button>
                </div>
            </form>
            <div className='text-xl p-3 bg-zinc-900 rounded-full'>
             <FaMicrophone />
            </div>
            </div>
            <div className='flex gap-8 items-center text-xl'>
             <BiVideoPlus />
             <div className='relative'>
              <FaRegBell />
              <span className='absolute bottom-2 left-2 text-xs bg-red-500 rounded-full px-1'>9+</span>
             </div>
              <img src='https://scontent.fccu10-1.fna.fbcdn.net/v/t1.6435-9/176913431_2940050516279587_1029286023421198198_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=-sbtxHZ1WEIQ7kNvgELx8Xu&_nc_zt=23&_nc_ht=scontent.fccu10-1.fna&_nc_gid=A2mKPrp6uZJi7xpa4Pgytfd&oh=00_AYAQ1fgVygN_KApYRT2NP3OZkie1irwbvVZKCcn6Kgh-Pw&oe=6773DDA7' alt='profile-logo' className='w-9 h-9 rounded-full'/>
            </div>
    </div>
  )
}
 