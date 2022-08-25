import React from 'react'
import Link from 'next/link'
import Router from 'next/router'

function index({props = 100}) {

  const handleClick =( )=>{
    Router.push('/file')
    // Router.replace('/file') ---> ===  link with replace set to true

  }

  return (

    <div>
     <Link href='/file'>
      <a>
        To files 
      </a>
    </Link>
    <br/>
    <Link href="/file/1">
      <a>To specific  file</a>
    </Link>
    <br/>
    <Link href={`/file/${props}`}>
      <a>To specific  file with string interpolation  and static props </a>
    </Link>
    <br/>
    <Link href="/file/1/review/1" replace>
      <a >To specific  file but back button go to home instead of previous route with replacable</a>
    </Link>
    <br/>
    <button type='button' onClick={handleClick}>Navigation with button only or called programatic navigation</button>
    </div>
  )
}

export default index