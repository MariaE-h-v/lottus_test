import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const userInit = {
    email : "",
    password: ""
}

export const Login = () => { 
    const navigate = useNavigate();
    const [user, setUser] = useState(userInit)
    const handleSubmit = (e) =>{
        e.preventDefault();
        navigate("/Home");
    }
    const handleChange = (e) => {
        e.preventDefault();
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    return (
        <div className="d-flex flex-row justify-content-center align-self-center" style={{ padding: "10rem" }}>
            <div className="card  shadow " style={{ width: "18rem" }}>
                <form className='my-3 mx-3' onSubmit={handleSubmit} autoComplete="off">
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            aria-describedby="emailHelp" 
                            required
                            value={user.email}
                            onChange={handleChange}
                            name="email"
                            autoComplete='off'
                        />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            required 
                            value={user.password}  
                            onChange={handleChange} 
                            name='password' 
                            autoComplete='off'
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}
