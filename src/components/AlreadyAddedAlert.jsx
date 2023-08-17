/* eslint-disable react/prop-types */
const AlreadyAddedAlert = ({ personAlreadyDeleted }) => {
  if (!personAlreadyDeleted) {
    return <></>;
  } else {
    return (
      <div className="person-already-deleted-alert">
        <p>{`${personAlreadyDeleted}`}</p>
      </div>
    );
  }
};

export default AlreadyAddedAlert;
