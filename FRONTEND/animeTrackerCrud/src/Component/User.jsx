import React from "react";
import axios from "axios";

import { useEffect } from "react";

axios.defaults.withCredentials = true;

function User() {
  // Aqui você pode adicionar a lógica para buscar os dados do usuário
  useEffect(() => {
    axios
      .get("http://localhost:8800/api/users/", { withCredentials: true })
      .then((res) => {
        if (res.data.success) {
          console.log(res.data);
        } else {
          console.log(res.data.message);
        }
      });
  }, []);

  return (
    <>
      <div>
        <h1>User</h1>
      </div>
    </>
  );
}

export default User;
