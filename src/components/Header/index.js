import React from 'react';

import { FaHome, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa'

import { Nav } from './styled';

import { Link } from 'react-router-dom';

export default function Header({ title }){
  return (
    <Nav>
      <Link to="/">
        <FaHome size={24} />
      </Link>
      <div>
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