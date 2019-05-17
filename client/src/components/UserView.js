import React from 'react';
import Favorites from './Favorites';
import UpdateProfile from './UpdateProfile';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

class UserView extends React.Component {
    state = {
        showUpdate: false
    };     

    toggleShowUpdate = e => {
        e.preventDefault();

        this.setState({showUpdate: !this.state.showUpdate});
    }

    render(){
    const profileComponent = () => (<UpdateProfile user={this.props.user} />);

        return(
            <Router>
                <div>
                    <Switch>    
                        <Route exact path="/Login/Update" render={profileComponent} />
                    </Switch>

                    <button onClick={this.props.logOut}>Log Out</button>
                    <div>
                        <Link to="/Login/Update">
                            <button>
                                {"Update Profile"}
                            </button>
                        </Link>
                        <Favorites user={this.props.user} />
                    </div>
                </div>
            </Router> 
        )
    }
}
export default UserView;
