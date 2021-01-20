import React from 'react'
import styled from 'styled-components'
import Video from '../video/video.mp4'
import {Whydata} from './data/whydata.js'
const Why = () => {
    return (
        <WhyContainer>
            <WhyTitle>
                <h2>WHY CHOOSE US!</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi doloremque quam perspiciatis eaque placeat voluptatum itaque exercitationem esse nulla quae atque molestias totam, at omnis nostrum debitis est magni nobis!</p>
            </WhyTitle>  
          <WhyBody>
              <WhyClip><VideoBg src={Video} type="video/mp4" controls/></WhyClip>
              <WhyItem>
                  {Whydata.map((item,index) => {
                      return(
                          <Item key={index}>
                              <ItemIcon>{item.icon}</ItemIcon>
                              <ItemNote>
                                  <ItemTitle>{item.title}</ItemTitle>
                                  <ItemDes>{item.des}</ItemDes>
                              </ItemNote>
                          </Item>
                      )
                  })}
              </WhyItem>
          </WhyBody>
        </WhyContainer>
    )
}

export default Why

const WhyContainer=styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
width:100vw;


`
const WhyTitle=styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
width:100%;

h2{
    font-size:clamp(2rem,4vw,3rem);
    width:100%;
    margin:2rem 0.5rem;
    text-align:center;
    padding:0.5rem 0.5rem;
}
p{
    width:50%;
    margin-bottom:2rem;
    padding:0.5rem 0.5rem;
}
`
const WhyBody=styled.div`
display:grid;
grid-template-columns:2fr 2fr;
align-items:center;
justify-content:center;
width:80%;

@media screen and (max-width:768px){
    grid-template-columns:1fr;
}
`
const WhyClip=styled.div`
display:flex;
align-items:center;
width:95%;
height:70%;
margin:0.5rem;
`
const VideoBg=styled.video`
width: 100%;
height:100%;
-o-object-fit:cover;
object-fit:cover;
`
const WhyItem=styled.div`
display:flex;
flex-direction:column;
align-items:center;
width:90%;


`
const Item=styled.div`
display:flex;
align-items:center;
margin:0.5rem 0.5rem;
padding:0.5rem 0.5rem;
width:100%;
`
const ItemIcon=styled.div`
padding:1.5rem;
font-size: clamp(1.5rem,3vw,2rem);
border-radius:100%;
background:#49374d;
color:#f2a73f;
border:none;
margin:0 1rem;

`
const ItemNote=styled.div`
display:flex;
align-items:center;
width:100%;
flex-direction:column;

`
const ItemTitle=styled.h2`
font-size:clamp(1rem,vw,2rem);
text-align:left;
width:100%;
`
const ItemDes=styled.p`
font-size:clamp(0.7rem,vw,1.5rem);
margin:1rem 0.5rem;
padding:0.5rem;
width:100%;
line-height:1.6;
text-align:left;
`
