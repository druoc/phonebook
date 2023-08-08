/* eslint-disable react/prop-types */
const Numbers = ({ namesToShow }) => {
  return (
    <ul>
      {namesToShow.map((person) => (
        <li key={person.id}>
          {person.name} - {person.number}
        </li>
      ))}
    </ul>
  );
};

export default Numbers;
