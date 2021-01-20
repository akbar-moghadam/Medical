import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'
import {ServicesData} from './data/servicesdata'

const Services=() => {
    return (
        <ServicesContainer>
            
                <ServicesTitle>
                    <h2>MEDICAL SERVICES</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci officiis consectetur illum? Eius vel reprehenderit nam, debitis ipsa quo consequatur beatae quae aut ut dignissimos repellat vitae ea est veniam!</p>
                </ServicesTitle>
                <ServicesItem>
                    {ServicesData.map((item,index) => {
                        return(
                            <Item key={index}>
                                <Icon>{item.icon}</Icon>
                        <TitleLink to={item.to}>{item.title}</TitleLink>
                        <ItemDes>{item.des}</ItemDes>
                            </Item>
                        )
                    })}
                </ServicesItem>
            
        </ServicesContainer>
    )
}

export default Services

const ServicesContainer=styled.div`
display: flex;
align-items: center;
flex-direction:column;
justify-content: center;
margin: 0.5rem 0;
width: 100vw;
height:600px;


@media screen and (max-width:1000px){
    height:1550px;
}
`
const ServicesTitle=styled.div`
display: flex;
align-items:center;
justify-content: center;
flex-direction: column;
width:100%;
height:40%;
padding:0.5rem 0.5rem;


h2{
display: flex;
align-items:center;
justify-content: center;
width:100%;
height:20%;
padding:0.5rem 0;
margin-bottom:0.5rem;
color: #4b7ea6;
font-size: clamp(2rem,4vw,3rem);
@media screen and (max-width:768px){
    margin:0;
    
}
}

p{
display: flex;
align-items:center;
justify-content: center;
width:20%;
height:40%;
padding-top: 0.5rem;
margin:0.5rem 0.5rem;
text-align: center;

@media screen and (max-width:768px){
    margin:0;
    width:60%;
}
@media screen and (max-width:1200px){
    margin:0;
    width:60%;
}
}
`
const ServicesItem=styled.div`
display:flex;
align-items: center;
justify-content:center;
height:60%;
width: 70%;
margin: 1rem 0;

@media screen and (max-width:768px){
    flex-direction:column;
    margin: 3rem 0;

}

`
const Item=styled.div`
display:flex;
align-items: center;
justify-content:center;
flex-direction: column;
@media screen and (max-width:768px){
    width:100%;
    margin: 2rem 0;


}
}

`
const Icon=styled.i`
background: #f2a73f;
border-radius: 100px;
padding: 20px 23px;
margin-bottom: 2rem;
color:#49374d;
&:hover{
    background: #49374d;
    color: #f2a73f;
}
@media screen and(max-width:768px){
    margin-top:1rem;
}
`
const TitleLink=styled(Link)`
text-decoration: none;
padding-bottom: 1rem;
color:#000;
font-size: 22px;
`
const ItemDes=styled.p`
width:80%;
line-height:1.5;
margin: 0.5rem 0;
padding: 0.5rem 0;
`