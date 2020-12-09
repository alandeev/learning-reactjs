import React from 'react';
import { FaHome, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa'

import { Nav } from './styled';

export default function(){
  return (
    <>
      <Nav>
        <a href="">
          <FaHome size={24} />
        </a>
        <div>
        <a href="">
          <FaSignOutAlt size={24} />
        </a>
        <a href="">
          <FaSignInAlt size={24} />
        </a>
        </div>
      </Nav>
    </>
  )
}