import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid,name} = useParams()
  return (
    <div className='flex text-xl justify-center items-center gap-1 flex-col'>
        <h1 className='py-3'>User : {userid}</h1>
         <h1 className='py-3'>Name: {name}</h1>
         </div>
  )
}

export default User