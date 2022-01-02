import React, { useEffect, useState } from 'react'

const withFetch = (WrappedComponent, requestUrl) => {
    const WithFetch = (props) => {
        const [data,setData] = useState([]);
        const [loading,setLoading] = useState(true);
    
        useEffect(()=> {
            if (requestUrl) fetchData(requestUrl)
        },[])
    
        const fetchData = () => {
            setLoading(true)
            fetch(requestUrl)
             .then(response => response.json())
             .then(data => setData(data))
             .finally(()=> setLoading(false))
        }
        /*const fetchData = async() => {
            setLoading(true)
            const response = await axios.get(requestUrl)
            setData(response.data)
            setLoading(false)
        }*/
        if(loading){
            return (
                <div style={{position:'absolute', top:'50vh', left:'50vw'}}>
                    <h1>Loading....</h1>
                    <p>please wait</p>
                </div> 
            )
        }
        return(
            <WrappedComponent data={data} {...props}  />
        )
    }
    return WithFetch
    
}

export default withFetch
