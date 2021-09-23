import './App.css';
// Components
import Nav from './layouts/Nav';
import Dashboard from './layouts/Dashboard';
// Semantic-UI
import { Container } from 'semantic-ui-react';

function App() {
  return (
    <div className="App">
      <Nav />
      <Container className="main">
        <Dashboard />
      </Container>
    </div>
  );
}

export default App;
