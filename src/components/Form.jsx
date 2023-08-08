/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
const Form = ({
  handlePersonSubmit,
  handleInputChange,
  handleNumberChange,
  newName,
  newNumber,
}) => {
  return (
    <form onSubmit={handlePersonSubmit}>
      <h2>Add a new person</h2>
      <div>
        name: <input value={newName} onChange={handleInputChange} />
        <br />
        number: <input value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};
export default Form;
