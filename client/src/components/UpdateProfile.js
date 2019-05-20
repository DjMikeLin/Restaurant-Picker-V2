import React from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    margin-top: 3em;
    margin-left: 25%;
`;

const StyledDelete = styled(Button)`
    width: 50%;
    margin-top: 1em;
    margin-left: 25%; 
`;

const StyledHeader = styled.p`
    color: red;
    font-weight: bold;
    text-align: center;
`;

class UpdateProfile extends React.Component {
    state = {
        profile: {
            _id: '',
            name: '',
            pass: '',
            email: '',
            mobile: '',
            __V: 0
        },
        redirectAfterUpdate: false,
        redirectAfterDelete: false
    };

    componentDidMount = () => {
        //Assuming this.props.user only has one element 
        this.setState({profile: this.props.user[0]});
    }

    handleChange = e => {
        const profileCopy = {...this.state.profile};
        profileCopy[e.target.name] = e.target.value;
        this.setState({profile: profileCopy});
    }

    redirectAfterDeletion = e => {
        e.preventDefault();
        
        this.props.deleteAccount(this.state.profile.name);
        this.setState({redirectAfterDelete: true});
    }

    handleSubmit = e => {
       e.preventDefault();

       this.props.updateCurrUser(this.state.profile);
       this.setState({redirectAfterUpdate: true});
    }

    render(){
        if(this.state.redirectAfterUpdate)
            return <Redirect to="/" />;

        if(this.state.redirectAfterDelete)
            return <Redirect to="/" />;

        return(
            <div>
                <StyledForm onSubmit={this.handleSubmit}>
                    <StyledHeader>Password: </StyledHeader>
                    <input type="password" onChange={this.handleChange}  name="pass" value={this.state.profile.pass} />
                    <StyledHeader>Email: </StyledHeader>
                    <input type="text" onChange={this.handleChange} name="email" value={this.state.profile.email} />
                    <StyledHeader>Mobile Number: </StyledHeader>
                    <input type="text" onChange={this.handleChange}  name="mobile" value={this.state.profile.mobile} />
                    <Button type="submit" variant="success outline-success" size="lg">Update</Button>
                </StyledForm>
                <StyledDelete variant="warning outline-danger" size="lg" onClick={this.redirectAfterDeletion}>Delete Account</StyledDelete>
            </div>
        )
    }
}
export default UpdateProfile;
