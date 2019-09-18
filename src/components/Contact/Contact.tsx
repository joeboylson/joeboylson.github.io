import React, { ChangeEvent } from 'react';
import { message } from 'antd';
import styled from 'styled-components';
import axios from 'axios';

const ContactItem:any = styled.div`{}`;
const SuccessMessage:any = styled.div`{}`;

const Contact: React.FC = () => {

  const [loading, setLoading] = React.useState(false);
  const [sent, setSent] = React.useState(false)
  const [success, setSuccess] = React.useState(false)
  const [response, setResponse] = React.useState('')

  const [name, setName] = React.useState();
  const [email, setEmail] = React.useState({email: null, valid: false});
  const [messageText, setMessageText] = React.useState();

  const submit = () => {

    if (!name) { return message.warning('Your name is not Keanu Reeves', 5) }
    if (!email.valid) { return message.warning('That email in invalid', 5) }
    if (!messageText) { return message.warning(`Your message cannot be empty.`, 5) }
    
    setLoading(true)

    axios.post(`/api/contact`, { data: {name, email: email.email, messageText} }).then(response => {
      return response.data
    }).then(data => {

      setLoading(false)

      setSent(true)
      setResponse(data)
      
      if (data.success) {
        setSuccess(true)
      } else {
        setSuccess(false)
      }
    })
    .catch(function (error) {
      setSent(true);
      setLoading(false);
      setSuccess(false);
    });

  }

  const validate = (set:React.Dispatch<any>, event:ChangeEvent, value:string) => {
    let type:any= event.target.getAttribute('type')
    
    if (!type) {
      set( value && value !== '' ? value : null)
    }
    
    if (type === 'text') {
      set( value && value !== '' ? value : null)      
    }
    
    if (type === 'email') {
      let isValidEmail:boolean = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)
      set({email: value, valid: isValidEmail})      
    }
  }

  const getBugReportLink = () => {
  let subject = encodeURI(`[BUG REPORT]: Failed to send message from Contact form`);
  let body = encodeURI(`
    - Name: ${name}
    - Email: ${email.email} [valid: ${email.valid}]
    
    ${messageText}
    <hr />
    ${response}
  `)

    return `mailto:joeboylson@gmail.com?bcc=&subject=${subject}&body=${body}`
  }

  const getEmailLink = () => {
    let subject = encodeURI(`Hey Joe, my name's ${name}`);
    let body = encodeURI(messageText)
    return `mailto:joeboylson@gmail.com?bcc=&subject=${subject}&body=${body}`
  }

  return (
    
    <div id="contact">

      <h1>CONTACT</h1>

      { loading ? (
        // <Loader />
        <p>Loading . . .</p>
      ) : (
        <div>


          { !sent ? (
        
            <div>

              <ContactItem
                className={'contact-item'}
                delayFade={1000}
              >
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  name="name"
                  onChange={(e) => validate(setName, e, e.target.value)}
                  style={{ border: name ? (name ? '3px solid var(--success)' : '3px solid var(--accent)') : '' }}
                  placeholder={"Name"}
                  />
              </ContactItem>

              <ContactItem
                className={'contact-item'}
                delayFade={1000 + 100}
              >
                <label htmlFor="email">Email</label>
                <input 
                  type="email"
                  onChange={(e) => validate(setEmail, e, e.target.value)}
                  style={{ border: email.email ? (email.valid ? '3px solid var(--success)' : '3px solid var(--accent)') : '' }}
                  placeholder={"youremail@example.com"}
                  />
              </ContactItem>
            
              <ContactItem
                className={'contact-item'}
                delayFade={1000 + 200}
              >
                <label htmlFor="messageText">Message</label>
                <textarea 
                  name="messageText" 
                  onChange={(e) => validate(setMessageText, e, e.target.value)}    
                  style={{ border: messageText ? (messageText ? '3px solid var(--success)' : '3px solid var(--accent)') : '' }}
                  placeholder={"Enter a message"}
                  />
              </ContactItem>

              <ContactItem
                className={'contact-item'}
                delayFade={1000 + 300}
              >
                <button
                  onClick={() => submit()}
                  >
                  Submit
                </button>
              </ContactItem>

            </div>

          ) : (
            <div>

              { !success ? (
                
                <div className={'error'}>
                  <h2>There was an error in sending the message.</h2>

                  <section>
                    <h3>Please try these steps to correct the error:</h3>
                    <ul>
                      <li>Refresh the browser and try again</li>
                      <li>Make sure all the fields are filled out.</li>
                      <li>Check you network connection; you may have lost internet access.</li>
                    </ul>
                  </section>

                  <section>
                    <h3>If the problem persists, please follow this link to submit a bug report:</h3>
                    <a href={getBugReportLink()}>Submit Bug Report</a>
                  </section>

                  <section>
                    <h3>Or follow this link to open your message in you default email application:</h3>
                    <a href={getEmailLink()}>Open Message in Email</a>
                  </section>

                  <section>
                    <h3>You said:</h3>
                    <ul>
                      <li>Name: {name ? name : 'No Name: (please make sure to fill out your name)'}</li>
                      <li>Email: {email.email ? email.email : 'No Email: (please make sure to fill out your email address)'}</li>
                      <li>Message: {messageText ? messageText : 'No Message: (please make sure to enter a message)'}</li>
                    </ul>
                  </section>

                </div>

                ) : (
                  <SuccessMessage 
                    className={'success'}
                    initialPose={'initial'}
                    pose={'fadeIn'}  
                  >
                    <h2>Thank you!</h2>

                  <section>
                    <h3>Your message was sent successfully:</h3>
                    <p>I'll get back to you as soon as I can.</p>
                  </section>

                  <section>
                    <button onClick={() => {
                      setLoading(true)
                      setSent(false)
                      setSent(false)
                      setName('');
                      setEmail({email: null, valid: false});
                      setMessageText('');
                      setLoading(false)
                    }}>
                      Continue
                    </button>
                  </section>

                </SuccessMessage>
              )}

        </div>
      )}

      </div>
      )}

    </div>

  );
}

export default Contact;
