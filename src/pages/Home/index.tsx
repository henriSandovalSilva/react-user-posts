import React from 'react';

import { Container, Title, Card } from './styles';

import userIcon from '../../assets/user.svg';

const Home: React.FC = () => (
  <Container>
    <Title>
      Lista de funcionários
    </Title>

    <Card>
      <div>
        <img src={userIcon} alt="Imagem do funcionário" width="40px" />
        <h1>
          Leanne Graham
        </h1>
      </div>
      <span>Sincere@april.biz</span>
      <span>5 posts</span>
    </Card>
  </Container>
);

export default Home;
