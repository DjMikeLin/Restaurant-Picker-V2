import React from 'react';
import {createUser} from './axiosRouter';

class NewUser extends React.Component {
    state = {
        newUser: {
            name: "Teach",
            pass: "123456",
            email: "sumthing23@gmail.com",
            mobile: "(765)-343-5629"
        }
    }

    handleSubmit = async(e) => {
        e.preventDefault();
        await createUser(this.state.newUser);
    }

    handleChange = e => {
        const copy = {...this.state.newUser};
        copy[e.target.name] = e.target.value;
        this.setState({newUser: copy});
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange} name="userName" value={this.state.newUser.name} />
                    <input type="text" onChange={this.handleChange} name="password" value={this.state.newUser.pass} />
                    <input type="text" onChange={this.handleChange} name="email" value={this.state.newUser.email} />
                    <input type="text" onChange={this.handleChange} name="moblie" value={this.state.newUser.mobile} />
                    <button>Create Account</button> 
                </form>
            </div>
        );
    }
}
export default NewUser;
