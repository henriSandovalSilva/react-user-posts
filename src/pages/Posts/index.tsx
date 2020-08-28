import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import api from '../../services/api';

import { Container, Title, Post } from './styles';

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

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface UserPost {
  post: Post,
  user: User
}

const Home: React.FC = () => {
  const history = useHistory();
  const { userId, userName } = useParams();

  const [userPosts, setUserPosts] = useState<UserPost[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get<UserPost[]>(`users/${userId}/posts`);
        setUserPosts([...response.data]);
      } catch (e) {
        console.error(e);
      }
    }
    fetchData();
  }, [userId]);

  const handleClickBackButton = () => {
    history.goBack();
  };

  return (
    <Container>
      <Title>
        Posts de
        {' '}
        {userName}
      </Title>

      <button type="submit" onClick={handleClickBackButton}>
        <ArrowBackIcon style={{ color: '#3a3a3a' }} />
        Voltar
      </button>

      {userPosts.map((userPost) => (
        <Post>
          <div>
            <img src={userIcon} alt="Imagem do funcionário" width="20px" />
            <h2>{userPost.user.name}</h2>
          </div>

          <h1>{userPost.post.title}</h1>

          <p>{userPost.post.body}</p>
        </Post>
      ))}

    </Container>
  );
};

export default Home;
