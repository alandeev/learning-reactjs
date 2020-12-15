import React from 'react';

import { FaHome, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa'

import { Nav } from './styled';

import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

export default function Header(){
  const { isClicked } = useSelector(state => state.example);
  return (
    <Nav>
      <Link to="/">
        <FaHome size={24} />
      </Link>
      <div>
        {isClicked ? <p style={{ color: "#FFFF" }}>Clicked</p> : <p style={{ color: "#FFFF" }}>NotClicked</p> }
        <Link to="/auth">
          <FaSignInAlt size={24} />
        </Link>
        <Link to="/signup">
          <FaSignOutAlt size={24} />
        </Link>
      </div>
    </Nav>
  )
}