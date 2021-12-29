import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"

export default function MyPage() {
    const [myData, setMyData] = useState(null)


    useEffect(() => {
        const url = 'https://frebi.willandskill.eu/api/v1/me'
        const token = localStorage.getItem("webb21inl")
        fetch(url, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setMyData(data)
            })

    }, [])

    // function handleOnSubmit(e) {
    //     e.preventDefault();
    //     console.log("HEj")
    //     const url = 'https://frebi.willandskill.eu/api/v1/me'
    //     const token = localStorage.getItem("webb21inl")
    //     const payload = { firstName, lastName }
    //     fetch(url, {
    //         method: "PATCH",
    //         headers: {
    //             'Authorization': `Bearer ${token}`
    //         },
    //         body: JSON.stringify(payload)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             setMyData(data)
    //             setFirstName(data.firstName)
    //             setLastName(data.lastName)
    //         })
    // }

    return (
        <div>
            {myData && (
                <>
                    {/* <form onSubmit={handleOnSubmit}>
                        <input
                            value={firstName}
                            onChange={e => setFirstName(e.target.value)}
                        />
                        <input
                            value={lastName}
                            onChange={e => setLastName(e.target.value)}
                        />
                        <button type="submit">Update Info</button>
                    </form> */}
                    <h2>Welcome: {myData.firstName} {myData.lastName}</h2>
                    <p>Email: {myData.email}</p>
                    <p>What do you want to do?</p>
                    <Link to="/home">Create new Customer</Link>
                    <br />
                    <Link to="/list">Veiw Customers</Link>
                </>
            )}

        </div>
    )
}