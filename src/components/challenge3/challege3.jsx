import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
const Challenge3 = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`https://randomuser.me/api/?results=100`)
      .then((res) => res.json())
      .then((res) => {
        setUsers(res.results);
      });
  }, []);

  return (
    <>
      <Bar
        data={{
          labels: users.map((user) => user.name.first),

          datasets: [
            {
              label: "AGE",
              data: users.map((user) => user.dob.age),
              backgroundColor:[
                '#A9B979',
                '#989778',
                '#757005'
              ]
            },
          ],
        }}
        height={64}
      />
       <Bar
        data={{
          labels: users.map((user) => user.name.first),

          datasets: [
            {
              label: "REGISTERED AGE",
              data: users.map((user) => user.registered.age),
              backgroundColor:[
                '#435378',
                '#963839',
                '#226335'
              ]
            },
          ],
        }}
        height={64}
      />
    </>
  );
};

export default Challenge3;
