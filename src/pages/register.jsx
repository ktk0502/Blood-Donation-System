import {useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


function Register() {
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [country,setCountry] = useState();
    const [stateee,setStateee] = useState();
    const [city,setCity] = useState();
    // const [password,setPassword] = useState();
    const navigate = useNavigate()
    const handleSubmit = (e)=>{
        e.preventDefault();
        
        axios.post('http://localhost:3001/user/register',{name,email,country,stateee,city})
        .then(result=> {console.log(result, "register comnsole")
            navigate('/')
        })
        .catch(err=>console.log(err))
    }
    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Name</strong>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Name"
                            autoComplete="off"
                            name="email"
                            className="form-control rounded-0"
                            onChange={(e)=>{
                                setName(e.target.value)
                            }}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter Mail Id"
                            autoComplete="off"
                            name="email"
                            className="form-control rounded-0"
                            onChange={(e)=>{
                                setEmail(e.target.value)
                            }}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Country</strong>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Your Country"
                            autoComplete="off"
                            name="email"
                            className="form-control rounded-0"
                            onChange={(e)=>{
                                setCountry(e.target.value)
                            }}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>State</strong>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Your State"
                            autoComplete="off"
                            name="email"
                            className="form-control rounded-0"
                            onChange={(e)=>{
                                setStateee(e.target.value)
                            }}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>City</strong>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter City"
                            autoComplete="off"
                            name="email"
                            className="form-control rounded-0"
                            onChange={(e)=>{
                                setCity(e.target.value)
                            }}
                        />
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded=0">
                        Register
                    </button>
                </form>
            </div>
        </div>

    )
}

export default Register