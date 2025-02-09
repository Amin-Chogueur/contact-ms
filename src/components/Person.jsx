import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import PersonDetails from "./PersonDetails";
import EditPersonForm from "./EditPersonForm";
import useAuthContext from "../hooks/useAuthContext";
import { toast } from "react-toastify";
function Person() {
  const { token } = useAuthContext();
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [person, setPerson] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  async function getPerson(id) {
    try {
      setLoading(true);
      const res = await axios.get(`http://localhost:4000/api/contact/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const { person } = res.data;
      setPerson(person);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function deletePerson(id) {
    try {
      setLoading(true);
      const res = await axios.delete(
        `http://localhost:4000/api/contact/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = res.data;
      navigate("/contact");
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  }

  function handleUpdate(updatedPerson) {
    setPerson(updatedPerson);
    setIsEditing(false); // Exit edit mode after saving
  }

  useEffect(() => {
    getPerson(id);
  }, [id]);

  if (loading) {
    return <p className="text-2xl text-center mt-10">Loading...</p>;
  }

  return (
    <div className="bg-gray-900 shadow-md rounded-lg p-4 w-full max-w-md mx-auto my-10">
      {isEditing ? (
        <EditPersonForm person={person} onUpdate={handleUpdate} />
      ) : (
        <PersonDetails
          person={person}
          onEdit={() => setIsEditing(true)}
          onDelete={deletePerson}
        />
      )}
    </div>
  );
}

export default Person;
