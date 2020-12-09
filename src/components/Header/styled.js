import styled from 'styled-components';
import { primaryColor } from '../../config/colors';

export const Nav = styled.nav`
  display: flex;
  padding: 20px;
  align-items: center;
  justify-content: space-between;
  background: ${primaryColor};

  a {
    color: #fff;
    margin: 0 10px;
  }
`