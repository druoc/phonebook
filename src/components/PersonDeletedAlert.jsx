/* eslint-disable react/prop-types */
const PersonDeletedAlert = ({ deletedAlert }) => {
  if (!deletedAlert) {
    return <></>;
  } else {
    return (
      <div className="person-deleted-alert">
        <p>{`${deletedAlert}`}</p>
      </div>
    );
  }
};

export default PersonDeletedAlert;
