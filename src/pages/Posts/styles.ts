import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 70vh;

  button {
    width: 120px;
    height: 40px;

    background: #FFF;
    border-radius: 5px;
    border: 0;

    color: #3a3a3a;
    font-weight: bold;

    box-shadow: 0px 4px 10px ${shade(0.2, '#F0F0F5')};

    align-items: center;
    display: flex;
    justify-content: center;

    margin-bottom: 20px;

    svg {
      margin-right: 7px;
    }

    &:hover {
      background: ${shade(0.1, '#FFF')};
    }
  }
`;

export const Title = styled.h1`
  font-size: 48px;

  color: #3a3a3a;

  margin: 50px 0;
`;

export const Post = styled.div`
  background: #FFF;
  border-radius: 5px;
  padding: 30px 50px;

  flex-direction: column;

  display: flex;

  color: #3a3a3a;

  box-shadow: 0px 4px 10px ${shade(0.1, '#F0F0F5')};

  margin-bottom: 15px;

  div {
    display: flex;
    align-items: center;

    h2 {
      margin-left: 8px;
      font-size: 12px;
      font-weight: 400;
    }
  }

  h1 {
    font-size: 24px;
    margin-top: 15px;
    text-align: left;
  }

  p {
    margin-top: 15px;
    text-align: justify;
    white-space: pre-line;
  }
`;
