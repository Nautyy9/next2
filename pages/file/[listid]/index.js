import React from 'react'
import {useRouter} from 'next/router'

function index() {
  const router = useRouter();
  const route = router.query.listid
  return (
    <div>list id  {route}</div>
  )
}

export default index