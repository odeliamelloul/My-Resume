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
                <p className="p-4">A recent Computer Science graduate seeking my first
                <br/>position as  junior software developer</p>

                <div className="social-link">
                     <a className="fa fa-github" href="https://github.com/odeliamelloul" ></a>
                     <a  className="fa fa-linkedin" href="https://linkedin.com/in/odelia-melloul" ></a>
                </div>
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