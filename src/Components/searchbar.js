import React from 'react'

import {Route} from "react-router-dom";

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    // if in database, prompt to add time
    alert('The book ' + this.state.value + ' is in our database.');
    <Route exact path="/add">
      {/* * I want it to route but import not working for add time like it does in Routes.js */}
      
      </Route>
    // else prompt to add time and then add
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input placeholder={"Enter a book name here!"} type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input  type="submit" value="Submit" />
      </form>
    );
  }
}

export default SearchBar

// function SearchBar(props) {
//     const BarStyling = {width:"50rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};
//     return (
//       <input 
//        style={BarStyling}
//        key="random1"
//     value={keyword}
//        placeholder={props.placeholder_string}
//     onChange={(e) => setKeyword(e.target.value)}
//       />
//     );
//   }

//   function handleChange(event) {
//     this.setState({value: event.target.value});
//   }
//   function setKeyword(
//     this.set
//   )
  
//   export default SearchBar