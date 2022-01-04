import React, { useEffect, useState } from 'react'
import { Link, useLocation } from "react-router-dom"
import { useNavigate } from 'react-router-dom'
import MyButton from '../components/MyButton'

export default function LoginPage() {

    let location = useLocation();
    let searchParams = new URLSearchParams(location.search);
    let [uid, setUID] = useState("");
    let [token, setToken] = useState("");
    const [response, setResponse] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        setUID(searchParams.get('uid'))
        setToken(searchParams.get('token'))
    });

    function handleOnClick() {
        const url = "https://frebi.willandskill.eu/auth/users/activate"
        const payload = {
            uid,
            token,
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
        console.log("HÄR")
        navigate('/userlogin')
    }

    return (
        <div>
            <p>Verify your account:</p>
            <button onClick={handleOnClick}>Verify</button>
            {console.log("HEJ")}
            {console.log("DÅÅ")}
            {console.log(uid)}
            {console.log(token)}
            <br />
            <Link to="/">Create User</Link>
        </div>
    )
}
