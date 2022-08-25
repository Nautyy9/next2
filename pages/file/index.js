import Link from 'next/link'
import React from 'react'

function index() {
  return (
    <div>
      <Link href='/'>
        <a > Back to Home</a>
      </Link>
      <br></br>index of file
    </div>
  )
}

export default index