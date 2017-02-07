'use strict';

import Author from '../author/author.model';

Author.find({}).remove(() => {
    Author.create({
            firstName: 'Michał',
            lastName: 'Cholewiński',
            email: 'cholewinski.michal@gmail.com',
            about: 'Michał is Java Developer for 2014, but nowadays is closely focused on Frontend. His favourite frontend technology is React.js',
            photo: 'http://localhost:3000/image/mch.jpg'
        }, () => {
            console.log('Finished populating users');
        }
    );
});