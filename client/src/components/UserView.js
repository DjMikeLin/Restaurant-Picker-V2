import React from 'react';
//import Favorites from './Favorites';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components'; 
import {getRandomRestaurant} from './axiosRouter';

class UserView extends React.Component {
    state = {
        location: '',
        locationInfo: {
            name: '',
            categories: [],
            display_phone: '',
            is_closed: true,  
            location: {},
            price: '',
            rating: 0,
            review_count: 0,
            url: ''
        },
        showInfo: false 
    };     

    findRestaurant = async(location) => {
        return await getRandomRestaurant(location);
    }

    handleChange = e => {
        e.preventDefault();
        
        this.setState({location: e.target.value});
    }

    handleSubmit = async(e) => {
        e.preventDefault();
   
        let locationInfoCopy = {...this.state.locationInfo};
        locationInfoCopy = (await this.findRestaurant(this.state.location)).data;
        this.setState({locationInfo: JSON.parse(locationInfoCopy), showInfo: true}); 
    }

    render(){
        console.log(this.state.locationInfo);
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange} name="location" placeholder="Enter Location"></input>
                    <Button type="submit" variant="success outline-success" size="lg">Find Random Restaurant In Area</Button> 
                </form>

                {
                   this.state.showInfo ? 
                    <div>
                        <h1>{this.state.locationInfo.name}</h1>
                        <h3>{this.state.locationInfo.is_closed ? "Closed" : "Open"}</h3>
                        <h3>Categories</h3>
                        {
                            this.state.locationInfo.categories.map(category => <h4>{category.title}</h4>)
                        }
                        <h3>{this.state.locationInfo.display_phone}</h3>
                        <h3>{this.state.locationInfo.price}</h3>
                        <h3>{this.state.locationInfo.rating}</h3>
                        <h3>{this.state.locationInfo.review_count}</h3> 
                        <h3>Location</h3>
                        <h4>{
                            this.state.locationInfo.location.address1 + ' ' +
                            this.state.locationInfo.location.address2 + ' ' +
                            this.state.locationInfo.location.address3 + ' ' +
                            this.state.locationInfo.location.city + ' ' +
                            this.state.locationInfo.location.country        
                        }</h4>
                        <a href={this.state.locationInfo.url}>Yelp Link</a>
                    </div> : null
                }                 
            </div>
        )
    }
}
export default UserView;
