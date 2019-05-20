import React from 'react';
import {createRestaurant} from './axiosRouter';

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
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange} name="name" value={this.state.newFav.name} />
                    <input type="text" onChange={this.handleChange} name="address" value={this.state.newFav.address} />
                    <input type="text" onChange={this.handleChange} name="number" value={this.state.newFav.number} />
                    <button>Create Restaurant</button> 
                </form>
                <p>{this.state.errorMssg}</p>
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