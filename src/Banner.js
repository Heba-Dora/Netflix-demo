import React, {useState, useEffect} from 'react'
import requests from './requests'
import axios from './axios'
import './Banner.css'



function Banner() {
    const [movies, setMovies] = useState([])


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
    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
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
               <button className="banner_button1">Play</button>
                   <button className="banner_button2">More Info</button>

               </div>
            
           
            
        </div>
        </header>
       
    )
}


export default Banner
