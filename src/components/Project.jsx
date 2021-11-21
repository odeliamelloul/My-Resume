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
      
      <div><img className="myDetails-image" src={myDetails.image} alt="" />
          <h3>{myDetails.name}</h3>
          <hr  /><br />
          <p>{myDetails.description}</p>
          {myDetails.githubLink &&
            <a  href={myDetails.githubLink}>Click to see my project in Github</a>}
          {myDetails.link &&
            <a  href={myDetails.link}>Click to see my project</a>}

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