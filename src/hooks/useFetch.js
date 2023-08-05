import { useEffect, useState } from 'react'
//import loadingImage from "../assets/loading.gif"

function useFetch(apiPath, queryTerm="", count=1) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [fullData, setFullData] = useState(null)
    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_SECRET_KEY}&page=${count}&query=${queryTerm}`
    console.log("PArdeep",count)
    useEffect(()=>{
        //const controller = new AbortController()
        const fetchData = async() => {
            setLoading(true)
            try {
                const response = await fetch(url);
                // , {signal: controller.signal}
                if(!response.ok){
                    throw new Error(response.statusText)
                }
                const result = await response.json()
                setLoading(false)
                setData(result.results)
                setFullData(result)
            } catch(error){
                setLoading(false)
                setError(error.message)
            }
        }
        fetchData()
        //return () => controller.abort();
    }, [url])
  return {data, fullData, loading, error}
}

export default useFetch