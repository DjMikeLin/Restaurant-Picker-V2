import React from 'react';
import Login from './Login';
import NewUser from './NewUser';
import LoginNav from './LoginNav';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class HomePage extends React.Component {
    state = {
      loggedIn: false,
      showLogin: true  
    };
   
    changeLoginStatus = () => {
        this.setState({loggedIn: !this.state.loggedIn});
    }

    logOut = (e) => {
        e.preventDefault();
        this.setState({loggedIn: false});
    }
 
    render(){
        const LoginForm = () => (<Login changeLoginStatus={this.changeLoginStatus}/>);
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
                    <div> 
                        <button onClick={this.logOut}>Log Out</button>
                    </div>
                }
            </div>
        )
    }
}
export default HomePage;
