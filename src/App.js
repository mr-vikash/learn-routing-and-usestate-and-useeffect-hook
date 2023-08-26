// // import logo from './logo.svg';
import './App.css';
// // import React,{useState} from 'react'

// // const  App =()=> {


// //   function inc()
// //   {
// //     setNum(num+1)
// //   }

// //   function dec()
// //   {
// //     setNum(num-1)
// //   }

// //   const [num,setNum] = useState(1);
// //   return (
// //     <div className="App">
// //       {/* first way to write this code */}
// //       {/* <h1 style={{color:'red'}}>{num}</h1>
// //       <button style={{color:'green'}} onClick={()=>setNum(num+1)}>increment</button>
// //       <button style={{color:'green'}} onClick={()=>setNum(num-1)}>decrement</button> */}



// //       {/* second way to write this code */}
// //       <h1 style={{color:'red'}}>{num}</h1>
// //       <button style={{color:'green'}} onClick={inc}>increment</button>
// //       <button style={{color:'green'}} onClick={dec}>decrement</button>
// //     </div>
// //   );
// // }

// // export default App;

// import Header from './components/Header';
// import './App.css';
// import { useState } from 'react';
// const App = () =>
// {

//   const [name,setName] = useState("");
//   const [email,setEmail] = useState("");
//   const [data,setData] = useState([])

  

//   const addItem =()=>
//   {
//     setData
//     (
//       [...data, {name, email}]
//     )
//     setName("")
//     setEmail("")
//   }

//   const removeItem =(index)=>
//   {
//     let arr = data;
//     arr.splice(index,1)
//     setData([...arr])
//   }
//   return(
//     <div>
//       <Header/>
//       <div className='form'>
//         <table className='table'>
//           <thead>
//           <th>Name</th>
//             <th>Email</th>
//             <th>submit</th>
//           </thead>
//           <tbody>
//             <td><input name="name" type="text" value={name} onChange={(event)=>setName(event.target.value)}/></td>
//             <td><input name="email" type="email" value={email} onChange={(event)=>setEmail(event.target.value)}/></td>
//             <td><button onClick={()=>
//             {
//               addItem()
//             }}>Add</button></td>
//           </tbody>
//         </table>
//         <div className='data'>
//         <div className='data-val'>
//           <h4>name</h4>
//           <h4>email</h4>
//           <h4>remove</h4>
//         </div>
        
//         {
          
//             data.map((element,index)=>
//             {
//               return(
//                 <div key={index} className='data-val'>
//                     <h4>{element.name}</h4>
//                     <h4>{element.email}</h4>
//                     <h4><button onClick={()=>removeItem(index)}>remove</button></h4>
//                 </div>
//               )
//             })
//           }
//         </div>
//         </div>
//       </div>
    
//   );
// };

// export default App;
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Insta from './components/Insta';
import Facebook from './components/Facebook';
import UserDetails from './components/UserDetails';
import {
  BrowserRouter as Router,
  Routes,
  Route,s
} from 'react-router-dom'

const App =()=>
{

  

  return(
    <Router>
      <div>
        <Header/>
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />
        
        <Route path='/:userId' element={<UserDetails/>}/>
        {/* About */}
        <Route path="/about" element={<About />} />

        {/* contact */}
        <Route path="/contact" element={<Contact />} >
               <Route  index  element={<Insta />} />  {/*//this code for when you want to one nested link defaultly  */}



              <Route path="/contact/insta" element={<Insta />} />
              <Route path="/contact/facebook" element={<Facebook />} />
        </Route>
        
        {/* error */}
        <Route path="*" element={<Error />} />
      </Routes>
      </div>
    </Router>
    
  );
};
export default App;