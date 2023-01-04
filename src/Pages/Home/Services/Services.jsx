import React from 'react';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {
    const servicesData = [
        {
            id: 1,
            name: 'FLuoride Treatment',
            description: 'lorem ipsum dolor sit amet, consectetur adipiscing',
            icon: fluoride
        },
        {
            id: 1,
            name: 'Cavity',
            description: 'lorem ipsum dolor sit amet, consectetur adipiscing',
            icon: cavity
        },
        {
            id: 1,
            name: 'Teeth WHitennig',
            description: 'lorem ipsum dolor sit amet, consectetur adipiscing',
            icon: whitening
        },
    ]
    return (
        <div className="mt-16">
             <div className="text-center">
            <h2 className="text-2xl font-mono text-primary uppercase ">Our Services</h2>
            <h2 className="text-4xl font-mono">Our Services</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5">
                {
                    servicesData.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
       </div>
    );
};

export default Services;