import logo from './book.png';
import './App.css';
// import Button from 'react-bootstrap/Button'
import { Button, Alert } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Alert>This is a button</Alert>
        <Button>Test Button</Button>
      </header>
    </div>
  );
}

export default App;
