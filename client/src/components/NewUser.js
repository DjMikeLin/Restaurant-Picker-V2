import React from 'react';
import {createUser} from './axiosRouter';
import {BrowserRouter as Redirect} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';

const StyledP = styled.p`
    color: red;
    font-weight: bolder;
    font-size: 2em;
    margin-left: 35%;
`;

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 25%;
    width: 50%;
`;

class NewUser extends React.Component {
    state = {
        newUser: {
            name: "Teach",
            pass: "123456",
            email: "sumthing23@gmail.com",
            mobile: "(765)-343-5629"
        },
        errorMssg: '',
        redirect: false
    }

    handleSubmit = async(e) => {
        e.preventDefault();
        try{
            await createUser(this.state.newUser);
            if(this.state.errorMssg === '')
               this.setState({redirect: true}); 
        } catch(err){
            this.setState({errorMssg: "There is already an user by this user name!"});
        }
    }

    handleChange = e => {
        const copy = {...this.state.newUser};
        copy[e.target.name] = e.target.value;
        this.setState({newUser: copy, errorMssg: ""});
    }

    render(){
        if(this.state.redirect)
            return <Redirect to="/" />;
        return(
            <div>
                <StyledForm onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange} name="name" value={this.state.newUser.name} />
                    <input type="text" onChange={this.handleChange} name="pass" value={this.state.newUser.pass} />
                    <input type="text" onChange={this.handleChange} name="email" value={this.state.newUser.email} />
                    <input type="text" onChange={this.handleChange} name="mobile" value={this.state.newUser.mobile} />
                    <Button type="submit" variant="success outline-success" size="lg">Create Account</Button> 
                </StyledForm>
                <StyledP>{this.state.errorMssg}</StyledP>
            </div>
        );
    }
}
export default NewUser;
