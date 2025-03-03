import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom'



const TitleCards = ({title,category}) => {


const[apiData,setApiData] = useState([]);  
const cardsRef = useRef();

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZGViOTk4NDE4YThkY2MxMjI1N2EwMThkZjkyMDE5MSIsIm5iZiI6MTc0MDI5MTYzMi4yMDg5OTk5LCJzdWIiOiI2N2JhYmUzMGI5NzM2N2ZjZDQwYTliMTkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.elx-juNpE68Gp3sIkzsQQfbT5iE3OhFN2IsX9G_j9zY'
  }
};

const handleWheel = (event)=>{
   event.preventDefault();
   cardsRef.current.scrollLeft += event.deltaY;
}

useEffect(()=>{

  fetch(`https://api.themoviedb.org/3/movie/${category ? category : "now_playing" }?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));


  cardsRef.current.addEventListener('wheel',handleWheel);
},[])



  return (
    <div className='title-Cards'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className='card-list' ref={cardsRef}>
        {apiData.map((card,index)=>{
           return <Link to={`/player/${card.id}`} className='card' key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt=''/>
            <p>{card.original_title}</p>
           </Link>
        })}
      </div>
    </div>
  )
}

export default TitleCards
