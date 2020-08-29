import React, { useState, ChangeEvent, MouseEvent } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Container, Form } from './styles';

import Title from '../../components/Title';

const Login: React.FC = () => {
  const history = useHistory();

  const [company, setCompany] = useState<string>('');

  const handleSelectCompany = (event: ChangeEvent<HTMLSelectElement>) => {
    setCompany(event.currentTarget.value);
  };

  function handleLogin(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    if (company) {
      history.push(`/home/${company}`);
    } else {
      toast.warn('Ops! Você precisa selecionar a empresa.');
    }
  }

  return (
    <Container>
      <Title>
        Faça login na plataforma!
      </Title>

      <Form action="">
        <input placeholder="Digite o e-mail" />
        <input placeholder="Digite a senha" />

        <select name="company" id="company" onChange={handleSelectCompany}>
          <option>Selecione a sua empresa</option>
          <option value="Romaguera-Crona">Romaguera-Crona</option>
          <option value="Deckow-Crist">Deckow-Crist</option>
          <option value="Romaguera-Jacobson">Romaguera-Jacobson</option>
          <option value="Robel-Corkery">Robel-Corkery</option>
          <option value="Keebler LLC">Keebler LLC</option>
          <option value="Considine-Lockman">Considine-Lockman</option>
          <option value="Johns Group">Johns Group</option>
          <option value="Abernathy Group">Abernathy Group</option>
          <option value="Yost and Sons">Yost and Sons</option>
          <option value="Hoeger LLC">Hoeger LLC</option>
        </select>

        <button type="submit" onClick={handleLogin}>Entrar</button>
      </Form>
    </Container>
  );
};

export default Login;
