import React, {useState, useEffect} from 'react'
import requests from './requests'
import axios from './axios'
import './Banner.css'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'



function Banner() {
    const [movies, setMovies] = useState([])
    const [trailerUrl, setTrailerUrl] = useState('')


    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals)
            setMovies(request.data.results[
                Math.floor(Math.random() * request.data.results.length-1)
            ])
            return(request)
        } 
        fetchData()
    }, [])

    const opts ={
        height:'390',
        width:'100%',
        playerVars: {
            autoplay: 1,

        }
    }

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('')
        } else {
            movieTrailer(movie?.name || movie?.title || movie?.source)
            .then((url)=> {
                const urlParams = new URLSearchParams( new URL(url).search)
                setTrailerUrl(urlParams.get('v'))

            })
            .catch((error)=> console.log(error))
        }

    }
    
    return (
        <header>
            <div className="img">
                <img className="navbar" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="logo"/>
            </div>
 <div 
        className='banner'
        style={{ backgroundPosition:'center center' ,backgroundSize:'cover', backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`}} >
            
           <div className="title">
           <h1 > {movies?.title || movies?.name || movies?.original_name}</h1>
          
           
          <p >{movies.overview}</p>
         
               </div> 
               <div className="banner_buttons">
               <button className="banner_button1" onClick={()=>handleClick(movies)} >Play </button>
                   <button className="banner_button2">More Info</button>
                  

               </div>
            
           
               
        </div>
        <div>{trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}</div>
        
        </header>
       
    )
}


export default Banner
