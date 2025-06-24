// // ForgotPassword.jsx
// // ForgotPassword.jsx
// import React, { useState } from "react";
// import axios from "axios";
// import Reset from "./Reset";

// function Forget() {
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:4000/forgot", { email });
//       setMessage(res.data.message);
//     } catch (err) {
//       setMessage(err.response?.data?.message || "Error occurred.");
//     }
//   };

//   return (
//     <div>
//       <h2>Forgot Password</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           placeholder="Enter registered email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <button type="submit">Send Reset Link</button>
//       </form>
//       <p>{message}</p>
//     </div>
//   );
// }

// export default Forget;





import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";

function Forget() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // Forgot Password Submit
  const handleForgotSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/forgot", { email });
      setMessage(response.data.message);
    } catch (err) {
      setMessage("Failed to send email: " + err.response.data.message);
    }
  };

  // Reset Password Submit
  const handleResetSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/reset-password", {
        token,
        password,
      });
      setMessage(response.data.message);
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      setMessage("Reset failed: " + err.response.data.message);
    }
  };

  return (
    <div className="form">
      <h2>{token ? "Reset Password" : "Forgot Password"}</h2>

      {!token ? (
        <form onSubmit={handleForgotSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          /><br/><br/>
          <button type="submit">Send Reset Link</button>
        </form>
      ) : (
        <form onSubmit={handleResetSubmit}>
          <input
            type="password"
            placeholder="Enter new password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Reset Password</button>
        </form>
      )}

      {message && <p>{message}</p>}
    </div>
  );
}

export default Forget;
