import styled from 'styled-components';
import { shade } from 'polished';

export const Header = styled.div`
  background: #1976d2;
  height: 70px;
  width: 100vw;
  box-shadow: 0px 4px 10px ${shade(0.1, '#F0F0F5')};
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 2.2em;
  }

  button {
    background: none;
    border: none;

    display: flex;
    align-items: center;

    svg {
      margin-right: 5px;
    }
  }

  h1, button {
    color: #fff;
    margin: 0 10%;

    @media (max-width: 1150px) {
      margin: 0 20px;
    }
  }
`;
