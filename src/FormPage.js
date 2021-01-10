import logo from './book.png';
import './readtime.css';


import 'bootstrap/dist/css/bootstrap.min.css'
import NameForm from './Components/NameForm';
import Footer from './Components/footer'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <container>
        <img src={logo} className="App-logo" alt="logo" />
        </container>
        <span></span>
        <NameForm></NameForm>
      </header>
      <Footer></Footer>
    </div>
  );
}

export default App;