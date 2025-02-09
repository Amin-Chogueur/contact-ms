import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";
import { toast } from "react-toastify";
const intialState = {
  email: "",
  password: "",
};
function Login() {
  const navigate = useNavigate();
  const { setUserName, setToken, API_URL } = useAuthContext();
  const [formData, setFormData] = useState(intialState);
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  async function handleLogin(e) {
    e.preventDefault();
    try {
      const res = await axios.post(`${API_URL}/api/users/login`, formData);
      const { message, token, username } = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem("username", username);
      setToken(token);
      setUserName(username);
      toast.success(message);
      navigate("/contact");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }
  return (
    <section className="h-[calc(100vh-120px)] flex items-center justify-center px-6 bg-[url('/contact.webp')] text-white">
      <div className="max-w-md w-full bg-[#12183f] backdrop-blur-md shadow-lg rounded-2xl p-8 border border-white/20">
        <h2 className="text-2xl font-bold text-center mb-6">
          Login to your Account
        </h2>
        <form className="space-y-5" onSubmit={handleLogin}>
          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-3 bg-transparent border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-gray-400"
              placeholder="Enter your email"
              required
              name="email"
              value={formData.email}
              onChange={(e) => handleChange(e)}
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-3 bg-transparent border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-gray-400"
              placeholder="Enter your password"
              required
              name="password"
              value={formData.password}
              onChange={(e) => handleChange(e)}
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full mt-4 mb-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300 cursor-pointer"
          >
            Login
          </button>
        </form>
        <p>
          Don`t have an Account?{" "}
          <Link to={"/register"} className="underline">
            Register
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Login;
