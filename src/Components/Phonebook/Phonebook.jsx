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
          <label className={styles.label}>
            Name
            <input
              className={styles.input1}
              name={"name"}
              onChange={this.handleAdd}
              value={this.state.name}
              type="text"
            />
          </label>
          <label className={styles.label}>
            Number
            <input
              className={styles.input2}
              name={"number"}
              onChange={this.handleAdd}
              value={this.state.number}
              type="text"
            />
          </label>
          <button className={styles.input1} type="submit">
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

export default Phonebook;
