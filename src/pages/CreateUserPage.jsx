import React, { useState } from 'react'
import { Link } from "react-router-dom"
import MyButton from '../components/MyButton'

export default function CreateUserPage() {
    const [email, setEmail] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [password, setPassword] = useState("")
    const [organisationKind, setOrganisationKind] = useState("")

    const [response, setResponse] = useState(null)


    function renderInput(type, value, setValue, placeholder) {
        return (
            <input
                type={type}
                value={value}
                onChange={e => setValue(e.target.value)}
                placeholder={placeholder}
            />
        )
    }

    function handleOnSubmit(e) {
        e.preventDefault()
        const url = "https://frebi.willandskill.eu/auth/users/"
        const payload = {
            firstName,
            lastName,
            email,
            password,
            organisationKind,
        }
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload),
        })
            .then(res => res.json())
            .then(data => setResponse(data))
    }

    return (
        <div>
            <h2>Create User:</h2>
            <p>(An email will be sent to the registered email, click the link and then verify)</p>
            <form onSubmit={handleOnSubmit}>
                <p>{renderInput("text", email, setEmail, "Email")}</p>
                <p>{renderInput("text", firstName, setFirstName, "First Name")}</p>
                <p>{renderInput("text", lastName, setLastName, "Last Name")}</p>
                <p>{renderInput("password", password, setPassword, "Password")}</p>
                <p>{renderInput("text", organisationKind, setOrganisationKind, "Organisationkind")}</p>
                <MyButton type="submit">Create User</MyButton>
            </form>
            <hr />
            <p>Already have an account?</p>
            <Link to="/userlogin">Login User</Link>
        </div>
    )
}
