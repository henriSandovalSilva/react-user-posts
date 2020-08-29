import React from 'react';
import PropTypes from 'prop-types';

import { Title as TitleStyled } from './styles';

const Title: React.FC = ({ children }) => (
  <TitleStyled>
    {children}
  </TitleStyled>
);

Title.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Title;
