import logo from './book.png';
import './App.css';

// import Button from 'react-bootstrap/Button'
import { Button, Alert } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import SearchBar from './Components/nonconstsearchbar'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Alert>Search a book to see how long it takes to read it!</Alert>
        
        
        <SearchBar placeholder_string = "Type the name of the book here!"></SearchBar>
        <span></span>
        <Button>Search</Button>
      </header>
    </div>
  );
}

export default App;
