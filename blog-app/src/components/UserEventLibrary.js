import React, { useState } from 'react'

const UserEventLibrary = () => {
    const [data, setData] = useState("");
    const [name, setName] = useState("")

    return (
        <div>
            <h1>{data}</h1>
            <button onClick={() => setData("hello")}>Click Me!</button>
            <h1>{name}</h1>
            <input type='text' onChange={(e) => setName(e.target.value)} />
        </div>
    )
}

export default UserEventLibrary