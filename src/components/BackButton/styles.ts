import styled from 'styled-components';
import { shade } from 'polished';

export const BackButton = styled.button`
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
`;
