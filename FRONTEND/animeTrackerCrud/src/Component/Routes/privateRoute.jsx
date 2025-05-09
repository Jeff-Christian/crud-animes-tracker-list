import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Home from "./Home";

axios.defaults.withCredentials = true;

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/users/`)
      .then((res) => {
        if (!res.data.success) {
          navigate("/login");
        }
        setLoading(false);
      })
      .catch(() => navigate("/login"));
  }, [navigate]);

  if (loading) return <div>Carregando...</div>;

  return children;
};

export default ProtectedRoute;
