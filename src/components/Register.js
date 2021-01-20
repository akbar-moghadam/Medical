import React from 'react'
import styled from 'styled-components'
import {Button} from './Button'
import Chair from '../images/chair1.jpg'
const Register = () => {
    return (
        <RegContainer>
            <RegFree>
                <h1>Get Free Consultation</h1>
                <p>By Dr.Paul Merriweather</p>
            </RegFree>
            <RegNum>
                <ItemDay>
                    <span>-1302</span>
                    <p>days</p>
                </ItemDay>
                <ItemHour>
                    <span>-7</span>
                    <p>hours</p>
                </ItemHour>
                <ItemMin>
                    <span>-2</span>
                    <p>minutes</p>
                </ItemMin>
                <ItemSec>
                    <span>-2</span>
                    <p>seconds</p>
                </ItemSec>
                
            </RegNum>
            <RegBtn>
                <p>Limited offer, Hurry Up!</p>
                <Button round="true" to="/register">REGISTER NOW!</Button>
            </RegBtn>
        </RegContainer>
    )
}

export default Register

const Mdiv=styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-contenet:center;
padding:1rem;

`
const RegContainer=styled(Mdiv)`
background:url(${Chair});
background-size:cover;
width:100vw;
min-height:700px;

`
const RegFree=styled(Mdiv)`
width:100%;
height:100%;
margin-top:2rem;
h1{
    font-size:clamp(2rem,4vw,6rem);
    padding-top:3rem;
    padding-bottom:1rem;
    color:#87b05a;
}
p{
    font-size:clamp(1rem,2vw,3rem);
    font-weight:600;
    color:#87b05a;
}
`
const RegNum=styled.div`
display:grid;
grid-template-columns:repeat(4,1fr);
align-items:center;
justify-content:center;
margin:3rem 0;
width:50%;

@media screen and (max-width:768px){
grid-template-columns:1fr 1fr;
width:80%;
}
`
const ItemDay=styled.div`
display:flex;
flex-direction:column;
align-items:center;
padding:1rem;
margin:0.5rem;

span{
margin:0.5rem;
padding:0.5rem;
font-size:clamp(1rem,3vw,3rem);
font-weight:700;
}

`
const ItemHour=styled(ItemDay)``
const ItemMin=styled(ItemDay)``
const ItemSec=styled(ItemDay)``


const RegBtn=styled(Mdiv)`

p{
    margin-bottom:1.5rem;
}
`