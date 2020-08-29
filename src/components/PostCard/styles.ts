import styled from 'styled-components';
import { shade } from 'polished';

export const PostCard = styled.div`
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
