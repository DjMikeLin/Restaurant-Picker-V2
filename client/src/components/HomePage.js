import React from 'react';
import Login from './Login';
import NewUser from './NewUser';
import LoginNav from './LoginNav';
import UserView from './UserView';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

class HomePage extends React.Component {
    state = {
      loggedIn: false,
      showLogin: true,
      userName: ''  
    };
   
    changeLoginStatus = (userName) => {
        this.setState({loggedIn: !this.state.loggedIn, userName});
    }

    logOut = (e) => {
        e.preventDefault();
        this.setState({loggedIn: false});
    }
 
    render(){
        const LoginForm = () => (<Login changeLoginStatus={this.changeLoginStatus}/>);
        const userView = () => (<UserView logOut={this.logOut}/>);

        return(
            <div>
                {
                    !this.state.loggedIn ?
                    <Router>
                        <div>
                            <LoginNav />
                            <Switch>
                                <Route exact path="/Login" render={LoginForm} />
                                <Route exact path="/CreateAccount" component={NewUser} />
                            </Switch> 
                        </div> 
                    </Router>
                    :
                    <UserView logOut={this.logOut} />
                    /*<Router>
                        <div>
                            <Route exact path={'/Login/' + this.state.userName} render={userView} />
                            <Redirect to={'/Login/' + this.state.userName} />
                        </div>
                    </Router>*/
                }
            </div>
        )
    }
}
export default HomePage;
