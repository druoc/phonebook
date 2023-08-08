import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { id: 1, name: "Dave Ruocco", number: "98001-999-009" },
  ]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const handleInputChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
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
      <form onSubmit={handlePersonSubmit}>
        <div>
          name: <input value={newName} onChange={handleInputChange} />
          <br />
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <li key={person.id}>
            {person.name} - {person.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
