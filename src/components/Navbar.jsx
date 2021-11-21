import React,{useEffect} from  "react";


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
                        <a className="nav-link active" aria-current="page" href="/home">HOME</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link"  href="/About">ABOUT ME</a>
                        </li> 
                        <li className="nav-item">
                        <a className="nav-link " href="/Portfolio">PORTFOLIO</a> 
                        </li>
                        <li className="nav-item">
                        <a className="nav-link " href="/CV">MY CV</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link " href="/Contact" >CONTACT</a>
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