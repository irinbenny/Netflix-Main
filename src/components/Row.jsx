/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import './Row.css'
import PropTypes from 'prop-types';
import instance from '../instance';

Row.propTypes = {
    title: PropTypes.string.isRequired,
    fetchUrl: PropTypes.string.isRequired,
    isPoster: PropTypes.bool.isRequired
  };
  

function Row({title,fetchUrl,isPoster}) {
  console.log(isPoster);
    // console.log(title,fetchUrl);
    const [movies,setMovies]=useState([])
    const base_url = "https://image.tmdb.org/t/p/original";

    const fetchData=async()=>{
      const response = await instance.get(fetchUrl)
      // console.log(response.data.results);
      setMovies(response.data.results)
    }

    console.log(movies);

    useEffect(()=>{
      fetchData()
    },[])

    return (
      <div className='row'>
         <h3>{title}</h3>
         <div className="movie-row">
         {movies.map(item => (
  <img
    key={item.id}
    className={`movie ${isPoster ? `movie-poster` : `movie`}`}
    src={`${base_url}${isPoster ? item.poster_path : item.poster_path}`}
    alt={item.title}
  />
))}
         </div>
  </div>
  )
  
}

export default Row