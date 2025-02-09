import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaPhoneAlt } from "react-icons/fa";
import useAuthContext from "../hooks/useAuthContext";

function Contact() {
  const { token, API_URL } = useAuthContext();
  const [loading, setLoading] = useState(false);
  const [people, setPeople] = useState([]);
  const [error, setError] = useState("");
  const [filterdName, setFilterdName] = useState("");
  const [category, setCategory] = useState("All");
  const filteredPeople = people.filter(
    (person) =>
      person.name.toLowerCase().includes(filterdName.trim().toLowerCase()) &&
      (category === "All" || person.category === category)
  );

  async function getPeople(token) {
    try {
      setLoading(true);
      const res = await axios.get(`${API_URL}/api/contact`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = res.data;
      const { people } = data;
      setPeople(people);
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    if (token) {
      getPeople(token);
    }
  }, [token]);
  return (
    <section>
      <div className="max-w-4xl mx-auto flex justify-between items-center  p-6">
        <h1 className="text-3xl font-bold ">My Contacts</h1>
        <Link
          to={"/contact/new"}
          className="bg-[#0a0f2c] font-bold p-2 rounded cursor-pointer"
        >
          Create Contact
        </Link>
      </div>
      <hr className="max-w-4xl mx-auto my-5 bg-white text-yellow-50 " />
      <div className="max-w-4xl mx-auto flex justify-between gap-5 items-center px-[20px] ">
        <input
          type="text"
          name="filterdName"
          value={filterdName}
          onChange={(e) => setFilterdName(e.target.value)}
          placeholder="Search by name . . . "
          required
          className="w-full md:w-2xl mx-auto p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 my-5"
        />
        <select
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 border rounded-lg bg-[#0a0f2c] focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="All">All Category</option>
          <option value="Work">Work</option>
          <option value="Friend">Friend</option>
          <option value="Family">Family</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {!loading && error && <p className="text-center text-2xl ">{error}</p>}
      {!loading && !error && people.length === 0 && (
        <p className="text-center text-2xl">
          You don`t have any contact in your list
        </p>
      )}
      {!loading && filteredPeople.length === 0 && (
        <p className="text-center text-2xl">No contact found</p>
      )}
      <div className=" flex flex-col items-center justify-start p-6  text-white">
        {/* Responsive Table Wrapper */}
        <div className="w-full max-w-4xl bg-white/10 backdrop-blur-md p-4 rounded-xl shadow-md border border-white/20 overflow-hidden">
          <div className="overflow-x-auto">
            {loading ? (
              <p className="text-center text-2xl">Loading...</p>
            ) : (
              <table className="w-full min-w-[600px] border-collapse">
                <thead>
                  <tr className="bg-white/20 text-left">
                    <th className="p-2 ">Call</th>
                    <th className="p-3">Name</th>
                    <th className="p-3">Phone</th>
                    <th className="p-3">Category</th>
                    <th className="p-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredPeople.map((person) => (
                    <tr key={person._id} className="border-b border-white/20">
                      <td className="p-1 cursor-pointer  ">
                        <a href={`tel:${person.phone}`}>
                          <FaPhoneAlt />
                        </a>
                      </td>
                      <td className="p-3">{person.name}</td>
                      <td className="p-3">{person.phone}</td>
                      <td className="p-3">{person.category}</td>
                      <td className="p-3">
                        <Link
                          to={`/contact/${person._id}`}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition"
                        >
                          See More
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
