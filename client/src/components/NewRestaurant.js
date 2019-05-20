import React from 'react';
import {createRestaurant} from './axiosRouter';
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

const StyledHeader = styled.p`
    color: red;
    font-weight: bold;
    text-align: center;
`;

class NewRestaurant extends React.Component {
    state = {
        newFav: {
            name: "Yummy Place Chicken",
            address: "3230 Steve Reynolds Blvd Duluth, GA 30096",
            number: "(470) 395-6943",
            users: []
        },
        errorMssg: ''
    }

    componentDidMount = () => {
        const favCopy = {...this.state.newFav};
        favCopy.users = [this.props.user[0]._id];
        this.setState({newFav: favCopy});
    }

    handleSubmit = async(e) => {
        e.preventDefault();

        if(!checkAdd(this.props.favorites, this.state.newFav.address)){
            this.setState({errorMssg: "Already added this restaurant!"});
            return;
        }

        await createRestaurant(this.state.newFav);
        await this.props.addFavToState();
    }

    handleChange = e => {
        const copy = {...this.state.newFav};
        copy[e.target.name] = e.target.value;
        this.setState({newFav: copy});
    }

    render(){
        return(
            <div>
                <StyledForm onSubmit={this.handleSubmit}>
                    <StyledHeader>Name: </StyledHeader>
                    <input type="text" onChange={this.handleChange} name="name" value={this.state.newFav.name} />
                    <StyledHeader>Address: </StyledHeader>
                    <input type="text" onChange={this.handleChange} name="address" value={this.state.newFav.address} />
                    <StyledHeader>Phone Number: </StyledHeader>
                    <input type="text" onChange={this.handleChange} name="number" value={this.state.newFav.number} />
                    <Button type="submit" variant="success outline-success">Create Restaurant</Button> 
                </StyledForm>
                <StyledHeader>{this.state.errorMssg}</StyledHeader>
            </div>
        );
    }
}
export default NewRestaurant;

function checkAdd(favorites, favAddress){
    for(let i = 0; i < favorites.length; i++){
        if(favorites[i].address === favAddress)
            return false;
    }
    return true;
}
