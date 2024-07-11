import { SERVER_URL } from "../../constants";

function DeleteCar({ id, handleClick }) {
  function deleteCar() {
    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      credentials: "omit",
    };

    let idObject = { id };
    fetch(SERVER_URL + "/car/" + idObject.id, requestOptions).then(
      async (response) => {
        if (!response.ok) {
          console.log("Error happened");
        }

        handleClick();
      },
    );
  }

  return <button onClick={deleteCar}>Delete</button>;
}

export default DeleteCar;
