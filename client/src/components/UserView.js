import React from 'react';
import Favorites from './Favorites';
import UpdateProfile from './UpdateProfile';
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
        const profileComponent = () => (<UpdateProfile toggleShowUpdate={this.toggleShowUpdate} user={this.props.user} deleteAccount={this.props.deleteAccount} updateCurrUser={this.props.updateCurrUser} />);

        return(
            <Router>
                <div>
                    <StyledLogOut variant="warning outline-danger" size="lg" onClick={this.props.logOut}>Log Out</StyledLogOut>
                    <div>
                        {
                           !this.state.showUpdate ?
                           <Link to="/Login/Update" onClick={this.toggleShowUpdate}>
                               <Button variant="success outline-success" size="lg">Update Profile</Button>
                           </Link> : null
                        }
                        <Favorites user={this.props.user} />
                    </div>
                </div>
                <Switch>    
                    <Route exact path="/Login/Update" render={profileComponent} />
                </Switch>
            </Router> 
        )
    }
}
export default UserView;
