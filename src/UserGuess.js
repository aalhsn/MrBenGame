import React, { Component } from "react";

class UserGuess extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value.toUpperCase() });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.checkLetter(this.state.value, this.props.attemps);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="justify-content-center guess-controls row">
          <div className="input-group mb-3">
            <input
              type="text"
              maxlength="1"
              className="form-control input-lg rounded-pill col-xs-12 text-center"
              placeholder="between A - Z"
              value={this.state.value}
              onChange={this.handleChange}
            ></input>
          </div>
          <input
            className="btn btn-success btn-lg btn-block js-scroll-trigge mb-4"
            type="submit"
            value="Guess!"
          />
        </div>
      </form>
    );
  }
}

export default UserGuess;
