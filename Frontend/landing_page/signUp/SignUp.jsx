import { useState } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;       // backend
const DASHBOARD_URL = import.meta.env.VITE_DASHBOARD_URL; // dashboard



function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${API_URL}/signup`, {
        name,
        email,
        password,
      });

      if (res.status === 201) {
        // Optional: show success message
        setMessage(res.data.message || "Signup successful!");

        // Redirect to dashboard after 1 second
        setTimeout(() => {
          window.location.href = DASHBOARD_URL;
        }, 1000);
      } else {
        setMessage(res.data.error || "Signup failed!");
      }
    } catch (err) {
      console.error(err);
      alert("Signup failed!");
    }
  };

  return (
    <div className="container">
      <div className="row text-center mt-5">
        <h3>Sign Up Now</h3>
        <p className="text-muted ms-4">Or track your existing application</p>

        {/* Username */}
        <div
          className="input-group mb-3 mt-3"
          style={{ width: "30%", marginLeft: "35%" }}
        >
          <span className="input-group-text">Name</span>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Email */}
        <div
          className="input-group mb-3 mt-3"
          style={{ width: "30%", marginLeft: "35%" }}
        >
          <span className="input-group-text">Email</span>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password */}
        <div
          className="input-group mb-3 mt-3"
          style={{ width: "30%", marginLeft: "35%" }}
        >
          <span className="input-group-text">Password</span>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>

      <button
        onClick={handleSubmit}
        className="btn btn-primary fs-5 mt-3"
        style={{ width: "20%", marginLeft: "36%" }}
      >
        Sign Up Now
      </button>

      {message && <p className="mt-3 text-center">{message}</p>}
    </div>
  );
}

export default SignUp;
