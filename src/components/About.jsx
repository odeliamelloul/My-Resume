import React from "react";
import '../css/About.css'
import profileImg from '../images/profileImg.png'
const About=()=>
{
    return(
    <div id="About" >
         <img className="profileImg"src={profileImg} alt="" />
         <br />
        <header>
           <h1 className="AboutHeader">ABOUT ME</h1>
           <br /><hr />
            <p>
            I have experience in developing various projects and you can look at them in the portfolio column.
            I am eager to start a successful career in the high-tech field, 
            I am ambitious full of enthusiasm and desire to find a challenging and satisfying job
            that will allow me to advance my expertise while working in a team spirit and growth with an organization.
            </p>
           
            <div><br/>
            <h1 className="AboutHeader">TOOLS & TECHNOLOGIES</h1>
            <br/><hr />
            <br/>
            <p className="tools">
            <p><u>Computer languages:</u> C++, C#, JavaScript,Java, SQL, Xojo, Python, Prolog, Assembly, Jack, VM, 
            XML,HTML.</p>
            <p><u>stylesheet languages:</u> CSS,SASS</p> 
            <p><u>Environment:</u> Eclipse, Visual Studio 2017 & 2019, Visual Studio Code, PL/ SQL,
            Notepad ++, Xojo, PyCharm.</p> 
            <p><u>Frameworks:</u> React JS, Node JS, .Net.,Express .</p>
            </p>
            </div>
       </header>
      
    </div>
    )

}
export  default About