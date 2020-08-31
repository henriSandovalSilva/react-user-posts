import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import api from '../../services/api';

import { Container } from './styles';

import Header from '../../components/Header';
import Title from '../../components/Title';
import UserCard from '../../components/UserCard';

import { IUser } from '../../interfaces/UserInterface';

const Home: React.FC = () => {
  const { companyName } = useParams();
  const history = useHistory();

  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get<IUser[]>(`users/${companyName}`);
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
    <>
      <Header />

      <Container>
        <Title>
          Funcionários de
          {' '}
          {companyName}
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
    </>
  );
};

export default Home;
