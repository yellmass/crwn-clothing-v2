import { Link } from 'react-router-dom';
import styled from 'styled-components'

export const NavigationContainer = styled.div`
height: 70px;
width: 100%;
display: flex;
justify-content: space-between;
margin-bottom: 25px;
`

export const LogoContainer = styled(Link)`
height: 100%;
padding: 25px;
width: 70px;
`

export const NavLinks = styled.div`
width: 50%;
height: 100%;
display: flex;
align-items: center;
justify-content: flex-end;
`

export const Navlink = styled(Link)`
padding: 10px 15px;
cursor: pointer;
`



