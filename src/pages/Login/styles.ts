import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
`;

export const Title = styled.h1`
  font-size: 48px;

  color: #3a3a3a;
`;

export const Form = styled.form`
  margin-top: 40px;

  width: 60%;
  @media (max-width: 800px) {
    width: 80%;
  }

  @media (max-width: 700px) {
    width: 90%;
  }

  @media (max-width: 600px) {
    width: 100%;
  }

  height: 350px;

  display: flex;
  flex-direction: column;
  align-items: center;

  input, select, option {
    flex: 1;
    background: #FFF;
    height: 70px;
    width: 100%;
    padding: 0 24px;
    border: 0;
    border-radius: 5px;
    margin-bottom: 20px;
    box-shadow: 0px 4px 10px ${shade(0.1, '#F0F0F5')};
  }

  button {
    height: 70px;
    width: 100%;
    background: #1976d2;
    border-radius: 5px;
    border: 0;
    color: #FFF;
    font-weight: bold;
    box-shadow: 0px 4px 10px ${shade(0.2, '#F0F0F5')};

    &:hover {
      background: ${shade(0.2, '#1976d2')};
    }
  }
`;
