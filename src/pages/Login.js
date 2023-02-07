import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Login = () => { 
    const navigate = useNavigate();
    const handleSubmit = (e) =>{
        e.preventDefault();
        navigate("/Home");
    }
    return (
        <div className="d-flex flex-row justify-content-center align-self-center" style={{ padding: "10rem" }}>
            <div className="card  shadow " style={{ width: "18rem" }}>
                <form className='my-3 mx-3' onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" required />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}
