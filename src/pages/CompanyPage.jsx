import React, { useState, useContext } from 'react'
import { Link, useNavigate } from "react-router-dom"
import MyButton from '../components/MyButton'
import { UserInformation } from '../App'

export default function CompanyPage() {
    const { userFirstName, setUserFirstName } = useContext(UserInformation)
    const navigate = useNavigate()
    const [name, setName] = useState(null)
    const [organisationNr, setOrgNr] = useState(null)
    const [vatNr, setVatNr] = useState(null)
    const [reference, setReference] = useState(null)
    const [paymentTerm, setPaymentTerm] = useState(null)
    const [website, setWebsite] = useState(null)
    const [email, setEmail] = useState(null)
    const [phoneNumber, setPhoneNumber] = useState(null)
    const [isValid, setIsValid] = useState(true)
    const [validVatNrText, setValidVatNrText] = useState("Valid VatNr")

    function handleOnSubmit(e) {
        e.preventDefault()
        if (vatNr.length !== 12) {
            setIsValid(false);
            setValidVatNrText("Not VatNr")
            console.log(isValid);
            console.log("Fel Storlek")
            return;
        }
        if (vatNr[0] + vatNr[1] !== "SE") {
            setIsValid(false);
            setValidVatNrText("Not VatNr")
            console.log("Börja med SE")
            return;
        }
        for (let i = 2; i < vatNr.length; i++) {
            if (isNaN(vatNr[i])) {
                console.log("Inte ett nummer")
                setValidVatNrText("Not VatNr")
                setIsValid(false);
                return;
            }
        }
        const url = "https://frebi.willandskill.eu/api/v1/customers/"
        const payload = {
            name,
            organisationNr,
            vatNr,
            reference,
            paymentTerm,
            website,
            email,
            phoneNumber
        }
        const token = localStorage.getItem("webb21inl")
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
        fetch(url, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(payload)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                navigate('/list')
            })
    }

    return (
        <div>
            Welcome: {userFirstName} to CompanyPage
            {console.log(userFirstName)}
            <form onSubmit={handleOnSubmit}>
                <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Company name"
                />
                <br />
                <input
                    type="text"
                    value={organisationNr}
                    onChange={e => setOrgNr(e.target.value)}
                    placeholder="OrganisationNr"
                />
                <br />
                <label style={{ color: !isValid ? 'red' : 'white' }}>{validVatNrText}</label>
                <input
                    type="text"
                    value={vatNr}
                    onChange={e => setVatNr(e.target.value)}
                    placeholder="Vat-number"
                />
                <br />
                <input
                    type="text"
                    value={reference}
                    onChange={e => setReference(e.target.value)}
                    placeholder="Reference"
                />
                <br />
                <input
                    type="integer"
                    value={paymentTerm}
                    onChange={e => setPaymentTerm(e.target.value)}
                    placeholder="Payment-term"
                />
                <br />
                <input
                    type="text"
                    value={website}
                    onChange={e => setWebsite(e.target.value)}
                    placeholder="Website"
                />
                <br />
                <input
                    type="text"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Email"
                />
                <br />
                <input
                    type="text"
                    value={phoneNumber}
                    onChange={e => setPhoneNumber(e.target.value)}
                    placeholder="Phonernumber"
                />
                <br />
                <MyButton type="submit">Submit</MyButton>
                {/* <button type="submit">Submit</button> */}
            </form>
            <Link to="/mypage">Home</Link>
            <br />
            <Link to="/list">View Customers</Link>
            
        </div>
    )
}