import React, { useState } from "react";

import logoImage from "../../assets/logo.svg";
import heroesImage from "../../assets/heroes.png";
import { FiLogIn } from "react-icons/fi";

import { Link, useHistory } from "react-router-dom";

import api from "../../services/api";

import { Container } from "./styles";

export default function Logon() {
  const [id, setId] = useState('');
  const history = useHistory();

  async function handleLogin(event) {
    event.preventDefault();
    const data = { id };
    try {
      const response = await api.post('/sessions', data);
      localStorage.setItem('ongName', response.data.name);
      localStorage.setItem('ongId', id);
      history.push('/profile');
    } catch {
      alert("Opss, erro! Verifique o ID da ONG");
    }
  }


  return ( 
    <Container>
      <section className="form">
        <img src={logoImage} alt="Be The Hero" title="Be The Hero" />
        <form onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>
          <input type="text" placeholder="Sua ID" value={id} onChange={event => setId(event.target.value)} />
          <button className="button" type="submit">
            Entrar
          </button>
          <Link className="back-link" to="/register" title="Não tenho cadastro">
            <FiLogIn size={16} color="#e02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={heroesImage} alt="Heroes" title="Heroes" />
    </Container>
  );
}
