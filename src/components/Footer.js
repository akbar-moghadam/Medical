import React,{useEffect} from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'
import Img from '../images/footer.jpg'
import {FooterLink} from './data/FooterLink'
import {FooterServic} from './data/FooterServic'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {
useEffect(() => {
Aos.init({duration:2000});
},[]);
    return (
        <FooterContainer >
            <FootCon >
            <Medical data-aos="fade-up" >
                <h2>Medical</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa illum quas commodi doloremque consectetur libero eaque ad vel esse repellendus fugit atque facilis obcaecati, minus veniam autem consequatur velit unde?</p>
            </Medical>
            <FootLink >
                <h4>Link</h4>
                <ItemLink >
                {FooterLink.map((item,index) => {
                    return(
                        <NavLink to={item.to} key={index}>{item.title}</NavLink>
                    )
                })}
                </ItemLink>
               
            </FootLink>
            <FootService>
                <h4>OUR SERVICES</h4>
                <ItemLink>
                {FooterServic.map((item,index) => {
                    return(
                        <NavLink to={item.to} key={index}>{item.title}</NavLink>
                    )
                })}
                </ItemLink>
               
            </FootService>
            </FootCon>
        </FooterContainer>
    )
}

export default Footer

const FooterContainer=styled.div`

background:url(${Img});
background-size:cover;
width:100vw;
position:relative;
`
const FootCon=styled.div`
display:grid;
grid-template-columns:1fr 300px 300px 1fr;
align-items:center;
justify-content:center;
width:100%;
background:#1e2022;
opacity:0.8;
padding:3rem 0.5rem;
position:relative;
@media screen and (max-width:768px){
    grid-template-columns:1fr;
}
`

const Medical=styled.div`
display:flex;
flex-direction:column;
align-items:center;
width:100%;
margin:1rem 0.5rem;
position:relative;


p{
    width:60%;
    line-height:1.6;
    text-align:left;
    color:#fff;
    padding-bottom:2rem;
}
h2{
    padding:1rem 0.5rem;
    color:#f2af3f;
    
}
`
const FootLink=styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;

width:100%;
margin:1rem 0.5rem;
h4{
    color:#fff;
    padding:0.2rem;
}
`
const ItemLink=styled(FootLink)`
text-align:left;
`
const NavLink=styled(Link)`
padding:0.3rem;
padding-left:6rem;
text-decoration:none;
color:#4d606e;
width:100%;

&:hover{
    text-decoration:underline;
}
`
const FootService=styled(FootLink)``

