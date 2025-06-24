import React, { useState } from "react";
import axios from "axios";

function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post("http://localhost:4000/signup", { name, email, password });
            alert("User registered successfully!");
        } catch (error) {
            alert("Error registering user!");
        }
    };

    return (
        <div className="form">
        <form onSubmit={handleSubmit}>
            <h2 style={{color:"palevioletred"}}>Sign up</h2>
            Name:<input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required /><br/><br/>
            Email:<input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required /><br/><br/>
            password:<input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required /><br/><br/>
            <button type="submit">Sign Up</button>
        </form>
        </div>
    );
}

export default SignUp;