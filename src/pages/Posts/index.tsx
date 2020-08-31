import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import api from '../../services/api';

import { Container } from './styles';

import Header from '../../components/Header';
import Title from '../../components/Title';
import BackButton from '../../components/BackButton';
import PostCard from '../../components/PostCard';

import { IUserPost } from '../../interfaces/UserPostInterface';

const Home: React.FC = () => {
  const { userId, userName } = useParams();

  const [userPosts, setUserPosts] = useState<IUserPost[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get<IUserPost[]>(`users/${userId}/posts`);
        setUserPosts([...response.data]);
      } catch (e) {
        console.error(e);
      }
    }
    fetchData();
  }, [userId]);

  return (
    <>
      <Header />
      <Container>
        <Title>
          Posts de
          {' '}
          {userName}
        </Title>

        <BackButton />

        {userPosts.length ? userPosts.map((userPost) => (
          <PostCard
            userName={userPost.user.name}
            postTitle={userPost.post.title}
            postBody={userPost.post.body}
          />
        )) : (<p>Ops! Nenhum post encontrado...</p>)}

      </Container>
    </>
  );
};

export default Home;
