import React from "react";
import axios from "axios";

import logo from "../assets/Images/LOGO BRANCO.png";
import "../Component/CSS/User.css";

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

axios.defaults.withCredentials = true;

function User() {
  // Aqui você pode adicionar a lógica para buscar os dados do usuário
  const [user, setUser] = useState({});
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8800/api/users/", { withCredentials: true })
      .then((res) => {
        if (res.data.success) {
          setUser(res.data.user); // aqui vem { id, name, email }
        } else {
          console.log(res.data.message);
        }
      });
  }, []);

  console.log(user);

  const ImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const SubmitPhoto = () => {
    const userID = user.id;
    const imageRef = ref(storage, `avatars/${userID}`);
    uploadBytes(imageRef, image).then(() => {
      getDownloadURL(imageRef)
        .then((url) => {
          setUrl(url);
          console.log(url);
        })
        .catch((error) => {
          console.log(error.message, "vixe, deu zica zé, imagem não carregada");
          setImage(null);
        })
        .catch((error) => {
          console.log(error.message);
        });
    });
  };

  const sendUrl = async (url, token) => {
    try {
      const response = await axios.put(
        "http://localhost:8800/api/users/profile",
        { avatarUrl: url },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Avatar atualizado no banco com sucesso!", response.data);
      navigate("/");
    } catch (error) {
      console.log("Erro ao atualizar avatar no backend:", error.message);
    }
  };

  return (
    <>
      <div className="UserContainer">
        <img src={logo} alt="logo anime Tracker" className="logo" />
        <div className="containerUser">
          <div className="infosContainer">
            <h1 className="UserInfos">Informações da sua conta</h1>

            <div className="avatarContainer">
              <img src={url} className="avatarPhoto" />
              <input
                type="file"
                onChange={ImageChange}
                className="avatar"
              ></input>
              <button onClick={SubmitPhoto} className="changeAvatar">
                Change Photo
              </button>
            </div>

            <label htmlFor="">Nome</label>
            <div className="nameContainer">
              <input type="text" value={user.name} />
              <button className="changeAvatar">Change Name</button>
            </div>

            <label>Email</label>
            <p>{user.email}</p>
          </div>

          <button onClick={() => sendUrl(url)} className="save">
            Salvar alterações
          </button>
        </div>
      </div>
    </>
  );
}

export default User;
