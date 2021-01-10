import React from "react";
import logo from '../book.png';

//import '../readtime.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import NameForm from '../Components/NameForm';
//import "../readtime.css";

export default function Home() {
  return (

    <div className="App">
      <header className="App-header-Kyla">
        <container>
        <img src={logo} className="App-logo" alt="logo" />
        </container>
        <span></span>
        <NameForm></NameForm>
      </header>
    </div>

  );
}