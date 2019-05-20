import React from 'react';
import {getUser} from './axiosRouter';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 50%;
`;

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const StyledP = styled.p`
    color: red;
    font-weight: bolder;
    font-size: 3em;
`;

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
        
        const user = (await getUser(this.state.loginInfo.userName)).data;
        //if user.data is empty no User with that username is found
        //then check for password match also
        if(user.length === 0 || user[0].pass !== this.state.loginInfo.password){
            this.setState({errorMssg: "Wrong username or password!"}); 
            return;
        }
        this.props.changeLoginStatus(user);
    }

    handleChange = e => {
        this.setState({errorMssg: ""});
        const clonedInfo = {...this.state.loginInfo};
        clonedInfo[e.target.name] = e.target.value;
        this.setState({loginInfo: clonedInfo});
    }

    render(){
        return(
            <StyledDiv>
                <StyledForm onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange} name="userName" placeholder="User Name" />
                    <input type="password" onChange={this.handleChange} name="password" placeholder="Password" />
                    <Button type="submit" variant="success outline-success" size="lg">Login</Button>
                </StyledForm>
                <StyledP>{this.state.errorMssg}</StyledP>
            </StyledDiv>                
        )
    }
}
export default Login;
