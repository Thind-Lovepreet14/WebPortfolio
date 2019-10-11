import React from 'react';

const ContactMe = () => {
    return(
        <>
               <div id="contact" className="skills-maintitle"><h2>Get in Touch <span>Contact</span></h2></div>
                    <div className="contact-wrapper">
                        <div className="contact-maincontainer"> 
                            <div className="icon-container">
                                <a href="https://github.com/Thind-Lovepreet14" target="_blank"><img className="icons" src='/img/contact_logo_github.png' alt="GitHub" /></a>
                                <a href="https://www.linkedin.com/in/lovepreet-thind-08aaa0158" target="_blank"><img className="icons" src='/img/contact_logo_linkedin.png' alt="LinkedIn" /></a>
                            </div>
                            <div className="contact-container">
                                <form action="https://formspree.io/thind.lovepreet14@gmail.com" method="post" id="contact-us-form" className="p-2" >
                                    <div className="form-group input-group">
                                        <label htmlFor="name">Name</label>
                                        <input type="text" name="name" className="form-control" placeholder="Name" id="name" required />
                                    </div>
                                    <div className="form-group input-group">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" name="email" className="form-control" placeholder="Email" id="email" required />
                                    </div>
                                    <div className="form-group input-group">
                                        <label htmlFor="subject">Subject</label>
                                        <input type="text" name="subject" className="form-control" placeholder="Subject" id="subject" required />
                                    </div>
                                    <div className="form-group input-group">
                                        <label htmlFor="comment">Comment</label>
                                        <textarea name="msg" id="msg" className="form-control" placeholder="Leave a comment..." id="comment" required></textarea>
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" name="submit" id="submit" className="btn-submit" value="Send Message" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </>
    )
}


export default ContactMe;