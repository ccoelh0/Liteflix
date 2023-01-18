import Container from './components/container/container'
import Provider from './components/context/context';

function App() {
  return (
    <Provider>
      <Container/>
    </Provider>
  );
}

export default App;