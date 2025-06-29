import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { loginUser } from "../api/api";

export default function Login() {
  const [credentials, setCredentials] = React.useState({
    email: "",
    password: "",
  });
  const [status, setStatus] = React.useState("idle");
  const [error, setError] = React.useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  function handleChange(e) {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setStatus("submitting");
      const response = await loginUser(credentials);
      localStorage.setItem("loggedIn", true);
      navigate(location.state?.from || "/host", { replace: true });
    } catch (err) {
      setError(err.message);
      console.log(err);
    } finally {
      setStatus("idle");
    }
  }

  return (
    <section className="flex flex-col items-center justify-center flex-1">
      <div className="flex flex-col gap-8 lg:max-w-2xl w-[80%]">
        {location.state?.message && (
          <h3 className="text-center text-red-400 font-semibold">
            {location.state?.message}
          </h3>
        )}
        <h1 className="text-4xl text-center">Sign into your account</h1>
        <h3 className="text-center text-red-400 font-semibold">
          {error && "Invalid Credentials"}
        </h3>
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          <div className="flex flex-col gap-1">
            <input
              type="email"
              placeholder="Email Address"
              className="bg-white p-4 border border-gray-300 rounded"
              name="email"
              value={credentials.email}
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              className="bg-white p-4 border border-gray-300 rounded-md"
              value={credentials.password}
              name="password"
              onChange={handleChange}
            />
          </div>
          <button className="bg-[#FF8C38] p-3 text-white font-semibold text-lg rounded-lg active:scale-[99%]">
            Log In
          </button>
        </form>
      </div>
    </section>
  );
}
