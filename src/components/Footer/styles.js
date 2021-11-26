import styled from 'styled-components';

export const Container = styled.footer`
  align-items: center;
  background: #d7d7d7;
  border-top: 1px solid black;
  display: flex;
  height: 80px;
  justify-content: space-around;

  div {
    display: flex;

    p {
      font-size: 19px;
    }

    .icon {
      margin-top: 17px;
      margin-left: 15px;
    }
  }
`;
