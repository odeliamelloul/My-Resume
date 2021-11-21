import React from "react";
import Form from "./Form";
import '../css/Contact.css'
const Contact=()=>
{
    return(
    <div id="Contact" >
        <h1 className="ContactHeader">CONTACT ME</h1>
      <hr />
      <div className="d-flex flex-column p-3">
         <label ><i className="fa fa-phone" aria-hidden="true"></i>+972-585577025</label>
         <label ><i className="fa fa-envelope" aria-hidden="true"></i> odeliamel04@gmail.com</label>
      </div>
     <Form/>
    </div>
    )

}
export  default Contact