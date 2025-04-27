import Greeting from './Greeting';
import UserList from './UserList';

function App() {
  return (
    <div>
      <UserList />
      <Greeting name="Nicole" messageCount={5} />
    </div>
  );
}

export default App;
