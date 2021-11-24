import React from "react";
import allProjects from "../AllProject";
import Prsentation from '../docxFile/DataBase_Presentation.docx'
import '../css/Project.css'
const Project=({match})=>
{
  const findProject=(projectName)=> {
    console.log(projectName)
    projectName= projectName.replaceAll("-"," ")

   return allProjects.find((item)=>{return item.name===projectName })
}

    const  myDetails = findProject(match.params.id);
    return(
    <div className="Project">
              <img className="myDetails-image" src={myDetails.image} alt="" />

      <div>
          <h3>{myDetails.name}</h3>
          <hr  /><br />
          <p className="description-project">{myDetails.description}</p>
          {myDetails.githubLink &&
            <a  href={myDetails.githubLink}><img src="https://img.icons8.com/nolan/32/arrow.png"/> see my project on Github</a>}
            <br />
          {myDetails.link &&
            <a  href={myDetails.link}><img src="https://img.icons8.com/nolan/32/arrow.png"/> visit the site</a>}

          {myDetails.name=="Database Systems Project"  &&
          <a href={Prsentation} download>
            <button className="btn-project"><i className="fa fa-download"></i> My Prsentation</button>
          </a>
          }
         </div>
        
    </div>
    )

}
export  default Project