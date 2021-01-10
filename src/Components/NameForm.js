import React from 'react'

class NameForm extends React.Component {
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
      if (parseInt(this.state.value)) {
        var response = Math.round(this.state.value)
        alert('Your time of: ' + response + ' hours was recorded');
        event.preventDefault();
      }
      else {
        alert("Data is not acceptable! Try a positive integer of floating point number. Your response was not recorded.")
      }
      
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            How many hours did it take you to complete the book?   
            <input type="number" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
  export default NameForm;