import { useState } from 'react'
import { Card } from '../components'
import useFetch from '../hooks/useFetch'
import { useNavigate, useSearchParams } from 'react-router-dom'

function MovieList({apiPath}) {
  const [count, setCount] = useState(1)
  const navigate = useNavigate()
  const {data: movies, loading, error, fullData} = useFetch(apiPath)
  
  const handlePrev = (e) => {
    e.preventDefault()
    setCount(count - 1)

    return navigate(`?page=${count}`)

  }

  const handleNext = (e) => {
    e.preventDefault()
    setCount(count + 1)

    return navigate(`?page=${count}`)
  }

  return (
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
      <div className="flex flex-col items-center">
            {/* Help text */}
            <span className="text-sm text-gray-700 dark:text-gray-400">
              Total results found:{" "}
              <span className="font-semibold text-gray-900 dark:text-white">{fullData?.total_results}</span>{" "}
            </span>
            <span className="text-sm text-gray-700 dark:text-gray-400">
              Page <span className="font-semibold text-gray-900 dark:text-white">{fullData?.page}</span> from total {" "}
              <span className="font-semibold text-gray-900 dark:text-white">{fullData?.total_pages} </span>
            </span>
            <div className="inline-flex mt-2 xs:mt-0">
              {/* Buttons */}
              <form onSubmit={handlePrev}>
              <button disabled={count <= 1 ? true : false } 
                className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <svg
                  className="w-3.5 h-3.5 mr-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 5H1m0 0 4 4M1 5l4-4"
                  />
                </svg>
                Prev
              </button>
              </form>
              <form onSubmit={handleNext}>
              <button className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                Next
                <svg
                  className="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </button>
              </form>
            </div>
          </div>
    </section>
  )
}

export default MovieList