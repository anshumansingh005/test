import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
const AllBooking = () => {
  const url = "https://66c741f8732bf1b79fa5eff3.mockapi.io/crud-youtube";
  const [data, setData] = useState([]);

  const getData = () => {
    axios.get(url).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  };
  useEffect(() => {
    getData();
  }, []);

  const handleDelete = (id) => {
    axios.delete(url + `/${id}`).then(() => getData());
  };
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
        {data.map((eachData) => {
          return (
            <>
              <tbody>
                <tr>
                  <td>{eachData.id}</td>
                  <td>{eachData.name}</td>
                  <td>{eachData.email}</td>
                  <td>
                    <Button variant="warning">Edit</Button>
                  </td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => {
                        handleDelete(eachData.id);
                      }}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </Table>
    </div>
  );
};

export default AllBooking;
