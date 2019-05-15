const Restaurant = require("../models/Restaurant");
const User = require("../models/User");
//Initial seeding for Users and Restaurants
const initialSeed = async() => {
    const rest1 = await Restaurant.create({
        name: 'Zaxby\'s',
        address: '1914 Duluth Highway, Lawrenceville, GA 30043',
        number: '(770)-277-1973'
    });
    
    const rest2 = await Restaurant.create({
        name: 'Banh Mi Cafe',
        address: '3512 Satellite Blvd, Suite 7, Duluth, GA 30096',
        number: '(404)-750-6507'
    });

    const rest3 = await Restaurant.create({
        name: 'Ming\'s BBQ',
        address: '2131 Pleasant Hill Rd, Suite 134, Duluth, GA 30096',
        number: '(770)-623-9996'
    });

    const rest4 = await Restaurant.create({
        name: 'Dreamland BBQ',
        address: '3540 West Lawrenceville Street, Duluth, GA 30096',
        number: '(770)-366-7427'
    });

    const user1 = await User.create({
        name: 'Mike Jones',
        email: 'ubliek23@yahoo.com',
        mobile: '(868)-454-3332',
        favRestaurants: [rest1._id, rest2._id]
    });  

    const user2 = await User.create({
        name: 'Cardi B',
        email: 'erere34@yahoo.com',
        mobile: '(452)-343-636',
        favRestaurants: [rest3._id, rest4._id]
    });
    console.log("Seeding Complete!");
}
initialSeed();
