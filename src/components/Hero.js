import React from 'react'
import {Link} from 'gatsby'
import {HeroData} from './data/herodata'
import styled from 'styled-components'

function Hero() {
    return (
        <HeroContainer>
            <HeroContent>
                {HeroData.map((item,index) => {
                    return(
                            <HeroItem key={index} style={{background: item.colors}}>
                                    <ItemP>{item.tip}</ItemP>
                                    <ItemTitle>{item.title}</ItemTitle>
                                    <ItemDes>{item.content}</ItemDes>
                                    <ItemLink to="/">{item.to}</ItemLink>
                            </HeroItem>
                    )
                    })}
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero

const HeroContainer=styled.div`
display: flex;
align-items: center;
justify-content: center;
padding: 0.5rem calc((100vw - 1200px)/2);
width: 100%;
height: 400px;
overflow: hidden;
margin: 0 1rem;
position:relative;
top:-70px;
@media screen and (max-width:768px){
    height: 1200px;
    margin: 0 0;
    
}
`
const HeroContent=styled.div`
display: flex;
align-items: center;
padding: 1rem 1rem;
height: 100%;
margin: 1rem 0;
overflow: hidden;
@media screen and (max-width:768px){
    flex-direction:column;
   justify-content:center;
   margin: 0 0;
}
`
const HeroItem=styled.div`
display: flex;
align-items: flex-start;
flex-direction: column;
padding: 1rem 1rem;
height:100%;
background: red;
margin: 1rem 0;
@media screen and (max-width:768px){
    
   justify-content:center;
   
}

&:hover{
    box-shadow:3px 3px 5px 2px #52616b;
}
`
const ItemP=styled.p`
padding-top:5px;
margin-top: 2rem;
color:#fff;
`
const ItemTitle=styled.h3`
padding-top:15px;
color:#fff;
`
const ItemDes=styled.p`
padding: 15px 0;
line-height:1.7rem;
color:#fff;
width:90%;

`
const ItemLink=styled(Link)`
padding:10px 0;
margin-top: 2rem;
text-decoration:none;
color:#fff;
`