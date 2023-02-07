import React, { useEffect, useState } from 'react'
import { Navbar } from '../components/Navbar'

export const Home = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://randomuser.me/api/?results=10");
            const jsonData = await response.json();
            setUsers(jsonData.results);
        }
        fetchData();
    }, []);
    
    return (
        <>
            <Navbar />
            <div>Users</div>
            <div className='d-flex flex-wrap'>
                {
                    users?.map(user => (
                        <div key={user.id.value}  className="card mx-2 my-2" style={{width: "18rem"}}>
                            <img src={user.picture.medium} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{ user.name.title + " " + user.name.first + " " + user.name.last}</h5>
                                    <p className="card-text">{"Gender: " + user.gender}</p>
                                    <p className="card-text">{"Phone: " + user.phone}</p>
                                    <p className="card-text">{"Email: " + user.email}</p>
                                </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}
