import axios from "axios";
import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
const AllBooking = () => {
  const [data, setData] = useState([]);
  const getData = () => {
    axios
      .get("https://66c741f8732bf1b79fa5eff3.mockapi.io/crud-youtube")
      .then((res) => {
        setData(res.data);
      });
  };
  getData();

  return (
    <div>
      <h2>See all the bookings</h2>
      <Table striped bordered variant="sm">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto@gmail.com</td>
            <td>
              <Button variant="warning">Edit</Button>
            </td>
            <td>
              <Button variant="danger">Delete</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default AllBooking;
