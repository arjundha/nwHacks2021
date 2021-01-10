import logo from './book.png';
import './readtime.css';


import 'bootstrap/dist/css/bootstrap.min.css'
import NameForm from './Components/NameForm';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <NameForm></NameForm>
      </header>
    </div>
  );
}

export default App;