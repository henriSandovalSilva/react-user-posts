import React from 'react';
import { useHistory } from 'react-router-dom';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import { BackButton as BackButtonStyled } from './styles';

const BackButton: React.FC = () => {
  const history = useHistory();

  const handleClickBackButton = () => {
    history.goBack();
  };

  return (
    <BackButtonStyled type="submit" onClick={handleClickBackButton}>
      <ArrowBackIcon style={{ color: '#3a3a3a' }} />
      Voltar
    </BackButtonStyled>
  );
};

export default BackButton;
