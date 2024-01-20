import Message from "./components/Message";

export default function App() {
  return(
    <div>
      <h1>Meu componente</h1>
      <br/>
      <Message name="Logan" age={22}/>
      <br/>
      <Message name="Spencer" age={20}/>
    </div>
  );
}
