/* eslint-disable react/prop-types */

const Numbers = ({ namesToShow, handlePersonDelete }) => {
  return (
    <ul>
      {namesToShow.map((person) => (
        <li key={person.id}>
          {person.name} - {person.number}
          <button onClick={() => handlePersonDelete(person.id)}>delete</button>
        </li>
      ))}
    </ul>
  );
};

export default Numbers;
