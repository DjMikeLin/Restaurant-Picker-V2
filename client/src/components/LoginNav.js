import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: bolder;
    background: #28a745;
`;

const StyledDiv = styled.div`
    margin-bottom: 20%;
`;

class LoginNav extends React.Component{
	render() {
		return (
		    <StyledDiv>	
                <StyledLink to="/Login">Login</StyledLink>
                <StyledLink to="/CreateAccount">Create Account</StyledLink>
		    </StyledDiv>
		);
	}
}
export default LoginNav;
