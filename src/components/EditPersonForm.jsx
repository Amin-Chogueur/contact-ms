import { useState } from "react";
import axios from "axios";
import useAuthContext from "../hooks/useAuthContext";
import { toast } from "react-toastify";
function EditPersonForm({ person, onUpdate }) {
  const { token } = useAuthContext();
  const [formData, setFormData] = useState(person);
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function updatePerson() {
    try {
      setLoading(true);
      const res = await axios.put(
        `https://contact-ms-api-app.vercel.app/api/contact/${person._id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = res.data;
      toast.success(data.message);
      onUpdate(formData);
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-4 text-gray-200 ">
      <h1 className="text-2xl text-center">Edit Contact</h1>
      {/* Name Input */}
      <div>
        <label className="font-medium">Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Phone Input */}
      <div>
        <label className="font-medium">Phone:</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Email Input */}
      <div>
        <label className="font-medium">Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Address Input */}
      <div>
        <label className="font-medium">Address:</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Category Dropdown */}
      <div>
        <label className="font-medium">Category:</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg bg-[#0a0f2c] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="Work">Work</option>
          <option value="Friend">Friend</option>
          <option value="Family">Family</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Buttons */}
      <div className="flex justify-between mt-4">
        <button
          onClick={updatePerson}
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 cursor-pointer"
          disabled={loading}
        >
          {loading ? "Saving..." : "Save"}
        </button>
        <button
          onClick={() => onUpdate(person)}
          className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 cursor-pointer"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default EditPersonForm;
