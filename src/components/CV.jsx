import React from "react";
import pdfDiploma from "../pdfFile/diploma.pdf"
import pdfCv from "../pdfFile/Odelia_Melloul_CV.pdf"
import pdfCoverLetter from "../pdfFile/Cover-Letter.pdf"
import "../css/CV.css"
const CV=()=>
{
    return(
      <div className="d-flex cv-diploma">
     
      <div className="wrap-cv">
            <h1  className="mt-4 diplomaHeader">CV</h1>
            <br/><hr/>
            <div className="container-CV cv">
                <a href={pdfCv} download>
                    <button className="btn"><i className="fa fa-download"></i> Download</button>
                </a>
            </div>
      </div>
      <div className="wrap-cv">
            <h1  className="mt-4 diplomaHeader">DIPLOMA</h1>
            <br/><hr/>
            <div className="container-DIPLOMA cv">
                <a href={pdfDiploma} download>
                    <button className="btn"><i className="fa fa-download"></i> Download</button>
                </a>
            </div>
      </div>
      <div className="wrap-cv">
            <h1  className="mt-4 diplomaHeader">COVER LETTER</h1>
            <br/><hr/>
            <div className="container-CL cv">
                <a href={pdfCoverLetter} download>
                    <button className="btn"><i className="fa fa-download"></i> Download</button>
                </a>
            </div>
      </div>
    </div>
    )

}
export  default CV