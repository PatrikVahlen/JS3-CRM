import React, { useContext } from 'react'
import { UserInformation } from '../App';
import { Link } from "react-router-dom"

export default function LatestAddedPage() {
    const { companyList, setCompanyList } = useContext(UserInformation)
    const { userInformation, setUserInformation } = useContext(UserInformation)
    return (
        <div>
            <p>Hi {userInformation.firstName} {userInformation.lastName}!</p>
            <p>Your latest added company is {companyList[0].name}</p>
            <Link to="/mypage">Home</Link>
        </div>
    )
}
