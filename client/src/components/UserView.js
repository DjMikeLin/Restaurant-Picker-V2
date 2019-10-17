import React from 'react';
//import Favorites from './Favorites';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components'; 
import {getRandomRestaurant} from './axiosRouter';

class UserView extends React.Component {
    state = {
        location: '' 
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
    
        console.log((await this.findRestaurant(this.state.location)).data); 
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange} name="location" placeholder="Enter Location"></input>
                    <Button>Find Random Restaurant In Area</Button> 
                </form>                 
            </div>
        )
    }
}
export default UserView;
