import React from "react";
import logo from '../book.png';
import '../App.css';

// import Button from 'react-bootstrap/Button'
//import { Button, Alert } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

class WheresTheFuckingBook extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('Your book : ' + this.state.value + ' was added');
        event.preventDefault();
    }

    render() {
        return (
            <div className="App">
                <header className="App-header-Clara">
                <br></br>
                    <br></br>
                    <img src={logo} className="App-logo" alt="logo" />
                    <br></br>
                    <br></br>

                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Enter Book: 
                            <input type="text" value={this.state.value} onChange={this.handleChange} />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                    <br></br>
                    <br></br>

                </header>
            </div>
        );
    }
}


export default WheresTheFuckingBook;