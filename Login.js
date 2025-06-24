import React, { useState } from "react";
import { useNavigate,Link} from "react-router-dom";
import Forget from "./Forget";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const data = { email, password };
            const response = await fetch("http://localhost:4000/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error("Login failed");
            }

            const responseMessage = await response.text();
            setMessage(responseMessage);

            // Navigate after successful login
            if (responseMessage.includes("Login successful")) {
                navigate("/registration");
            }
        } catch (error) {
            setMessage("Error: " + error.message);
        }
    };



    return (
        <div className="form">
            <h3 className="h1"> please Login</h3>
            <p className="p" style={{textAlign:"center"}}>give proper details</p>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} required /><br/><br/>
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required /><br/><br/>
                <button type="submit">Login</button><br/><br/>
                <div><Link to='/sign'>sign up</Link></div>
                <div><a href ='/forgot'>ForgotPassword</a></div>
                <p>{message}</p>
            </form>
        </div>
    );
}


export default Login;



