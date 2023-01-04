import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
const Testimonial = () => {

    const reviews = [
        {
            id: 1,
            name: 'Winson Hanry',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California',
            image: people1
        },
        {
            id: 1,
            name: 'Winson Hanry',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California',
            image: people2
        },
        {
            id: 1,
            name: 'Winson Hanry',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California',
            image: people3
        }
    ]

    return (
        <section className="mt-16">
            <div  className='flex justify-between'>
                <div >
                    <h4 className="text-2xl text-primary font-bold">
                        Testimonial
                    </h4>
                    <h2 className="text-4xl">
                        What Our Patients says
                    </h2>
                </div>
                <figure>
                    <img className="w-24 md:w-48" src={quote} alt="" />
                </figure>
            </div>
            <div>
        
            </div>
        </section>
    );
};

export default Testimonial;