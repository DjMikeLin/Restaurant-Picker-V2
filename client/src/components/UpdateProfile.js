import React from 'react';
import { Redirect } from 'react-router-dom';

class UpdateProfile extends React.Component {
    state = {
        profile: {
            _id: '',
            name: '',
            pass: '',
            email: '',
            mobile: '',
            __V: 0
        }
    };

    componentDidMount = async() => {
        //Assuming this.props.user only has one element 
        this.setState({profile: this.props.user[0]});
    }

    handleChange = e => {
        const profileCopy = {...this.state.profile};
        profileCopy[e.target.name] = e.target.value;
        this.setState({profile: profileCopy});
    }

    handleSubmit = e => {
       e.preventDefault();

       this.props.updateCurrUser(this.state.profile);
       //return <Redirect to='/' />;
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
