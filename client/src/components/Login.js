import React from 'react';
import {getUser} from './axiosRouter';

class Login extends React.Component {
    state = {
        loginInfo: {
            userName: '',
            password: ''
        },
        errorMssg: ''
    };

    handleSubmit = async(e) => {
        e.preventDefault();
        
        const user = await getUser(this.state.loginInfo.userName);
        //if user.data is empty no User with that username is found
        //then check for password match also
        if(user.data.length === 0 || user.data[0].pass !== this.state.loginInfo.password){
            this.setState({errorMssg: "Wrong username or password!"}); 
            return;
        }
        this.props.changeLoginStatus(user.data[0].name);
    }

    handleChange = e => {
        this.setState({errorMssg: ""});
        const clonedInfo = {...this.state.loginInfo};
        clonedInfo[e.target.name] = e.target.value;
        this.setState({loginInfo: clonedInfo});
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange} name="userName" placeholder="User Name" />
                    <input type="password" onChange={this.handleChange} name="password" placeholder="Password" />
                    <button>Login</button>
                </form>
                <p>{this.state.errorMssg}</p>
            </div>                
        )
    }
}
export default Login;
