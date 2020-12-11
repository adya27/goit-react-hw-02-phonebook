import React, { Component } from "react";
import styles from "./Phonebook.module.css";

class Phonebook extends Component {
  state = {
    name: "",
    number: "",
  };

  handleAdd = (e) => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
    // console.log(this.state);
  };

  reset = () => {
    this.setState({
      name: "",
      number: "",
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  render() {
    return (
      <div>
        <h2>Phonebook</h2>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <label
            style={{
              margin: "10px",
            }}
          >
            Name
            <input
              style={{
                marginLeft: "25px",
              }}
              name={"name"}
              onChange={this.handleAdd}
              value={this.state.name}
              type="text"
            />
          </label>
          <label
            style={{
              margin: "10px",
            }}
          >
            Number
            <input
              style={{
                marginLeft: "10px",
              }}
              name={"number"}
              onChange={this.handleAdd}
              value={this.state.number}
              type="text"
            />
          </label>
          <button
            style={{
              margin: "10px",
            }}
            type="submit"
          >
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

export default Phonebook;
