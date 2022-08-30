import "bootstrap/dist/css/bootstrap.min.css";
import {  Link } from "react-router-dom";

const Navbar = () =>{

    return(
        <>

<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <div className="container-fluid">

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link to="/challenge1" className="nav-link fs-4">challenge 1</Link>
        </li>
         <li className="nav-item">
        <Link to="/challenge2" className="nav-link fs-4">challenge 2</Link>
        </li>
        <li className="nav-item">
        <Link to="/challenge3" className="nav-link fs-4">challenge 3</Link>
        </li>
      </ul>      
    </div>
  </div>
</nav>

        </>
    )

}

export default Navbar