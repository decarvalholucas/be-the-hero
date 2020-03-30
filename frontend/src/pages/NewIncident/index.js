import React, { useState } from "react";

import { Link } from "react-router-dom";

import api from "../../services/api";

import logoImage from "../../assets/logo.svg";
import { FiArrowLeft } from "react-icons/fi";

import { Container } from "./styles";

export default function NewIncident() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  async function handleNewIncident(event) {
    event.preventDefault();
    const data = {
      title,
      description,
      value: price
    };
    try {
      const response = await api.post("/incidents", data, {
        headers: {
          authorization: localStorage.getItem("ongId")
        }
      });
      alert(`Caso ID ${response.data.id} cadastrado com sucesso!`);
    } catch {
      alert("Ops, deu algo errado, tente novamente!");
    }
  }

  return (
    <Container>
      <div className="content">
        <section>
          <img src={logoImage} alt="Be The Hero" title="Be The Hero" />
          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </p>
          <Link className="back-link" to="/profile" title="Voltar para Home">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar para Home
          </Link>
        </section>
        <form onSubmit={handleNewIncident}>
          <input
            type="text"
            placeholder="Título do caso"
            value={title}
            onChange={event => setTitle(event.target.value)}
          />
          <textarea
            placeholder="Descrição"
            value={description}
            onChange={event => setDescription(event.target.value)}
          />
          <input
            type="text"
            placeholder="Valor em Reais"
            value={price}
            onChange={event => setPrice(event.target.value)}
          />
          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </Container>
  );
}
