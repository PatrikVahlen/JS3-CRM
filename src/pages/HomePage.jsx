import React, { useEffect, useState, useContext } from 'react'
import { Link } from "react-router-dom"
import { UserInformation } from '../App'

// const UserInformation = createContext({})

export default function MyPage() {
    const { userInformation, setUserInformation } = useContext(UserInformation)
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
                setUserInformation(data)
            })

    }, [])

    return (

        <div>
            {/* {console.log(companyList)} */}
            {myData && (
                <>
                    {/* {console.log(userFirstName)} */}
                    <h2>Welcome: {myData.firstName} {myData.lastName}</h2>
                    <p>Email: {myData.email}</p>
                    <p>What do you want to do?</p>
                    <Link to="/home">Create new Customer</Link>
                    <br />
                    <Link to="/list">View Customers</Link>
                    <br />
                    <Link to="/">Create new user</Link>
                    <br />
                    <Link to="/userlogin">Log in with another user</Link>
                    <br />
                </>
            )}

        </div>
        // </UserInformation.Provider>
    )
}

