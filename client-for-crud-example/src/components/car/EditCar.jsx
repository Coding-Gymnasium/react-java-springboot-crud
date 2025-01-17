import React from "react";
import Modal from "react-modal";
import { SERVER_URL } from "../../constants";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function EditCar({ car, handleClick }) {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formJson = Object.fromEntries(formData.entries());

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formJson),
      credentials: "omit",
    };

    fetch(SERVER_URL + "/car", requestOptions).then(async (response) => {
      if (!response.ok) {
        console.log("Error happened");
      }

      closeModal();
      handleClick();
    });
  }

  return (
    <div>
      <button onClick={openModal}>Edit</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Edit car</h2>
        <button onClick={closeModal}>close</button>

        <form onSubmit={handleSubmit}>
          <input hidden name="id" defaultValue={car.id}></input>
          <input name="brand" defaultValue={car.brand}></input>
          <input name="model" defaultValue={car.model}></input>
          <input name="year" defaultValue={car.year}></input>
          <button type="submit">Save</button>
        </form>
      </Modal>
    </div>
  );
}

export default EditCar;
