import React from 'react';
import {getRestaurants, deleteRestaurant} from './axiosRouter';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import NewRestaurant from './NewRestaurant';

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
        //console.log(getFavs);
        this.setState({redirectToAddFav: !this.state.redirectToAddFav, favorites: getFavs});
    }

    render(){
        return(
            <div>
                {
                !this.state.redirectToAddFav ?
                <div>
                    <button onClick={this.randomFavorite}>Random Favorite</button>
                    <button onClick={this.addFavorite}>Add Favorite</button> 
                    {
                        this.state.showRandom ?
                        <p>Random Favorite: {this.state.randomFav}</p> : null
                    }
                    {
                        this.state.favorites.map(favorite => (
                            <div key={favorite._id}>
                                <p>Name: {favorite.name}</p>
                                <p>Address: {favorite.address}</p>
                                <p>Number: {favorite.number}</p>
                                <button onClick={this.delete} id={favorite._id}>Delete Restaurant</button>
                            </div>
                        ))
                    }           
                </div> : <NewRestaurant favorites={this.state.favorites} addFavToState={this.addFavToState} user={this.props.user} addFavorite={this.addFavorite} /> 
                }
            </div>
        )
    }
}
export default Favorites;
