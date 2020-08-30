import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { CompanyContext } from '../../context/CompanyContext';

import { Header as HeaderStyled } from './styles';

const Header: React.FC = () => {
  const { companyName } = useContext(CompanyContext);

  const history = useHistory();

  const handleLogout = () => {
    history.push('../../login');
  };

  return (
    <HeaderStyled>
      <h1>
        {companyName}
      </h1>

      <button type="submit" onClick={handleLogout}>
        <ExitToAppIcon style={{ color: '#fff' }} />

        Sair
      </button>
    </HeaderStyled>
  );
};

export default Header;
