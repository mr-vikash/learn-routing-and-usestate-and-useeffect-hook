import React from 'react'
import {useState,useEffect} from 'react'
import { useParams ,useSearchParams} from 'react-router-dom';

const UsedDetails = () => {
  
  const {userId} = useParams();
  const [data, setData] = useState({});
  
  const [searchParam,setSearchParams] = useSearchParams();

  console.log(searchParam.get('name'));

  console.log(searchParam.get('age'));

  
  useEffect(() => {
    async function getData() {
      const res = await fetch(`https://hub.dummyapis.com/employee?noofRecords=$1&idStarts=${userId}`)
      const get = await res.json();
      setData(get[0])
    }
    getData();
  }, [])
  return (
    <div>
      <h1 style={{color:"green"}}>Employee Complete details</h1>
      <h2>firstName: &nbsp; {data.firstName}</h2>
      <h2>lastNam:&nbsp;{data.lastName}</h2>
      <h2>email:&nbsp;{data.email}</h2>
      <h2>contactNumber:&nbsp;{data.contactNumber}</h2>
      <h2>age:&nbsp;{data.age}</h2>
      <h2>dob:&nbsp;{data.dob}</h2>

      <button onClick={()=>setSearchParams({})}>Reset Parameter</button>
    </div>
  )
}

export default UsedDetails
