import React from 'react';
import Favorites from './Favorites';
import UpdateProfile from './UpdateProfile';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

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
                    <Switch>    
                        <Route exact path="/Login/Update" render={profileComponent} />
                    </Switch>

                    <button onClick={this.props.logOut}>Log Out</button>
                    <div>
                        {
                           !this.state.showUpdate ?
                           <Link to="/Login/Update" onClick={this.toggleShowUpdate}>
                               <button>Update Profile</button>
                           </Link> : null
                        }
                        <Favorites user={this.props.user} />
                    </div>
                </div>
            </Router> 
        )
    }
}
export default UserView;
