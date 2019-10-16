import React from 'react';
//import Favorites from './Favorites';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components'; 

class UserView extends React.Component {
    state = {
    
    };     

    render(){
        return(
            <div>
                <input type="text" name="location" placeholder="Enter Location"></input>
                <Button>Find Random Restaurant In Area</Button>                  
            </div>
        )
    }
}
export default UserView;
