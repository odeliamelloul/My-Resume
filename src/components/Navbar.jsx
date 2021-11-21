import React,{useEffect} from  "react";
import {Link} from "react-router-dom"

const Navbar=()=>
{    

    
    return(
    <div>
        <h1 className="logo">Odelia CV</h1>

            <nav className="navbar navbar-expand-lg p-0 navbar-light">
            <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <i className="fa fa-bars" aria-hidden="true"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/home">HOME</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link"  to="/About">ABOUT ME</Link>
                        </li> 
                        <li className="nav-item">
                        <Link className="nav-link " to="/Portfolio">PORTFOLIO</Link> 
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link " to="/CV">MY CV</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link " to="/Contact" >CONTACT</Link>
                        </li>
                    </ul>
                        <a  href="mailto:odeliamel04@gmail.com?subject=Subject&body=message%20goes%20here" aria-hidden="true"><i className="fa fa-envelope-o"></i></a>
                </div>
            </div>
            </nav>
        
        
    </div>
    )

}
export  default Navbar