// Code ControlledInput Component Here
import React, {Component} from 'react';

export default class ControlledInput extends Component {
    state = {
      firstName: "John",
      lastName: "Henry"
    }
  
    handleFirstNameChange = event => {
        this.setState({
          firstName: event.target.value
        })
      }
      
    handleLastNameChange = event => {
        this.setState({
            lastName: event.target.value
        })
    }

    render() {
        return (
          <form onSubmit={event => this.handleSubmit(event)}>
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </form>
        );
    }
  }