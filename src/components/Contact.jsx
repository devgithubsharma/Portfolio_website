import "./Contact.css";
import Phone from "../../src/img/Phone.png";
import Email from "../../src/img/Email.png";
import Location from "../../src/img/Location.png";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';


const Contact = () => {
    const formRef = useRef();
    const [done,setDone]=useState();

    const handleSubmit=(e) =>{
        e.preventDefault();
        emailjs.sendForm('service_pki8ums',
         'template_i0ii0rc',
          formRef.current,
           'Ua5UfD_W4kyeLc0WV')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
    }

  return (
    <div className='c'>
        <div className="c-bg"></div>
        <div className="c-wrapper">
            <div className="c-left">
                <h1 className="c-title">Let's Discuss your Project</h1>
                <div className="c-info"> 
                    <div className="c-info-item">
                        <img src={Phone} alt="" className="c-icon" />
                        +91 7505557968
                    </div>
                    <div className="c-info-item">
                        <img src={Email} alt="" className="c-icon" />
                        contactdev@gmail.com
                    </div>
                    <div className="c-info-item">
                        <img src={Location} alt="" className="c-icon" />
                        244, Sengupta hall,Shibpur street IIESTS, Howrah-711103 
                    </div>
                </div>
            </div>
            <div className="c-right">
                <p className="c-desc">
                <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along me.
                </p>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <input type="text" placeholder="Name" name="user_name" />
                    <input type="text" placeholder="Subject" name="user_subject" />
                    <input type="text" placeholder="Email" name="user_email" />
                    <textarea rows="5" placeholder="Message" name="message"/>
                    <button>Submit</button>
                    {done && " Thanks..."}
                </form>
            </div>
        </div>
        
    </div>
  )
}

export default Contact