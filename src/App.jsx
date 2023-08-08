/* eslint-disable no-unused-vars */
import { useState } from "react";
import Filter from "./components/Filter";
import Form from "./components/Form";
import Numbers from "./components/Numbers";

const App = () => {
  const [persons, setPersons] = useState([
    { id: 1, name: "Dave Ruocco", number: "98001-999-009" },
  ]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setNewSearch] = useState("");
  const [showAllNames, setShowAllNames] = useState(true);

  const namesToShow = showAllNames
    ? persons
    : persons.filter((person) =>
        person.name.toLowerCase().includes(search.toLowerCase())
      );

  const handleInputChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSearch = (event) => {
    setNewSearch(event.target.value);
    setShowAllNames(false);
  };

  const handlePersonSubmit = (event) => {
    event.preventDefault();
    const personAlreadyAdded = persons.some(
      (person) => person.name === newName
    );

    if (personAlreadyAdded) {
      alert(`${newName} is already added to phonebook`);
    } else {
      const newPersonObj = {
        id: persons.length + 1,
        name: newName,
        number: newNumber,
      };
      setPersons(persons.concat(newPersonObj));
      setNewName("");
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search} handleSearch={handleSearch} />
      <Form
        newName={newName}
        newNumber={newNumber}
        handleInputChange={handleInputChange}
        handleNumberChange={handleNumberChange}
        handlePersonSubmit={handlePersonSubmit}
      />
      <h2>Numbers</h2>
      <Numbers namesToShow={namesToShow} />
    </div>
  );
};

export default App;
