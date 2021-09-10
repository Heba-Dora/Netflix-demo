import React, {useState, useEffect} from 'react'
import axios from './axios'
import './Row.css'



function Row({title, fetchUrl}) {

    const [movies, setMovies] = useState([])
  
    useEffect(()=> {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results)
            return request;
        }
        fetchData()

    }, [fetchUrl])

    console.log(movies)

    return (
        <div className="row">
           <h2> {title} </h2>
           <div className="row__posters">
               {movies.map((movie, key) =>(
                   
                   <img 
                   className="row__poster"
                   src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.name}/>
                   
               )
                   

               )}
           </div>
        </div>
    )
}

export default Row
