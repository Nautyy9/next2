import React from 'react'
import {useRouter} from 'next/router'
function reviewid() {

    const router  = useRouter();
    const {reviewid, listid} = router.query
    console.log(listid, reviewid)
  return (
    <div>The list is {listid} and the review id is {reviewid} </div>
    // adding router.query.listid, router.query.reviewid is part of query that have access to what we provide in the url as reviewid and listid therfore when we log we see reviewid and listid
    // we can either destructure the {param} or write it after query.param(if single id is present)
    // here in the dynamic routes id is string while in params(catch all) id is array
  )
}

export default reviewid