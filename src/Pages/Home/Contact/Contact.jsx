import React from 'react';
import appointment from '../../../assets/images/appointment.png';

const Contact = () => {
    return (
        <section className="mt-16 h-2/3" style={{background: `url(${appointment})`}}>
            <div className="w-1/3 mx-auto">
                <div className="text-center ">
                    <h3 className="text-secondary text-lg font-bold">Contact Us</h3>
                    <h3 className="text-white text-3xl ">Stay Connected With Us</h3>
                </div>
                <div className="my-16">
                    <input className="block w-full input-bordered rounded p-3" type="text" placeholder="Email Address" />
                    <br />
                    <input className="block w-full input-bordered rounded p-3" type="text" placeholder="Email Address" />
                    <br />
                    <textarea className="block w-full textarea-bordered p-3 rounded h-24" type="text" placeholder="Your Message" />
                    <br />
                </div>
            </div>
        </section>
    );
};

export default Contact;