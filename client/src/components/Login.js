import React from 'react';

class Login extends React.Component {
    state = {
        loginInfo: {
            userName: '',
            password: ''
        },
        successfulLogin: false
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.changeLoginStatus();
    }

    handleChange = e => {
        const clonedInfo = {...this.state.loginInfo};
        clonedInfo[e.target.name] = e.target.value;
        this.setState({loginInfo: clonedInfo});
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" onChange={this.handleChange} name="userName" placeholder="User Name" />
                <input type="text" name="password" placeholder="Password" />
                <button>Login</button>
            </form>            
        )
    }
}
export default Login;
