import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MyButton from '../components/MyButton'
import './LoginPage.css';


export default function LoginUserPage() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    function handleOnSubmit(e) {
        e.preventDefault()
        const url = "https://frebi.willandskill.eu/api-token-auth/"
        const payload = { email, password }
        fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
            .then(res => res.json())
            .then(data => {
                const token = data.token
                localStorage.setItem("webb21inl", token)
                navigate('/mypage')
            })
    }

    return (
        <div className='login'>
            Login
            <form onSubmit={handleOnSubmit}>
                <input
                    type="text"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Email"
                />
                <br />
                <input
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <br />
                <MyButton big type="submit">Login</MyButton>
            </form>
        </div>
    )
}