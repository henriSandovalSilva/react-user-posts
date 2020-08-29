import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import api from '../../services/api';

import { Container } from './styles';

import Title from '../../components/Title';
import BackButton from '../../components/BackButton';
import PostCard from '../../components/PostCard';

import { UserPost } from '../../interfaces/UserPost';

const Home: React.FC = () => {
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

  return (
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
  );
};

export default Home;
