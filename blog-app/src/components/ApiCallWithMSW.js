import React, { useState, useEffect } from "react";



const ApiCallWithMSW = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json()).then((data) => {
            setUsers(data)
            setLoading(false)
        }).catch(() => setLoading(false))
    }, [])

    if (loading) {
        return <p>Loading...</p>
    }

    if (users.length === 0) {
        return <p>No users found.</p>
    }

    console.log("users", users)

    return <>
        <ul>
            {users.map((user, index) => {
                return <li key={index}>{user.name}</li>
            })}
        </ul>
    </>
}

export default ApiCallWithMSW