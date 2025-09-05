import { useState } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL; // Deployed backend
const DASHBOARD_URL = import.meta.env.VITE_DASHBOARD_URL; // Deployed dashboard

function SignUp() {

    console.log("API_URL:", API_URL);
  console.log("DASHBOARD_URL:", DASHBOARD_URL);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);



  const handleSubmit = (e) => {
  e.preventDefault();
  // Optional: show a message before redirect
  // setMessage("Redirecting...");

  // Redirect immediately
  window.location.href = DASHBOARD_URL;
};





  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setMessage("");
  //   setLoading(true);

  //   if (!name || !email || !password) {
  //     setMessage("⚠️ All fields are required!");
  //     setLoading(false);
  //     return;
  //   }

  //   try {
  //     const res = await axios.post(
  //       `${API_URL}/signup`,
  //       { name, email, password },
  //       { headers: { "Content-Type": "application/json" } }
  //     );

  //     if (res.status) {
  //       setMessage(res.data.message || "✅ Signup successful!");
  //       // Redirect to dashboard after short delay
  //       setTimeout(() => {
  //         window.location.href = DASHBOARD_URL;
  //       }, 1000);
  //     } else {
  //       setMessage(res.data.error || "❌ Signup failed!");
  //     }
  //   } catch (err) {
  //     console.error("Signup error:", err);
  //     if (err.response && err.response.data && err.response.data.error) {
  //       setMessage(`❌ ${err.response.data.error}`);
  //     } else {
  //       setMessage("❌ Signup failed. Check your connection.");
  //     }
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <div className="container">
      <div className="row text-center mt-5">
        <h3>Sign Up</h3>
        <p className="text-muted">Create your account or track your application</p>

        {/* Name */}
        <div className="input-group mb-3 mt-3" style={{ width: "30%", margin: "0 auto" }}>
          <span className="input-group-text">Name</span>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>

        {/* Email */}
        <div className="input-group mb-3" style={{ width: "30%", margin: "0 auto" }}>
          <span className="input-group-text">Email</span>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>

        {/* Password */}
        <div className="input-group mb-3" style={{ width: "30%", margin: "0 auto" }}>
          <span className="input-group-text">Password</span>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
        </div>

        {/* Submit button */}
        <button
          onClick={handleSubmit}
          className="btn btn-primary fs-5 mt-3"
          style={{ width: "20%", margin: "0 auto" }}
          disabled={loading}
        >
          {loading ? "Signing Up..." : "Sign Up"}
        </button>

        {/* Message */}
        {message && <p className="mt-3 text-center">{message}</p>}
      </div>
    </div>
  );
}

export default SignUp;
