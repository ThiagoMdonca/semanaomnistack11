import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import './styles.css';

export default function NewIncident() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const ongId = localStorage.getItem('ongId');
  const history = useHistory();
  
  async function handleNewIncidents(e) {
    e.preventDefault();
    const data = {
      title,
      description,
      value,
    }
    try {
      await api.post('incidents', data, {
        headers: {
          Authorization: ongId
        }
      });
      history.push('/profile')
    } catch (err) {
      alert('Erro ao cadastrar usuário tente novamente.')
    }
  }

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be the Hero" />
          <h1>Cadastrar um novo caso</h1>
          <p>Descreve o caso detalhadamente para encontrar um herói para resolver isso</p>

          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#E02041" />
          Voltar pro home
        </Link>
        </section>
        <form onSubmit={handleNewIncidents}>
          <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Titulo do caso" />
          <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Descrição" />
          <input value={value} onChange={e => setValue(e.target.value)} placeholder="Valor em reais" />

          <button className="button" type="submit" >Cadastrar</button>
        </form>
      </div>
    </div>
  );
}
