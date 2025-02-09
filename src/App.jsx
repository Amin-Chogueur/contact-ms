import { Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import useAuthContext from "./hooks/useAuthContext";
import NewContact from "./pages/NewContact";
import Person from "./components/Person";
import { ToastContainer } from "react-toastify";

function App() {
  const { token } = useAuthContext();
  return (
    <div className="flex flex-col">
      <Navbar />
      <main className=" min-h-[calc(100vh-125px)] ">
        <Routes>
          <Route path="/" element={<Home />} />
          {token && <Route path="/contact" element={<Contact />} />}
          {token && <Route path="/contact/new" element={<NewContact />} />}
          {token && <Route path="/contact/:id" element={<Person />} />}
          <Route path="/about" element={<About />} />
          {!token && <Route path="/login" element={<Login />} />}
          {!token && <Route path="/register" element={<Register />} />}
        </Routes>
      </main>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
