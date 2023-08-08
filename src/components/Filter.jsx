/* eslint-disable react/prop-types */
const Filter = ({ search, handleSearch }) => {
  return (
    <div>
      <label>filter by name:</label>{" "}
      <input value={search} onChange={handleSearch} />
    </div>
  );
};

export default Filter;
