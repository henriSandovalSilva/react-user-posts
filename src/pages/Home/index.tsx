import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import api from '../../services/api';

import { Container, Title, Card } from './styles';

import userIcon from '../../assets/user.svg';

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: AddressGeo;
}

interface AddressGeo {
  lat: string;
  lng: string;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

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

      {users.map((user) => (
        <Card key={user.id} onClick={() => handleCardClick(user.id, user.name)}>
          <div>
            <img src={userIcon} alt="Imagem do funcionário" width="40px" />
            <h1>{user.name}</h1>
          </div>
          <span>{user.email}</span>
        </Card>
      ))}
    </Container>
  );
};

export default Home;
