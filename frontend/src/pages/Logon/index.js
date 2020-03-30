import React from "react";

import logoImage from "../../assets/logo.svg";
import heroesImage from "../../assets/heroes.png";
import { FiLogIn } from "react-icons/fi";

import { Link } from "react-router-dom";

import { Container } from "./styles";

export default function Logon() {
  return (
    <Container>
      <section className="form">
        <img src={logoImage} alt="Be The Hero" title="Be The Hero" />
        <form>
          <h1>Faça seu logon</h1>
          <input type="text" placeholder="Sua ID" />
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
