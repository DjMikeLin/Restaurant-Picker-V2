import React from 'react';

class Login extends React.Component {
    render(){
        return(
            <form>
                <input type="text" name="userName" placeholder="User Name" />
                <input type="text" name="password" placeholder="Password" />
                <button>Login</button>
            </form>            
        )
    }
}
export default Login;
