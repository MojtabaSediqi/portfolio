import React, { useContext, useRef, useState } from 'react'
import Phone from '../../img/phone.png'
import Address from '../../img/address.png'
import Email from '../../img/email.png'
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';
import './contact.css'
import { ThemeContext } from '../context';

function Contact() {
    const formRef = useRef()
    const [isMessageSent, setIsMessageSent] = useState(true)
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode

    const handleSubmit = (e) => {
        setIsMessageSent(false)
        e.preventDefault();
        emailjs.sendForm('service_z67fd2s', 'template_lf4gcmc', formRef.current, 'PPaU2hu2BstQWOlai')
            .then((result) => {
                !!result && afterSave()
            }, (error) => {
                !!error && afterError()
            });
    }

    const afterSave = () => {
        swal({
            title: "Thank you!",
            text: "Your message has been sent!",
            icon: "success",
            buttons: false
        });
        setIsMessageSent(true)
    }

    const afterError = () => {
        swal({
            title: 'Oops ...',
            text: 'Please try again, An error has been occured :( ',
            icon: 'error',
            buttons: false,
        })
        setIsMessageSent(true)
    }

    return (
        <div className='c'>
            <div className='c-bg'> </div>
            <div className='c-wrapper'>
                <div className='c-left'>
                    <h1 className="c-title">Keep in touch with me :)</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Phone} alt="phone icon" className="c-icon" />
                            +98 (922) 639 56 28
                        </div>
                        <div className="c-info-item">
                            <img src={Email} alt="email icon" className="c-icon" />
                            mojtabaa.sediqii@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img src={Address} alt="address icon" className="c-icon" />
                            Karaj, Alborz Province, I.R Iran
                        </div>
                    </div>
                </div>
                <div className='c-right'>
                    <p className="c-desc">
                        <b>How can I help you?</b> Get in touch with me via ths form.
                        I would be so happy if I could enhance and develop your project.Also any idea or suggestion can make me pleased :)
                    </p>
                    <form ref={formRef} method='POST' onSubmit={handleSubmit} >
                        <input style={{ backgroundColor: darkMode && '#333' }} type='text' placeholder='Name' name='user_name' />
                        <input style={{ backgroundColor: darkMode && '#333' }} type='text' placeholder='Subject' name='user_subject' />
                        <input style={{ backgroundColor: darkMode && '#333' }} type='email' placeholder='Email' name='user_email' />
                        <textarea style={{ backgroundColor: darkMode && '#333' }} rows='5' placeholder='Message' name='message' />
                        {<button type='submit'>{isMessageSent ? 'Submit' : 'Sending'}</button>}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact