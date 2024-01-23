import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  width: 100%;
  height: 70px;
  background-color: #964B00;
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const Title = styled.a`
  font-size: 35px;
  color: #00FF00;
  text-decoration: none;
`;

export const Message = styled.h1`
  font-size: ${props => `${props.fontSize}px`};
  color: ${props => `#${props.color}`};
`;
