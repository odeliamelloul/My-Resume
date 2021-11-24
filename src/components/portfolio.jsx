import React from "react";
import allProjects from "../AllProject";
import '../css/Portfolio.css'
import {Link} from "react-router-dom"
const Portfolio=()=>
{
    return(
      <div className="wrapPortfolio">
         <div id="Portfolio">
            <h1 className="header-portfolio">PORTFOLIO</h1>
            <hr /><br />
            <div>
               <div  className="d-flex justify-content-evenly flex-wrap wrap-img">  
               {             
                 allProjects.map((item)=>
                        <Link  to={{pathname:`/Project/${item.name.replaceAll(" ","-")}`}}>
                            <img className="img-Portfolio" width="300px" height="250px" src={item.image}/>
                            <h6 className="nameProject">{item.name}</h6>

                        </Link>
                ) }                  
               </div> 
               <p className="p-4 m-auto"><a href="https://github.com/odeliamelloul?tab=repositories">Click here to view more projects on my GitHub account</a> </p>

            </div> 
          </div>
        </div>
    )

}
export  default Portfolio