import React from 'react';
import {Link} from 'react-router-dom';

class LoginNav extends React.Component{
	render() {
		return (
		    <div>	
                <Link to="/Login">Login</Link>
                <Link to="/CreateAccount">Create Account</Link>
		    </div>
		);
	}
}
export default LoginNav;
