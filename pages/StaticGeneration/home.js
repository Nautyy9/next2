import React from 'react'
import Home from '../../components/home'

function home({users}) {
  return (
    <div>
    {users.map((val, key) => {
        //return jaruri hai in map else no data will be visible 

        //we can create presentational comp and it must not be under pages folder as pages folder provide some special access like getStaticProps() and routes which is not needed 
        //by presentational comp , they just simply show the data so we should create a new folder in our root directory and there we should sppecify presentational components
        return (
            <div key={val.id}>
                {<Home users={val}/>} 
        </div>)
    })}
    </div>
  )
}
export default home

export async function getStaticProps() {
    const response =  await fetch('https://jsonplaceholder.typicode.com/todos/');
    const data = await response.json();
    console.log(data);

    return {props: {
        users: data
    }}
}