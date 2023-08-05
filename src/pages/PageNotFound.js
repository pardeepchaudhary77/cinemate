import React from 'react'
import { useNavigate } from "react-router-dom"

function PageNotFound() {
  const navigate = useNavigate()
  return (
    <section className="bg-white dark:bg-gray-900">
  <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
      404 - Page not Found
    </h1>
    <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis facilis illo maiores quam sit vero sed libero totam 
      distinctio magnam obcaecati, odio ipsa. Veritatis eos harum nesciunt debitis, autem porro soluta perspiciatis ipsa.
    </p>
    <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
      <button
        onClick={()=> navigate(-1)}
        className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
      >
        Back to Previous Page
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
    </div>
  </div>
</section>

  )
}

export default PageNotFound