import { useRouter } from 'next/router'
import React from 'react'

function params() {

    const router = useRouter()
    const {params = []} = router.query
    // here the above will throw a run time error if we dont provide{ params = [] } and provide simple {params} this is because of prerendering
    console.log(params);
        if(params.length === 2)
            return (
                <div> the first value is {params[0]}  and the second value is {params[1]}</div>
            )
            else if(params.length === 1)
            return(
                <div className="">The only value passed in url is {params[0]}</div>
            )
            else 
            return(
                <h1>Concept of conditional rendering js</h1>
            )
}

export default params