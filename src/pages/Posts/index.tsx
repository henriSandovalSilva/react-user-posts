import React from 'react';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Container, Title, Post } from './styles';

import userIcon from '../../assets/user.svg';

const Home: React.FC = () => (
  <Container>
    <Title>
      Posts de Leanne Graham
    </Title>

    <button type="submit">
      <ArrowBackIcon style={{ color: '#3a3a3a' }} />
      Voltar
    </button>

    <Post>
      <div>
        <img src={userIcon} alt="Imagem do funcionário" width="20px" />
        <h2>Leanne Graham</h2>
      </div>
      <h1>sunt aut facere repellat provident occaecati excepturi optio reprehenderit</h1>

      <p>
        quia et suscipit \n
        suscipit recusandae consequuntur expedita et cum\n
        reprehenderit molestiae ut ut quas totam\n
        nostrum rerum est autem sunt rem eveniet architecto
      </p>
    </Post>
  </Container>
);

export default Home;
