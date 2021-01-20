import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import {Button} from './Button'
import {MenuData} from './data/MenuData'
import {FaBars} from 'react-icons/fa'



const Header = () => (
<NavHeaderContainer>
  <NavLink to="/" style={{fontSize:"24px",fontWeight:"bold"}}>Medical.</NavLink>
    <BarIcon />
  <NavMenu>
    {MenuData.map((item,index) => (
      <NavLink to={item.to} key={index}>{item.title}</NavLink>
    ))}
  </NavMenu>
  <NavBtn>
   <Button round="true" to="/trips" >Sign in</Button>
  </NavBtn>
  
  
  
 
  
</NavHeaderContainer>
)
export default Header

const NavHeaderContainer=styled.nav`
display:flex;
align-items:center;
justify-content: space-around;
padding: 0.5rem calc((100vw - 1200px)/2);
background:#4b7ea6;
width: 100vw;
height: 95px;
position: relative;
z-index: 100;

&::befor{
  content:"";
  box-shadow:inset 2px 2px 20px 3px #87b05a;
}
`
const NavLink=styled(Link)`
display:flex;
align-items:center;
width:30%;
paddig: 0 40px;
margin: 0 10px;
text-decoration: none;
color:#f2a73f;
transition: 0.4s;
height: 100%;
cursor: pointer;
font-size: 15px;

&: hover{
  color:#343147;
  font-weight: 500;
  transform: translateY(-2px);
}

`
const NavMenu=styled.div`
display: flex;
align-items:center;

@media screen and (max-width:768px){
  display:none;
}


`
const NavBtn=styled.div`
display: flex;
align-items: center;
width:30%
justify-content: center;
margin: 0 0.5rem;
@media screen and ( max-width:768px){
  display:none;
}
`

const BarIcon=styled(FaBars)`
display:none;
transition: 0.3s;

@media screen and (max-width:786px){
  display: block;
  color:#f2a73f;
  font-size:1.5rem;
  transform: translate(-100%,85%);
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;

}



`