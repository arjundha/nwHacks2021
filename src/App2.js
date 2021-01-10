import logo from './book.png';
import './App2.css';

// import Button from 'react-bootstrap/Button'
import { Button, Alert } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import SearchBar from './Components/searchbar';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Alert>This book takes ___ hours to read</Alert>
        <Button variant="outline-primary">Add your time</Button>
      <Alert> Search Another Book</Alert>
      <SearchPage></SearchPage>
      </header>
    </div>
  );
}

export default App;