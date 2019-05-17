import React from 'react';

class UserView extends React.Component {
    render(){
        return(
            <div>
                <button onClick={this.props.logOut}>Log Out</button>
            </div> 
        )
    }
}
export default UserView;
