import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

import Button from "../../components/Button/Button"
import "./Login.css"

export default function LoginPage () {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    const [users, setUsers] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()
    }

    useEffect(() => {
        axios.get('/api/users/getUsers')
            .then(function (response) {
                setUsers(response.data)
                console.log(users)
            })
            .catch(function (error) {
                console.log(error)
            })
    }, [])

    return (
        <div className="loginPage">
            <div className="loginContainer">
                <h1>Velkommen til Handlelisten</h1>
                <h2>Eksisterende bruker? Logg inn under:</h2>
                <form action="" className="loginForm" onSubmit={handleSubmit}>
                    <input type="email" 
                        name="userEmail" 
                        id="userEmail" 
                        placeholder="E-post"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
                    <input type="password" 
                        name="userPassword" 
                        id="userPassword" 
                        placeholder="passord"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}/>
                    <span>
                        <p>Klikk her for å registrere deg!</p>
                    </span>
                    <span className="loginButton">
                        <Button text={"Logg inn"} />
                    </span>
                </form>
            </div>
        </div>
    )
}