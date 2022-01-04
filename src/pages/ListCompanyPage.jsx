import React, { useEffect, useState, useContext } from 'react'
import { Link } from "react-router-dom"
import { UserInformation } from '../App';

export default function PostListPage() {
    const [postList, setPostList] = useState(null)
    const { companyList, setCompanyList } = useContext(UserInformation)

    useEffect(() => {
        fetchData();
    }, []);

    function fetchData() {
        const url = 'https://frebi.willandskill.eu/api/v1/customers/'
        const token = localStorage.getItem('webb21inl')
        const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        };
        fetch(url, {
            headers: headers,
        })
            .then((res) => res.json())
            .then((data) => {
                setPostList(data.results)
                setCompanyList(data.results)
                // console.log(data.results)
            });
    }

    function handleOnDelete(id) {
        console.log(id)
        const url = `https://frebi.willandskill.eu/api/v1/customers/${id}/`;
        const token = localStorage.getItem("webb21inl");
        const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        };
        fetch(url, {
            headers: headers,
            method: "DELETE"
        })
            .then((res) => fetchData())
    }

    return (
        <div>
            {postList && postList.map((item, index) => {
                return (
                    <div key={item.id}>
                        {/* {console.log(companyList)} */}
                        {/* <p><Link to={`/${index.id}`} key={item.id}>{item.name}</Link></p> */}
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
                        <button className='btn btn-primary' onClick={(e) => handleOnDelete(item.id)}>Delete</button>
                        {/* onClick={(e) => handleOnDelete(item.id)} */}

                    </div>
                )
            })}
            <hr />
            <Link to="/mypage">Home</Link>
            <br />
            <Link to="/home">Create new Customer</Link>
            <br />
            <Link to="/latest">Latest Added Company</Link>
        </div>
    )
}