import React from 'react';
import PropTypes from 'prop-types';

import { PostCard as PostCardStyled } from './styles';

import userIcon from '../../assets/user.svg';

interface IPostCardType {
  userName: string,
  postTitle: string,
  postBody: string,
}

const PostCard: React.FC<IPostCardType> = ({
  userName, postTitle, postBody,
}: IPostCardType) => (
  <PostCardStyled>
    <div>
      <img src={userIcon} alt="Imagem do funcionário" width="20px" />
      <h2>{userName}</h2>
    </div>

    <h1>{postTitle}</h1>

    <p>{postBody}</p>
  </PostCardStyled>
);

PostCard.propTypes = {
  userName: PropTypes.string.isRequired,
  postTitle: PropTypes.string.isRequired,
  postBody: PropTypes.string.isRequired,
};

export default PostCard;
