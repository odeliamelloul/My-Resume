import React, { useState,useRef,useEffect } from "react";
import emailjs from "emailjs-com";
import '../css/Contact.css'
const Form = (props) => {
   
    const [errorName,setErrName]=useState("")
    const [errorMail,setErrMail]=useState("")
    const [errorMsg,setErrMsg]=useState("")
    const [errorPhone,setErrPhone]=useState("")
    const [flag,setFlag]= useState(false)
      let userName=useRef()
      let email=useRef()
      let message=useRef()
      let phone=useRef()
      const timerRef = useRef(null);
      const [succesMsg,setsuccesMsg]=useState("")

      const sendMessage = () => {
        timerRef.current = setTimeout(() =>  setsuccesMsg(""), 2000);
      }
      
      useEffect(() => {
        return () => clearTimeout(timerRef.current); }, 
      []);
     
     
    //name

   const nameChange=()=>
    {
          if(!/^[A-Za-z]+\s[A-Za-z]+$/.test(userName.current.value) ||userName.current.value===""){

              if(userName.current.value.match(/^[a-z]*[1-9]+[a-z]*$/))
              {
                 setErrName("Full name:letter only like: odelia melloul")
                 setFlag(false)
              }
              if(userName.current.value.match(/^[A-Za-z]+$/))
              {
                setErrName("Full name:Missing name or last name")
                setFlag(false)
              }
              if(userName.current.value==="")
              {
                setErrName("please enter full name")
                setFlag(false)
              }
          }   
          
          else{
            setFlag(true)
              setErrName("")
              userName.current.style.border="black solid 1px";
          }
    }
    //email
    const emailChange=()=>
    {
        
        if(!/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email.current.value))
        {
            if(email.current.value==="")
            {setFlag(false)
            setErrMail("please Enter an email")
            }else{setFlag(false)
            setErrMail("Enter an  email like xxxx@gmail.com")}
        }  
        else{
          setFlag(true)
            setErrMail("")
        }
    }
     //message
    const messageChange=()=>
      {
        if(message.current.value==='')
        {
          setFlag(false)
            setErrMsg("Please Enter a Messge")
        }
        else{setErrMsg("")
        setFlag(true)}
        
      }
    //phone
    const phoneChange=()=>
    {
      if(!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test( phone.current.value))
      {
          if(phone.current.value==="")
          {setErrPhone("Please Enter a phoneNumber")
          setFlag(false)}
          else
          {setErrPhone("Please Enter a Correct phoneNumber")
          setFlag(true)}
      }
      else setErrPhone("") 
          
     
    }

  const sendMe = (e) => {
    e.preventDefault();
    if(userName.current.value==="")
      setErrName("please enter full name")
    if(email.current.value==="")
     setErrMail("please Enter an email")
    if(phone.current.value==="")
      setErrPhone("Please Enter a phoneNumber ")
    if(message.current.value==="")
      setErrMsg("Please Enter a Messge")
    else{
    if(errorMail===""&& errorMsg==="" && errorPhone==="" && errorName==="" &&  flag){
      var templateParams = {
        name:userName.current.value,
        phone:phone.current.value,
        mail:email.current.value,
        message:message.current.value
    };
       emailjs.send('service_339konb', 'template_3yp6wrx', templateParams,"user_icth2f7UOZb7sf05btSjG")
        .then(function(response) {
          alert("Thank you, your message was sent successfully")
          setFlag(true)
        }, function(error) {
          setFlag(false)
        });
    }}
   }
   let ErrorArray=[errorName,errorMail,errorMsg,errorPhone].filter((item)=>item!=="")
  return (
  <div>
   { ErrorArray.length>0 && 
       <div className="ErrForm">
            <ul> {ErrorArray.map(item=><li>{item}</li>)}</ul>
        </div>}
    <form >
      <div className="d-flex flex-column contact-form">
        <input
         ref={userName}
          type="text"
          required
          onInput={nameChange}
          placeholder="name"
          
        />
        <input
        ref={phone}
          type="text"
          id="phone"
          name="phone"
          onInput={phoneChange}
          placeholder="phone"
        />
          <input
            ref={email}
            type="mail"
            required
            onInput={emailChange}
            placeholder="email"
            autoComplete="off"/>

        <textarea
         ref={message}
         rows={6}
         required
         onInput={messageChange}
          placeholder="message"
          
        />
       </div>
          <button
            type="submit"
            className="buttonForm"
            onClick={sendMe}
          >Send Me</button>
    </form>
       {succesMsg}
      </div>    
  );
};

export default Form;