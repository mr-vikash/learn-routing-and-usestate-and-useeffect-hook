import React from 'react'
import { Link,Outlet } from 'react-router-dom'
const Contact = () => {
  return (
    <div>
      <Link to={'insta'} ><h3>Insta Account</h3></Link>
      <Link to={'facebook'} ><h3>FB Account </h3></Link>
      <Outlet/>
    </div>
  )
}

export default Contact
