/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import Form from "./components/Form";
import Numbers from "./components/Numbers";
import PersonAddedAlert from "./components/PersonAddedAlert";
import AlreadyAddedAlert from "./components/AlreadyAddedAlert";
import PersonDeletedAlert from "./components/PersonDeletedAlert";
import methods from "../utilities/methods";

const App = () => {
  //state variables
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setNewSearch] = useState("");
  const [showAllNames, setShowAllNames] = useState(true);
  const [addedAlert, setAddedAlert] = useState("");
  const [deletedAlert, setDeletedAlert] = useState("");
  const [personAlreadyDeleted, setPersonAlreadyDeleted] = useState("");

  useEffect(() => {
    methods.getAll().then((res) => {
      setPersons(res.data);
    });
  }, []);

  const namesToShow = showAllNames
    ? persons
    : persons.filter(
        (person) =>
          person.name &&
          person.name.toLowerCase().includes(search.toLowerCase())
      );

  //event handlers
  const handleInputChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSearch = (event) => {
    const newSearchValue = event.target.value;
    setNewSearch(newSearchValue);
    setShowAllNames(newSearchValue === "");
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
        name: newName,
        number: newNumber,
      };
      methods.newPost(newPersonObj).then((res) => {
        setPersons(persons.concat(res.data));
        setAddedAlert(`${newName} added to phonebook`);
        setTimeout(() => {
          setAddedAlert("");
        }, 3000);
        setNewName("");
        setNewNumber("");
      });
    }
  };

  const handlePersonDelete = (id) => {
    const personToDelete = persons.find((person) => person.id === id);
    methods
      .deletePost(id)
      .then(() => {
        setPersons(persons.filter((person) => person.id !== id));
        setDeletedAlert(
          `${personToDelete.name} has been removed from the phonebook`
        );
        setTimeout(() => {
          setDeletedAlert("");
        }, 3000);
      })
      .catch(() => {
        setPersonAlreadyDeleted(
          `${personToDelete.name} has already been removed from the phonebook!`
        );
        setTimeout(() => {
          setPersonAlreadyDeleted("");
        }, 3000);
      });
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search} handleSearch={handleSearch} />
      <PersonAddedAlert addedAlert={addedAlert} />
      <PersonDeletedAlert deletedAlert={deletedAlert} />
      <AlreadyAddedAlert personAlreadyDeleted={personAlreadyDeleted} />
      <Form
        newName={newName}
        newNumber={newNumber}
        handleInputChange={handleInputChange}
        handleNumberChange={handleNumberChange}
        handlePersonSubmit={handlePersonSubmit}
      />
      <h2>Numbers</h2>
      <Numbers
        namesToShow={namesToShow}
        handlePersonDelete={handlePersonDelete}
      />
    </div>
  );
};

export default App;
