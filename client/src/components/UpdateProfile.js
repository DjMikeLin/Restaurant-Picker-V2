import React from 'react';
import {getUser} from './axiosRouter';

class UpdateProfile extends React.Component {
    state = {
        profile: {
            _id: '',
            name: '',
            pass: '',
            email: '',
            mobile: '',
            __V: ''
        }  
    };

    componentDidMount = async() => {
        //Assuming getUser only returns 1 user
        const user = (await getUser(this.props.userName)).data[0];
        this.setState({profile: user});
    }

    handleChange = e => {
        const profileCopy = {...this.state.profile};
        profileCopy[e.target.name] = e.target.value;
        this.setState({profile: profileCopy});
    }

    handleSubmit = e => {
        
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                Password:
                <input type="password" onChange={this.handleChange}  name="pass" value={this.state.profile.pass} />
                Email:
                <input type="text" onChange={this.handleChange} name="email" value={this.state.profile.email} />
                Mobile Number:
                <input type="text" onChange={this.handleChange}  name="mobile" value={this.state.profile.mobile} />
                <button>Update</button>
            </form>
        )
    }
}
export default UpdateProfile;
