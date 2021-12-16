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
        
        return(
            <WrappedComponent data={data} loading={loading} {...props}  />
        )
    }
    return WithFetch
    
}

export default withFetch
