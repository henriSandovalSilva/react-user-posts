import React from 'react';
import PropTypes from 'prop-types';

import userIcon from '../../assets/user.svg';

import { UserCard as UserCardStyled } from './styles';

const UserCard: React.FC<any> = ({
  userName, userEmail, ...props
}) => (
  <UserCardStyled {...props}>
    <div>
      <img src={userIcon} alt="Imagem do funcionário" width="40px" />
      <h1>{userName}</h1>
    </div>

    <span>{userEmail}</span>
  </UserCardStyled>
);

UserCard.propTypes = {
  userName: PropTypes.string.isRequired,
  userEmail: PropTypes.string.isRequired,
  props: PropTypes.any,
};

export default UserCard;
