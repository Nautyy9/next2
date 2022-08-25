import { useRouter } from 'next/router'
import React from 'react'

function index() {

    const router = useRouter();
    const { listid } = router.query
  return (
    <>
        <p>
            we only have list id in here {listid}
        </p>
            {/* //this is example of multipe dynamic route in this we use file -> [value] -> another file -> [value]  so 
            its the formula for reducing the no of file  for each route 
            this approch reduces the number of iteration for i.e, for 20 file having 20 nested within making 400 file reduces to 20 files only i.e making one file static i.e, 20 file and nested file only 1; 
            that is we use -----> {folder{[folder {folder[file], index}, index] ,index } <------*/}
    {/* the structure is-----> 
    1. folder1 is having a index file which is normal and a dynamic folder [listid] which make the inside files dynamic 
    2.  [listid] folder have index.js and a normal folder named review, [listid] folder have index.js which can access index i.e, file/1,   1->[listid], so index.js inside the [listid] folder can access router.query.listid
    3. Third is the review folder which have another dynamic route file [reviewid] and as usual a index.js for static
    */}
    </>

  )
}

export default index