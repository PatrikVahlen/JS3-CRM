import React, { useEffect, useState, useContext } from 'react'
import { Link } from "react-router-dom"
import MyButton from '../components/MyButton'
import { UserInformation } from '../App'

// const UserInformation = createContext({})

export default function MyPage() {
    const { userFirstName, setUserFirstName } = useContext(UserInformation)
    const [myData, setMyData] = useState(null)
    // const [userFirstName, setUserFirstName] = useState("Pelle")


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

    return (
        // <UserInformation.Provider value={{ userFirstName, setUserFirstName }}>
        <div>
            {myData && (
                <>
                    {/* {console.log(userFirstName)} */}
                    {setUserFirstName(myData.firstName)}
                    <h2>Welcome: {myData.firstName} {myData.lastName}</h2>
                    <p>Email: {myData.email}</p>
                    <p>What do you want to do?</p>
                    <Link to="/home">Create new Customer</Link>
                    <br />
                    <Link to="/list">View Customers</Link>
                    <br />
                    <MyButton>TEST</MyButton>
                </>
            )}

        </div>
        // </UserInformation.Provider>
    )
}

