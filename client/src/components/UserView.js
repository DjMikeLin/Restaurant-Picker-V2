import React from 'react';
//import Favorites from './Favorites';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components'; 
import {getRandomRestaurant} from './axiosRouter';

const StyledForm = styled.form`
    display: flex;      
    flex-direction: column;          
`;

const StyledInput = styled.input`
    text-align: center;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const StyledCategories = styled.div`
    display: flex;
`;

const SingleCategory = styled.h4`
    margin-left: .5em;
`;

class UserView extends React.Component {
    state = {
        location: '',
        locationInfo: {
            name: '',
            categories: [],
            display_phone: '',
            is_closed: true,  
            location: {},
            price: '',
            rating: 0,
            review_count: 0,
            url: ''
        },
        showInfo: false 
    };     

    findRestaurant = async(location) => {
        return await getRandomRestaurant(location);
    }

    handleChange = e => {
        e.preventDefault();
        
        this.setState({location: e.target.value});
    }

    handleSubmit = async(e) => {
        e.preventDefault();
   
        let locationInfoCopy = {...this.state.locationInfo};
        locationInfoCopy = (await this.findRestaurant(this.state.location)).data;
        this.setState({locationInfo: JSON.parse(locationInfoCopy), showInfo: true}); 
    }

    render(){
        return(
            <div>
                <StyledForm onSubmit={this.handleSubmit}>
                    <StyledInput type="text" onChange={this.handleChange} name="location" placeholder="Enter Location"></StyledInput>
                    <Button type="submit" variant="success outline-success" size="lg">Find Random Restaurant In Area</Button> 
                </StyledForm>

                {
                   this.state.showInfo ? 
                    <Wrapper>
                        <a href={this.state.locationInfo.url}>
                            <h1>{this.state.locationInfo.name}</h1>
                        </a>
                        <h3>This Restaurant is {this.state.locationInfo.is_closed ? "Closed" : "Open"} now</h3>
                        <StyledCategories>
                            <h4>Categories:</h4>
                            {
                                this.state.locationInfo.categories.map(category => <SingleCategory>{category.title} </SingleCategory>)
                            }
                        </StyledCategories>
                        <h3>Location:</h3>
                        <h4>{
                            this.state.locationInfo.location.address1 + ' ' +
                            this.state.locationInfo.location.address2 + ' ' +
                            this.state.locationInfo.location.address3 + ' ' +
                            this.state.locationInfo.location.city + ' ' +
                            this.state.locationInfo.location.country        
                        }</h4>
                        <h3>Phone Number: {this.state.locationInfo.display_phone}</h3>
                        <h3>Price Range: {this.state.locationInfo.price}</h3>
                        <h3>Rating: {this.state.locationInfo.rating}</h3>
                        <h3>Review Count: {this.state.locationInfo.review_count}</h3> 
                    </Wrapper> : null
                }                 
            </div>
        )
    }
}
export default UserView;
