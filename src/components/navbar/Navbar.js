import firebase from 'firebase';
import { useHistory } from 'react-router-dom';

import React from 'react';
import {
    Nav,
    NavLink,
    NavBtn,
    NavBtnLink,
    NavLogBtnLink
} from './NavbarElements';

const Navbar = ({ user }) => {
    const history = useHistory();
    return (
        <>
            <Nav>
                <NavLink to='/'>
                    <h1>FireGallery</h1>
                </NavLink>
                {
                    user ?
                        <>
                            <NavBtn>
                                <NavLogBtnLink to='/signin' onClick={() => {
                                    firebase.auth().signOut()
                                    history.push('/signin');
                                }}>LogOut</NavLogBtnLink>
                            </NavBtn>
                        </>
                        :
                        <>
                            <NavBtn>
                                <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                            </NavBtn>
                        </>
                }
            </Nav>
        </>
    );
};

export default Navbar;

export function signOut() {
    throw new Error('Function not implemented.');
}
