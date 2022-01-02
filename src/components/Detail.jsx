import React, { useState, useEffect, useContext } from 'react'
import { Link } from "react-router-dom"
import { UserInformation } from '../App'
import MyButton from './MyButton'

export default function Detail(props) {
    const [detail, setDetail] = useState({})
    const [name, setName] = useState("")
    const { companyList, setCompanyList } = useContext(UserInformation)

    useEffect(() => {
        const url = `https://frebi.willandskill.eu/api/v1/customers/${props.id}/`
        const token = localStorage.getItem('webb21inl')
        fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setDetail(data)
                setName(data.name)
            })
    }, [])

    function handleOnSubmit(e) {
        e.preventDefault();
        const url = `https://frebi.willandskill.eu/api/v1/customers/${props.id}/`
        // const url = `https://frebi.willandskill.eu/api/v1/customers/${companyList[props.id]}/`
        const token = localStorage.getItem("webb21inl")
        const payload = { name }
        fetch(url, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(payload)
        })
            .then(res => res.json())
            .then(data => {
                setDetail(data)
                setName(data.name)
            })
    }

    return (
        <div>

            {/* {console.log(props.id)}
            {console.log(companyList[props.id])} */}
            {/* {console.log(detail)} */}
            <form onSubmit={handleOnSubmit}>
                <input
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <MyButton type="submit">Update Name</MyButton>
                {/* <button type="submit">Update Name</button> */}
            </form>
            {/* <p>{companyList[props.id].name}</p>
            <p>{companyList[props.id].email}</p>
            <p>{companyList[props.id].organisationNr}</p>
            <p>{companyList[props.id].paymentTerm}</p>
            <p>{companyList[props.id].phoneNumber}</p>
            <p>{companyList[props.id].reference}</p>
            <p>{companyList[props.id].vatNr}</p>
            <p>{companyList[props.id].website}</p>
            <p>{companyList[props.id].id}</p> */}
            {detail ? (
                <>
                    <h2>{detail.name}</h2>
                    <p>{detail.email}</p>
                    <p>{detail.organisationNr}</p>
                    <p>{detail.paymentTerm}</p>
                    <p>{detail.phoneNumber}</p>
                    <p>{detail.reference}</p>
                    <p>{detail.vatNr}</p>
                    <p>{detail.website}</p>
                    <p>{detail.id}</p>
                </>
            ) : "Not Found"}
            <Link to="/list">Back to List</Link>
        </div>
    )
}