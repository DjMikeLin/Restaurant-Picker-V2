import React from 'react';
import {createUser} from './axiosRouter';

class NewUser extends React.Component {
    state = {
        newUser: {
            name: "Teach",
            pass: "123456",
            email: "sumthing23@gmail.com",
            mobile: "(765)-343-5629"
        },
        errorMssg: ''
    }

    handleSubmit = async(e) => {
        e.preventDefault();
        try{
            await createUser(this.state.newUser);
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
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange} name="name" value={this.state.newUser.name} />
                    <input type="text" onChange={this.handleChange} name="pass" value={this.state.newUser.pass} />
                    <input type="text" onChange={this.handleChange} name="email" value={this.state.newUser.email} />
                    <input type="text" onChange={this.handleChange} name="mobile" value={this.state.newUser.mobile} />
                    <button>Create Account</button> 
                </form>
                <p>{this.state.errorMssg}</p>
            </div>
        );
    }
}
export default NewUser;
