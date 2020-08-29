import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import api from '../../services/api';

import { Container } from './styles';

import Title from '../../components/Title';
import UserCard from '../../components/UserCard';

import { User } from '../../interfaces/User';

const Home: React.FC = () => {
  const history = useHistory();
  const { companyName } = useParams();

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get<User[]>(`users/${companyName}`);
        setUsers([...response.data]);
      } catch (e) {
        console.error(e);
      }
    }
    fetchData();
  }, [companyName]);

  const handleCardClick = (userId: number, userName: string): void => {
    history.push(`../posts/${userId}/${userName}`);
  };

  return (
    <Container>
      <Title>
        Lista de funcionários
      </Title>

      {users.length ? users.map((user) => (
        <UserCard
          key={user.id}
          userName={user.name}
          userEmail={user.email}
          onClick={() => handleCardClick(user.id, user.name)}
        />
      )) : (<p>Ops! Nenhum funcionário encontrado...</p>)}
    </Container>
  );
};

export default Home;
