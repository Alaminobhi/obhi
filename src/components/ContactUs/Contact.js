import React from 'react';
import ContactUs from './ContactForms';
import GoogleMaps from './GoogleMaps';

const Contact = () => {
    return (
        <div className="text-center m-4">
            <h1 className="bg-info">Contact Me</h1>
            <div className="row mb-4">
                <div className="col-md bg-white rounded-lg mx-4 mt-3">
                    <h5>MD: Al-Amin Obhi</h5>
                     Phone: <b>01744891919</b><br />
                     alaminobhi2@gmail.com <br />
                    <a href="http://github.com/Alaminobhi" target="_blank" rel="noopener noreferrer">Github Profile</a> ||
                    <a href="http://www.linkedin.com/in/al-amin-obhi-982248203" target="_blank" rel="noopener noreferrer"> Linked Profile</a>
                    <p>East Badda, Dhaka 1212.</p>
                </div>
                <div className="col-md mx-4 mt-3 bg-white rounded-lg">
                    <h5 className="text-center mt-2">Contact Form</h5>
                    <ContactUs></ContactUs>
                </div>
            </div>
            <GoogleMaps></GoogleMaps>
        </div>
    );
};

export default Contact;