import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { Bar, Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
const Challenge3 = () => {
  const [users, setUsers] = useState([]);

  var [mens, setMens] = useState(0);
  var [womans, setWomans] = useState(0);


  useEffect(() => {
    fetch(`https://randomuser.me/api/?results=100`)
      .then((res) => res.json())
      .then((res) => {
        setUsers(res.results);
        users.map(user => {
          if(user.gender == 'male')
            setMens(mens++);
          else
            setWomans(womans++);  
        })
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
      <div style={{width:'300px'}}>
      <Pie
       width={20}
        data={{
          labels: ['Female', 'Male'],
          datasets: [
            {
              label: '# of Votes',
              data: [womans, mens],
              backgroundColor: [
               'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 159, 64, 0.5)',
              ],
              borderWidth: 1,
              offset:7
            },
          ],
        }}
      />
      </div>
       
    </>
  );
};

export default Challenge3;
