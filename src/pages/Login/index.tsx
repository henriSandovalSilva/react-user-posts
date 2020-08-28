import React from 'react';

import { Container, Title, Form } from './styles';

const Login: React.FC = () => (
  <Container>
    <Title>
      Faça login na plataforma!
    </Title>

    <Form action="">
      <input placeholder="Digite o e-mail" />
      <input placeholder="Digite a senha" />

      <select name="company" id="company">
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

      <button type="submit">Entrar</button>
    </Form>
  </Container>
);

export default Login;
