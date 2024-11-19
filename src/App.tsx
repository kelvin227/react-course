import ListGroup from "./component/ListGroup";
import Message from "./call";

function App() {
  let list = [
    'paris',
    'sent',
    'germany'

];
  return <div>
    <ListGroup list={list} heading='Cities'/>
    <Message></Message>
    </div>
  
}

export default App;