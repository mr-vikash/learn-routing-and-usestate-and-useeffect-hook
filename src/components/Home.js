import React from 'react'

import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

const Home = () => {
  const [state, setState] = useState(2);
  const [data, setData] = useState([]);

  document.title = `(${state}) Employees Online`
  
  useEffect(() => {
    async function getData() {
      const res = await fetch(`https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`)
      const get = await res.json();
      setData(get)
    }
    getData();
  }, [state])
  return (
    <div>
      <button onClick={() => setState(state + 2)}>click me {state}</button>
      {data.map((element, index) => {
        return (
          <div key={index} className='data'>
            <Link to={'/element.id'} class="link">

              <h2>{element.firstName}</h2>
              <h2>{element.lastName}</h2>
              <h2>{element.email}</h2>~

            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default Home
