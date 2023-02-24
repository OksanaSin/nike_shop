import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 50px;
  background-color: #111;
  color: #fff;
`;

const Logo = styled(Link)`
  font-size: 2rem;
  font-weight: bold;
  text-decoration: none;
  color: #fff;
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
`;

const NavItem = styled.li`
  margin-left: 30px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #fff;

  &:hover {
    color: #f55;
  }
`;

function Navbar() {
    return (
        <Nav>
            <Logo to="/">Nike Store</Logo>
            <NavList>
                <NavItem>
                    <NavLink to="/">Home</NavLink>
                </NavItem>
            </NavList>
        </Nav>
    );
}

export default Navbar;
