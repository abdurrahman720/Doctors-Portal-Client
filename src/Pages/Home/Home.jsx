import React from 'react';
import Banner from './Banner';
import Contact from './Contact/Contact';
import InfoCards from './InfoCards/InfoCards';
import MakeAppointment from './MakeAppointment/MakeAppointment';
import Services from './Services/Services';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <div className="mx-5">
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            {/* hero section to be added  */}
            <MakeAppointment></MakeAppointment>
    
            <Testimonial></Testimonial>
            <Contact></Contact>
        </div>
    );
};

export default Home;