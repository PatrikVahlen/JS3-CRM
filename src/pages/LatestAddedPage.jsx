import React, { useContext } from 'react'
import { UserInformation } from '../App';
import { Link } from "react-router-dom"

export default function LatestAddedPage() {
    const { companyList, setCompanyList } = useContext(UserInformation)
    const { userFirstName, setUserFirstName } = useContext(UserInformation)
    return (
        <div>
            <p>Hi {userFirstName}!</p>
            <p>Your latest added company is {companyList[0].name}</p>
            <Link to="/mypage">Home</Link>
        </div>
    )
}
