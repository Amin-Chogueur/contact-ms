import useAuthContext from "../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
function LogoutButton({ setIsOpen }) {
  const { setUserName, setToken } = useAuthContext();
  const navigate = useNavigate();
  function handleLogout() {
    setToken("");
    setUserName("");
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    navigate("/login");
    toast.success("Logout Successful");
    setIsOpen(false);
  }
  return (
    <button
      className="bg-red-600 p-1 rounded cursor-pointer"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
}

export default LogoutButton;
