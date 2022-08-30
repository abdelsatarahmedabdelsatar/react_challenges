import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Pagination from "./pagination";

const Challenge2 = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersInPage] = useState(5);

  function getUsers() {
    fetch(`https://randomuser.me/api/?results=50`)
      .then((res) => res.json())
      .then((res) => {
        setUsers(res.results);
      });
  }

  useEffect(() => {
    getUsers();
  }, []);

  const lastIndexUser = currentPage * usersInPage;
  const firstIndexUser = lastIndexUser - usersInPage;
  const currentUsers = users.slice(firstIndexUser, lastIndexUser);


  const changePage = (num) => {
    setCurrentPage(num)
  };
  return (
    <>
      <table width="100%" className="table table-striped table-light">
        <thead>
          <tr>
            <th>Name</th>
            <th>location</th>
            <th>phone</th>
            <th>gender</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user, i) => {
            return (
              <tr key={i}>
                <td>
                  <div className="row">
                    <div className="col-2">
                      <img
                        src={user.picture.thumbnail}
                        alt=""
                        className="rounded-circle"
                      />
                    </div>
                    <div className="col-10">
                      <div className="row">
                        {user.name.first} {user.name.last}
                      </div>
                      <div className="row text-secondary">{user.email}</div>
                    </div>
                  </div>
                </td>

                <td>
                  <div className="row">
                    {user.location.street.number} {user.location.street.name}
                  </div>
                  <div className="row text-secondary">{user.location.city}</div>
                </td>
                <td>{user.phone}</td>
                <td>
                  <div className="bg-info text-light rounded text-center">
                    {user.gender}
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="align-item-center">
        <Pagination allUsers={users.length}  userInPage={usersInPage} changePage={changePage}/>
      </div>
    </>
  );
};

export default Challenge2;
