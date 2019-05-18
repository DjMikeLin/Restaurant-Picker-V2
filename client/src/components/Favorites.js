import React from 'react';
import {getRestaurants} from './axiosRouter';

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

    render(){
        return(
            <div>
                <button onClick={this.randomFavorite}>Random Favorite</button>
                
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
                            <button>Edit Restaurant</button>
                            <button>Delete Restaurant</button>
                        </div>
                    ))
                }           
            </div> 
        )
    }
}
export default Favorites;
