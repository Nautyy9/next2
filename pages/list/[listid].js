import React from 'react'
import {useRouter} from 'next/router'

function listid() {

    const router = useRouter()
    const route = router.query.listid
  return (
    <>
        <h1>
            List for {route}
        </h1>
        <p>
            This is dymanic routes needed when there are multiple nesting in the routes.  In this we use useRouter(hook) from next and use that to get dynamic routes
        </p>
        <p>
            here we can use this route = router.query.listid to render different id according to passed query
        </p>
     </>
  )
}

export default  listid