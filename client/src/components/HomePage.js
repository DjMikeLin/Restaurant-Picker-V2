import React from 'react';
import Login from './Login';

class HomePage extends React.Component {
    state = {
      loggedIn: false  
    };
   
    changeLoginStatus = () => {
        this.setState({loggedIn: !this.state.loggedIn});
        console.log(this.state.loggedIn);
    }
 
    render(){
        return(
            !this.state.loggedIn ? <Login changeLoginStatus={this.changeLoginStatus}/> : null
        )
    }
}
export default HomePage;
