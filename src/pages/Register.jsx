import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const intialState = {
  username: "",
  email: "",
  password: "",
};
function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(intialState);
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  async function handleRegister(e) {
    e.preventDefault();
    try {
      const res = await axios.post(
        `https://contact-ms-api-app.vercel.app/api/users/register`,
        formData
      );
      const data = res.data;
      toast.success(data.message);
      navigate("/login");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  }
  return (
    <section className="py-3 flex items-center justify-center px-6 bg-[url('/contact.webp')] text-white">
      <div className="max-w-md w-full bg-[#12183f] backdrop-blur-mg shadow-lg rounded-2xl p-6 border border-white/20">
        <h2 className="text-2xl font-bold text-center mb-4">
          Create an Account
        </h2>
        <form className="space-y-3" onSubmit={handleRegister}>
          {/* Username */}
          <div>
            <label className="block text-sm font-medium mb-1">Username</label>
            <input
              type="text"
              className="w-full px-4 py-3 bg-transparent border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-gray-400"
              placeholder="Enter your username"
              required
              name="username"
              value={formData.username}
              onChange={(e) => handleChange(e)}
            />
          </div>

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
            className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300 cursor-pointer"
          >
            Register
          </button>
          <p>
            Already have an Account?{" "}
            <Link to={"/login"} className="underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}

export default Register;
