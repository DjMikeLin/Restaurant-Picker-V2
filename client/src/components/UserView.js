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
            name: 'michael' 
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
        this.setState({locationInfo: JSON.parse(locationInfoCopy)}); 
    }

    render(){
        console.log(this.state.locationInfo);
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange} name="location" placeholder="Enter Location"></input>
                    <Button type="submit" variant="success outline-success" size="lg">Find Random Restaurant In Area</Button> 
                </form>

                <div>
                    <h1>{this.state.locationInfo.name}</h1>
                    <h3>{this.state.locationInfo.is_closed}</h3>
                    <a href={this.state.locationInfo.url}></a>
                </div>                 
            </div>
        )
    }
}
export default UserView;
