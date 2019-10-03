import React from 'react';
import Favorites from './Favorites';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components'; 

const StyledLogOut = styled(Button)`
    float: right; 
`;

class UserView extends React.Component {
    state = {
        showUpdate: false
    };     

    toggleShowUpdate = () => {
        this.setState({showUpdate: !this.state.showUpdate});
    }

    render(){
        return(
            <Router>
                <div>
                    <div>
                        <Favorites user={this.props.user} />
                    </div>
                </div>
            </Router> 
        )
    }
}
export default UserView;
