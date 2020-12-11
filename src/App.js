import "./App.css";
import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

import Phonebook from "./Components/Phonebook/Phonebook";
import ContactList from "./Components/Phonebook/ContactsList";
import Filter from "./Components/Filter/Filter";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],

    filter: "",
  };

  formSubmitHandler = (data) => {
    const idName = uuidv4();
    data.id = idName;

    const names = this.state.contacts.map((contact) => {
      return contact.name;
    });

    if (names.includes(data.name)) {
      alert(`${data.name} is already exists in contacts`);
    } else {
      this.setState((prev) => {
        return { contacts: [...prev.contacts, data] };
      });
    }
  };

  filterChangeHandler = (data) => {
    this.setState({ filter: data });
  };

  onDeleteBtnClick = (contactId) => {
    this.setState((prev) => ({
      contacts: prev.contacts.filter((contact) => contact.id !== contactId),
    }));
  };

  render() {
    const filterToLower = this.state.filter.toLowerCase();
    const rendered = this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filterToLower)
    );

    return (
      <div className="App">
        <Phonebook onSubmit={this.formSubmitHandler} />
        <Filter onChange={this.filterChangeHandler} />
        <ContactList
          contacts={rendered}
          onDeleteBtnClick={this.onDeleteBtnClick}
        />
      </div>
    );
  }
}

export default App;
