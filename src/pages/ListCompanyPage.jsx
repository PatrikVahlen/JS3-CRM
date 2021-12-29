import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"

export default function PostListPage() {
    const [postList, setPostList] = useState(null)

    useEffect(() => {
        const url = 'https://frebi.willandskill.eu/api/v1/customers/'
        const token = localStorage.getItem('webb21inl')
        fetch(url, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setPostList(data.results)
            })
    }, [])

    // function handleOnDelete(id) {
    //     console.log(id)
    //     const url = `https://frebi.willandskill.eu/api/v1/customers/${id}/`;
    //     const token = localStorage.getItem("webb21inl");
    //     const headers = {
    //         "Content-Type": "application/json",
    //         Authorization: `Bearer ${token}`,
    //     };
    //     fetch(url, {
    //         headers: headers,
    //         method: "DELETE"
    //     })
    //         .then((res) => fetchData())
    // }

    return (
        <div>
            {postList && postList.map(item => {
                return (
                    <div key={item.id}>
                        <p><Link to={`/${item.id}`} key={item.id}>{item.name}</Link></p>
                        {/* <p>{item.name}</p>
                        <p>{item.email}</p>
                        <p>{item.organisationNr}</p>
                        <p>{item.paymentTerm}</p>
                        <p>{item.phoneNumber}</p>
                        <p>{item.reference}</p>
                        <p>{item.vatNr}</p>
                        <p>{item.website}</p>
                        <p>{item.id}</p> */}
                        <button className='btn btn-primary' >Delete</button>
                        {/* onClick={(e) => handleOnDelete(item.id)} */}
                        <hr />
                        <Link to="/mypage">Home</Link>
                        <br />
                        <Link to="/home">Create new Customer</Link>
                    </div>
                )
            })}
        </div>
    )
}