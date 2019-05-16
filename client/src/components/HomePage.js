import React from 'react';
import Login from './Login';
import NewUser from './NewUser';

class HomePage extends React.Component {
    state = {
      loggedIn: false  
    };
   
    changeLoginStatus = () => {
        this.setState({loggedIn: !this.state.loggedIn});
    }

    logOut = (e) => {
        e.preventDefault();
        this.setState({loggedIn: false});
    }
 
    render(){
        return(
            <div>
                {
                    !this.state.loggedIn ?
                    <div> 
                        <Login changeLoginStatus={this.changeLoginStatus} />
                        <NewUser /> 
                    </div> 
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
