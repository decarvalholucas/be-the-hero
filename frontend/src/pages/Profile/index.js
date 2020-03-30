import React, { useState, useEffect } from "react";

import { Link, useHistory } from "react-router-dom";

import { FiPower, FiTrash2 } from "react-icons/fi";

import api from "../../services/api";

import logoImage from "../../assets/logo.svg";

import { Container } from "./styles";

export default function Profile() {
  const [incidents, setIncidents] = useState([]);
  const history = useHistory();

  useEffect(() => {
    api
      .get("/profile", {
        headers: {
          authorization: localStorage.ongId
        }
      })
      .then(response => {
        setIncidents(response.data);
      })
      .catch(() => alert("Ops, erro ao renderizar a página!"));
  }, []);

  async function handleDeleteIncident(id) {
    await api.delete(`/incidents/${id}`, {
      headers: {
        authorization: localStorage.ongId
      }
    });
    setIncidents(incidents.filter(incident => incident.id !== id));
  }

  function handleLogout() {
    localStorage.clear();
    history.push("/");
  }

  return (
    <Container>
      <header>
        <img src={logoImage} alt="Be The Hero" />
        <span>Bem vindo, {localStorage.getItem("ongName")}</span>
        <Link className="button" to="/incident/new">
          Cadastrar novo caso
        </Link>
        <button type="submit" onClick={handleLogout}>
          <FiPower size={18} color="#E02041" />
        </button>
      </header>
      <h1>Casos cadastrados</h1>
      <ul>
        {incidents.map(incident => (
          <li key={incident.id}>
            <strong>CASO:</strong>
            <p>{incident.title}</p>

            <strong>DESCRIÇÃO:</strong>
            <p>{incident.description}</p>

            <strong>VALOR:</strong>
            <p>
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
              }).format(incident.value)}
            </p>

            <button
              type="button"
              onClick={() => handleDeleteIncident(incident.id)}
            >
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </ul>
    </Container>
  );
}
