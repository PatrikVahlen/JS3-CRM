import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"

export default function Detail(props) {
    const [detail, setDetail] = useState({})
    const [name, setName] = useState("")

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
        console.log("HEj")
        const url = `https://frebi.willandskill.eu/api/v1/customers/${props.id}/`
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
            {/* {console.log(detail.email)} */}
            <form onSubmit={handleOnSubmit}>
                <input
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <button type="submit">Update Name</button>
            </form>
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