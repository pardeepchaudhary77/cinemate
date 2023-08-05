import React, { useEffect, useState } from 'react'
import {useParams, Link} from "react-router-dom"
import backupImg from "../assets/backupImg.jpg"

function MovieDetail() {

  const params = useParams()
  const [movie, setMovie] = useState({})

  console.log(movie)

  const images = movie.poster_path ? `https://www.themoviedb.org/t/p/w400${movie.poster_path}` : backupImg

  useEffect(()=>{
    async function fetchMovie(){
      const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.REACT_APP_SECRET_KEY}`)
      const result = await response.json()
      setMovie(result)
    }
    fetchMovie();
  },[])

  return (
    <section className="bg-white dark:bg-slate-800">
      <div className="grid max-w-screen-xl px-2 py-5 mx-auto rounded lg:grid-cols-12 bg-whit dark:bg-gray-800">
      <div className="lg:mt-0 lg:col-span-5 lg:flex justify-center">
          <img
            src={images}
            alt="mockup"
          />
        </div>
        <div className="ml-auto lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            {movie.original_title}
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            {movie.overview}
          </p>

          {movie.genres ? (
            <>
              {movie.genres.map((genre) => <>
                <Link key={genre.id} className="inline-flex mr-3 items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                >
                  {genre.name}
                </Link>
              </>)}
            </>
          ) : ""}

         

          <div className="flex items-center mt-5">
            <svg
              className="w-4 h-4 text-yellow-300 mr-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">{movie.vote_average}</p>
            <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400" />
            <span
              className="text-sm font-medium text-gray-900 underline dark:text-white"
            >
              {movie.vote_count} reviews
            </span>
          </div>

          <p className='ml-2 mt-3 text-sm font-bold text-gray-900 dark:text-white'>Runtime: <span className='font-normal'>{movie.runtime}</span></p>
          <p className='ml-2 mt-3 text-sm font-bold text-gray-900 dark:text-white'>Budget: <span className='font-normal'>${movie.budget}</span></p>
          <p className='ml-2 mt-3 text-sm font-bold text-gray-900 dark:text-white'>Revenue: <span className='font-normal'>${movie.revenue}</span></p>
          <p className='ml-2 mt-3 text-sm font-bold text-gray-900 dark:text-white'>Release Date: <span className='font-normal'>{movie.release_date}</span></p>
          <p className='ml-2 mt-3 text-sm font-bold text-gray-900 dark:text-white'>IMDB Code: <a className="underline hover:no-underline font-normal" target="_blank" rel="noreferrer" href={`https://www.imdb.com/title/${movie.imdb_id}`}>{movie.imdb_id}</a></p>
          <p className='ml-2 mt-3 text-sm font-bold text-gray-900 dark:text-white'>Status: <span className='font-normal'>{movie.status}</span></p>

          
          
          
        </div>
        
      </div>
    </section>
  )
}

export default MovieDetail