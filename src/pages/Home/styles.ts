import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 70vh;
`;

export const Title = styled.h1`
  font-size: 48px;

  color: #3a3a3a;

  margin: 50px 0;
`;

export const Card = styled.div`
  background: #FFF;
  border-radius: 5px;
  padding: 30px 50px;
  font-size: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  color: #3a3a3a;

  cursor: pointer;

  box-shadow: 0px 4px 10px ${shade(0.1, '#F0F0F5')};

  div {
    display: flex;
    align-items: center;

    h1 {
      margin-left: 12px;
    }
  }

  h1 {
    font-size: 24px;
  }
`;
