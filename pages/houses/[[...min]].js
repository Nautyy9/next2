import React from 'react'
import {useRouter} from 'next/router'
function min() {

    const reducer =  useRouter();
    const {min = []} = reducer.query
    console.log(min);
  return (
    <div> minimum value of rent is {min[0]} and maximum value for rent is {min[1]}</div>
  )
  // [[]] what this do is if we enter just houses without [[]] it will throw error as there is no index.js file but doing double brackets will make it render even without index.js file
  
}

export default min