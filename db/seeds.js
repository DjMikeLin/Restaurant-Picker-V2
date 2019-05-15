const Restaurant = require("../models/Restaurant");
const User = require("../models/User");
//Initial seeding for Users and Restaurants
const initialSeed = async() => {
    const user1 = await User.create({
        name: 'Mike Jones',
        pass: '111111',
        email: 'ubliek23@yahoo.com',
        mobile: '(868)-454-3332'
    });  

    const user2 = await User.create({
        name: 'Cardi B',
        pass: '222222',
        email: 'erere34@yahoo.com',
        mobile: '(452)-343-636'
    });

    const rest1 = await Restaurant.create({
        name: 'Zaxby\'s',
        address: '1914 Duluth Highway, Lawrenceville, GA 30043',
        number: '(770)-277-1973',
        users: [user1._id]
    });
    
    const rest2 = await Restaurant.create({
        name: 'Banh Mi Cafe',
        address: '3512 Satellite Blvd, Suite 7, Duluth, GA 30096',
        number: '(404)-750-6507',
        users: [user1._id]
    });

    const rest3 = await Restaurant.create({
        name: 'Ming\'s BBQ',
        address: '2131 Pleasant Hill Rd, Suite 134, Duluth, GA 30096',
        number: '(770)-623-9996',
        users: [user2._id] 
    });

    const rest4 = await Restaurant.create({
        name: 'Dreamland BBQ',
        address: '3540 West Lawrenceville Street, Duluth, GA 30096',
        number: '(770)-366-7427',
        users: [user2._id]
    });

    console.log("Seeding Complete!");
}
initialSeed();
