import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './ModalCookies.css'

export const ModalCookies = (props) => {
    

  
    return (
      <div className='modal'>
        <div className='modal-content'>
            <ul>
                <li>I subscribe to newsletters with personalised offers and information about KLM products and services. </li>
                <li>At any time, I can unsubscribe in the footer of each of the newsletter if I no longer wish to receive these e-mails.</li>
                <li>I want to subscribe to personalised offers via e-mail, social media and advertising partners. ​Of course, </li>
                <li>I can always withdraw my consent or unsubscribe.</li>
            </ul>
            <div className='commit'>
                <button onClick={props.agree}>Agree</button>
                <button onClick={props.disagree}>Disagree</button>
            </div>
        </div>
        
      </div>
    );
}
