import { Container, Header, Message, Title } from "./styles";

export default function App() {
  return (
    <Container>
      <Header>
        <Title href="/">Hands On ReactJS</Title>
      </Header>

      <Message color="0000FF" fontSize={35}>Bem vindo(a)!</Message>
    </Container>
  );
}
