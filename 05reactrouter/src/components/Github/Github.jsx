import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setdata] = useState([])

    useEffect(() => {
        fetch("https://api.github.com/users/sumukhanidhibs").
            then(res => res.json()).
            then(data => {
                // console.log(data);
                setdata(data)
            }).catch(rej => console.log(rej))
    })
    return (
        <>
            <div className='text-center m-4 flex-col flex bg-gray-600 text-white p-4 text-3xl justify-center items-center gap-5'>
                <h1> {data.name}</h1>
            
            <img src={data.avatar_url} width={"300px"} height={"300px"} />
            </div>
        </>
    )
}

export default Github