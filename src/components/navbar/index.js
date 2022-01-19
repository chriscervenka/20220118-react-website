import React from 'react'
import { FaBars } from 'react-icons/fa'
import {
    Nav, 
    NavbarContainer, 
    NavLogo, MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink
} from './navbarElements'

const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/' title='Logo | Dolla'>dolla</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about" title='About'>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="discover" title='Discover'>Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="services" title='Services'>Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="signup" title='Sign Up'>Sign Up</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='/signin' title='Sign In
                        '>Sign In</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;
