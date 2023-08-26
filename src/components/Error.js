import React from 'react';
import { useNavigate } from 'react-router-dom';

const Error = () => {
    const navigate = useNavigate();
  return (
    <div class="error">
      404 page not found
      <>
      <button onClick={()=>navigate(-1)}>Go To Back</button>
      </>
    </div>
  )
}

export default Error
