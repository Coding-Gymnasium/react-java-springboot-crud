import React, { useEffect, useState } from "react";
import { Card, Typography } from "@material-tailwind/react";
import { SERVER_URL } from "../../constants";
import CarForm from "./CarForm";
import DeleteCar from "./DeleteCar";
import EditCar from "./EditCar";

const TABLE_HEAD = ["Brand", "Model", "Year"];

function Car() {
  const [cars, setCars] = useState();

  const getCars = async () => {
    console.log(SERVER_URL);
    const response = await fetch(SERVER_URL + "/car", {
      method: "GET",
      redirect: "follow",
      credentials: "omit",
    }).then((response) => response);

    if (response.redirected) {
      document.location = response.url;
    }
    const data = await response.json();
    setCars(data);
    console.log("CARS: ", cars);
  };

  function handleClick() {
    getCars();
  }

  useEffect(() => {
    getCars();
  }, []);

  return (
    <>
      <Card className="h-full w-full overflow-scroll">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {cars &&
              cars.map((car, index) => {
                const isLast = index === cars.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";
                return (
                  <tr key={car.id}>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {car.brand}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {car.model}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {car.year}
                      </Typography>
                    </td>
                    <td>
                      <EditCar car={car} handleClick={handleClick} />
                    </td>
                    <td>
                      <DeleteCar handleClick={handleClick} id={car.id} />
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </Card>
      <CarForm handleClick={handleClick} />
    </>
  );
}

export default Car;
