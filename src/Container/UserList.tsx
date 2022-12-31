import React, { useEffect, useState } from "react";
import { IProps } from "./CommonInterface";
import Table from "react-bootstrap/Table";

const UserList = () => {
  const [state, setState] = useState<IProps[]>([]);
  const fetchPost = async () => {
    const response = await fetch("https://dssdssd.herokuapp.com/all");
    const data = await response.json();

    setState(data);
  };
  useEffect(() => {
    fetchPost();
  }, []);
  console.log(88, state);
  return (
    <div>
      <Table
        variant="dark"
        style={{
          width: "50%",
          marginTop: "33px",
          color: "white",
          marginLeft: "25%",
        }}
      >
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {state?.map((element) => {
            return (
              <tr key={element.id}>
                <td>{element.id}</td>
                <td>{element.Name}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default UserList;
