import React, { Component } from "react";

class Filter extends Component {
  state = {
    filter: "",
  };

  handleFilter = (e) => {
    const { value } = e.currentTarget;
    this.setState({ filter: value });
    this.props.onChange(value);
  };

  render() {
    return (
      <div>
        <h3>Find contacts by name</h3>
        <input onChange={this.handleFilter} value={this.state.value}></input>
      </div>
    );
  }
}

export default Filter;
