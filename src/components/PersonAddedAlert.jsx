/* eslint-disable react/prop-types */
const PersonAddedAlert = ({ addedAlert }) => {
  if (!addedAlert) {
    return <></>;
  } else {
    return (
      <div className="person-added-alert">
        <p>{`${addedAlert}`}</p>
      </div>
    );
  }
};

export default PersonAddedAlert;
