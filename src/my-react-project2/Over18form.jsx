import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Over18form.css';

export const ContactUs1 = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wl8zovd', 'template_splzu2o', form.current, 'user_go3vQgao3KpvFkIvBMSRq')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
<form ref={form} onSubmit={sendEmail}>
                <div class="card">
                  
                <h2>Over 18 Photo release Waiver</h2>
                <p>Statement of use: The following information will be used to complete a document that you will read and then sign. Please complete the following form to create the document. You can preview the document you will be signing. Please take the time to read our Privacy Policy which are as follows:
               
                Insert additional terms of use here.
                </p>

                <br/>
        
                <div class ="terms">
              <div class="checkagree">
              <label>I agree to the above waiver consent and terms of use</label>
              <input type="checkbox"/>
              </div>
          </div>

          <br/>

        <div class="row">

        <h3> </h3>

        <br/>

          <div class="col">
            <div class="form-group">
              <label> Model's First Name</label>
              <input type="text" name="Model_First_Name"/>
            </div>
          </div>

          <div class="col">
            <div class="form-group">
              <label>Model's Surname</label>
              <input type="text" name="Model_Surname"/>
            </div>
          </div>
      
          <div class="col">
            <div class="form-group">
              <label>Model's Date of Birth</label>
              <input type="date" name="Model_DOB"/>
            </div>
          </div>

          <br/>
          
        
          

          <div class="col">
            <div class="form-group">
              <label>Tel</label>
              <input type="text" name="Tel_number"/>

              </div>
          </div>

          <div class="col">
            <div class="form-group">
              <label>Email</label>
              <input type="text" name="Email"/>
            </div>
          </div>

          <div class="col">
            <div class="form-group">
              <label>Message and Additional Requirements</label>
              <textarea type="text" name="Optionalmessage"></textarea>
            </div>
          </div>
      
            <br/>

          <div id="Submitstyle">
            <input type="submit" value="Send"/>
          </div>
        </div>
      </div>
            </form>
        );
    };
