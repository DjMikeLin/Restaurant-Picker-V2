import React from 'react';
import {getRestaurants, deleteRestaurant} from './axiosRouter';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import NewRestaurant from './NewRestaurant';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

const StyledButton = styled(Button)`
    margin: 1em 1em;
`;

const StyledToolbar = styled(ButtonToolbar)`
    display: flex;
    justify-content: center;
`;

const StyledP = styled.p`
    color: red;
    font-size: 3em;
    font-weight: bolder;
`;

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const StyledFavorite = styled.div`
    background-color: #28a745;
    color: black;
    font-weight: bolder;
    margin-bottom: 1em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center; 
    border-radius: 3%;
`;

class Favorites extends React.Component {
    state= {
        favorites: [],
        randomFav: '',
        showRandom: false,
        redirectToAddFav: false
    };

    componentDidMount = async() => {
        this.setState({favorites: (await getRestaurants()).data.filter(restaurant => restaurant.users.includes(this.props.user[0]._id))});
    }
    
    randomFavorite = e => {
        e.preventDefault();
        if(this.state.favorites.length === 0)
            return;
        this.setState({showRandom: true, randomFav: this.state.favorites[Math.floor(Math.random() * this.state.favorites.length)].name});
    }

    delete = async(e) => {
        e.preventDefault();
        for(let i = 0; i <= this.state.favorites.length - 1; i++){
            if(this.state.favorites[i]._id === e.target.id){
                const copy = [...this.state.favorites];
                copy.splice(i, 1);
                this.setState({favorites: copy});
                break;
            }
        }

        await deleteRestaurant(e.target.id);
    }

    addFavorite = async(e) => {
        e.preventDefault();

        this.setState({redirectToAddFav: !this.state.redirectToAddFav}); 
    }

    addFavToState = async() => {
        const getFavs = (await getRestaurants()).data.filter(restaurant => restaurant.users.includes(this.props.user[0]._id));
        this.setState({redirectToAddFav: !this.state.redirectToAddFav, favorites: getFavs});
    }

    render(){
        return(
            <div>
                {
                !this.state.redirectToAddFav ?
                <div>
                    <StyledToolbar>
                        <StyledButton variant="success outline-success" size="lg" onClick={this.randomFavorite}>Random Favorite</StyledButton>
                        <StyledButton variant="success outline-success" size="lg" onClick={this.addFavorite}>Add Favorite</StyledButton> 
                    </StyledToolbar>

                    <StyledWrapper>
                        {
                            this.state.showRandom ?
                            <StyledP>Random Favorite: {this.state.randomFav}</StyledP> : null
                        }
                        {
                            this.state.favorites.map(favorite => (
                                <StyledFavorite key={favorite._id}>
                                    <p>Name: {favorite.name}</p>
                                    <p>Address: {favorite.address}</p>
                                    <p>Number: {favorite.number}</p>
                                    <Button variant="warning outline-danger" size="lg" onClick={this.delete} id={favorite._id}>Delete Restaurant</Button>
                                </StyledFavorite>
                            ))
                        }
                    </StyledWrapper>           
                </div> : <NewRestaurant favorites={this.state.favorites} addFavToState={this.addFavToState} user={this.props.user} addFavorite={this.addFavorite} /> 
                }
            </div>
        )
    }
}
export default Favorites;
