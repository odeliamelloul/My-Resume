import React from "react";
import CV from './CV';
import Portfolio from './portfolio';
import Contact from './Contact';
import About from './About';

const HomePage=()=>
{
  return(
    
      <div >
        <div className="home module mid">
            <div className="profile-header"> 
                <h1> Odelia Melloul</h1>
                <p >A recent Computer Science graduate seeking my first
                <br/>position as  junior software developer
             
      
                <div className="social-link p-2">
                     <a className="fa fa-github" href="https://github.com/odeliamelloul" ></a>
                     <a  className="fa fa-linkedin" href="https://linkedin.com/in/odelia-melloul" ></a>
                </div></p>
            </div>
          </div>
          <About/>
          <CV/>
          <Portfolio/>
          <Contact/>
          
      </div>
  )
}
export default HomePage