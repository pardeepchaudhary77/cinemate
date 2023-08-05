import React from 'react'
import { Card } from '../components'
import useFetch from '../hooks/useFetch'
import { useSearchParams } from 'react-router-dom'
function Search({apiPath}) {
  
  const [searchParams] = useSearchParams()
  const queryTerm = searchParams.get("q")
  const {data: movies, loading, error} = useFetch(apiPath, queryTerm)
  
  return (<>
    <section className='max-w-7xl mx-auto py-7'>
      <p className='text-3xl text-gray-700 dark:text-white'>{movies?.length === 0 ? `No Result found for '${queryTerm}'` : `Result for '${queryTerm}'`}</p>
    </section>
    <section className='max-w-7xl mx-auto py-7'>
      <div className='flex justify-evenly flex-wrap'>
        {error && <div
                  className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                  role="alert">
                  <span className="font-medium">Danger alert!</span> {error}
                </div>}
        {loading && <div className='loading-style'>Loading...</div>} 
        { movies &&  movies.map((movie) => <Card key={movie.id} movie={movie} />) }
      </div>
    </section>
    </>)
}

export default Search