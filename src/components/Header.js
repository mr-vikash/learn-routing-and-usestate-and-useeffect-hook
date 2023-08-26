import { NavLink } from "react-router-dom";

const Header = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      textDecoration: isActive ? "none" : "underline",
      color : isActive ? "green" : "white",
      fontSize : "25px",
      padding : "20px",
      fontWeight : isActive ? "bold" : "normal"
    };
  };


  return (
    <div className="header">
      <NavLink to={'/'}  style={navLinkStyles} >
        Home
      </NavLink>
      <NavLink to={'/about'} style={navLinkStyles}>
        About 
      </NavLink>
      <NavLink to={'/contact'} style={navLinkStyles}>
        Contact 
      </NavLink>
    </div>
  )
}

export default Header
