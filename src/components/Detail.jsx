import React, { useState, useEffect, useContext } from 'react'
import { Link } from "react-router-dom"
import { UserInformation } from '../App'
import Card from './Card'
import MyButton from './MyButton'

export default function Detail(props) {
    const [detail, setDetail] = useState({})
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
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
                setEmail(data.email)
            })
    }, [])

    function handleOnSubmit(e) {
        e.preventDefault();
        const url = `https://frebi.willandskill.eu/api/v1/customers/${props.id}/`
        // const url = `https://frebi.willandskill.eu/api/v1/customers/${companyList[props.id].id}/`
        const token = localStorage.getItem("webb21inl")
        const payload = { name, email }
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
                setEmail(data.email)
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
                <MyButton type="submit">Update Info</MyButton>
                <br />
                <input
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                {/* <MyButton type="submit">Update Email</MyButton> */}
                {/* <button type="submit">Update Name</button> */}
            </form>
            {/* <Card>
                <p>Name: {companyList[props.id].name}</p>
                <p>Email: {companyList[props.id].email}</p>
                <p>Org Nr: {companyList[props.id].organisationNr}</p>
                <p>{companyList[props.id].paymentTerm}</p>
                <p>{companyList[props.id].phoneNumber}</p>
                <p>{companyList[props.id].reference}</p>
                <p>{companyList[props.id].vatNr}</p>
                <p>{companyList[props.id].website}</p>
                <p>{companyList[props.id].id}</p>
            </Card> */}
            {detail ? (
                <Card>
                    <h2>Name: {detail.name}</h2>
                    <p>Email: {detail.email}</p>
                    <p>Org nr: {detail.organisationNr}</p>
                    <p>Payment: {detail.paymentTerm}</p>
                    <p>Phone Nr: {detail.phoneNumber}</p>
                    <p>Reference: {detail.reference}</p>
                    <p>VatNr: {detail.vatNr}</p>
                    <p>Website: {detail.website}</p>
                    <p>Id: {detail.id}</p>
                </Card>
            ) : "Not Found"}
            <Link to="/list">Back to List</Link>
        </div>
    )
}