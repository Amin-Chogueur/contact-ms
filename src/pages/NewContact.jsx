import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";
import { toast } from "react-toastify";

function NewContact() {
  const { token, API_URL } = useAuthContext();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    category: "Work",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await axios.post(`${API_URL}/api/contact/new`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = res.data;
      toast.success(data.message);
      navigate("/contact");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-[#0a0f2c] p-6 shadow-lg rounded-2xl space-y-4 my-6"
    >
      <h2 className="text-xl font-semibold text-center">Contact Form</h2>

      {/* Name */}
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Full Name"
        required
        className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Phone */}
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone Number"
        required
        className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Email */}
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email Address"
        className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Address */}
      <input
        type="text"
        name="address"
        value={formData.address}
        onChange={handleChange}
        placeholder="Address"
        className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Category Selection */}
      <select
        name="category"
        value={formData.category}
        onChange={handleChange}
        className="w-full p-2 border rounded-lg bg-[#0a0f2c] focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      >
        <option value="Work">Work</option>
        <option value="Friend">Friend</option>
        <option value="Family">Family</option>
        <option value="Other">Other</option>
      </select>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer"
      >
        Submit
      </button>
    </form>
  );
}

export default NewContact;
