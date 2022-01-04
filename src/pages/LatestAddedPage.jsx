import React, { useContext, useState, useEffect } from 'react'
import { UserInformation } from '../App';
import { Link } from "react-router-dom"

export default function LatestAddedPage() {
    const { companyList, setCompanyList } = useContext(UserInformation)
    const { userInformation, setUserInformation } = useContext(UserInformation)
    const [arrayEmpty, setArrayEmtpy] = useState("")

    useEffect(() => {
        if (companyList.length == "0") {
            setArrayEmtpy(null)
        } else {
            setArrayEmtpy(true)
        }
    });

    return (
        <div>
            {console.log(arrayEmpty)}
            {arrayEmpty ? (
                <>
                    <p>Hi {userInformation.firstName} {userInformation.lastName}!</p>
                    <p>Your latest added company is {companyList[0].name}</p>
                </>
            ) : "Not found"}
            <Link to="/mypage">Home</Link>
        </div>
    )
}
