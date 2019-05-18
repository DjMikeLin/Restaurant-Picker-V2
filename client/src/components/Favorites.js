import React from 'react';
import {getRestaurants, deleteRestaurant} from './axiosRouter';

class Favorites extends React.Component {
    state= {
        favorites: [],
        randomFav: '',
        showRandom: false
    };

    componentDidMount = async() => {
        this.setState({favorites: (await getRestaurants()).data.filter(restaurant => restaurant.users.includes(this.props.user[0]._id))});
    }
    
    randomFavorite = e => {
        this.setState({showRandom: true, randomFav: this.state.favorites[Math.floor(Math.random() * this.state.favorites.length)].name});
    }

    delete = async(e) => {
        for(let i = 0; i <= this.state.favorites.length - 1; i++){
            if(this.state.favorites[i]._id === e.target.id){
                const copy = [...this.state.favorites];
                copy.splice(i, 1);
                console.log(copy, i);
                this.setState({favorites: copy});
                break;
            }
        }

        await deleteRestaurant(e.target.id);
    }

    render(){
        console.log(this.state.favorites);
        return(
            <div>
                <button onClick={this.randomFavorite}>Random Favorite</button>
                <button>Add Favorite</button> 
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
            </div> 
        )
    }
}
export default Favorites;
