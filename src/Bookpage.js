import logo from './book.png';
import './App.css';

// import Button from 'react-bootstrap/Button'
import { Button, Alert } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import SearchBar from './Components/searchbar';


function Bookpage() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
    
            <Alert>Search a book to see how long it takes to read it!</Alert>
            
            
            <SearchBar></SearchBar>
            <span></span>
            <Button>Search</Button>
          </header>
        </div>
      );
}

export default Bookpage;
