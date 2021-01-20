import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'
import ImgBg from '../images/chair.jpg'
import {Button} from './Button'

function Baner() {
    return (
        <Banercontainer>
            <BanerContent>
                <BanerItems>
                    <ItemH3>
                        Have an Access to <ItemStrong>a Health Professional at any Time</ItemStrong>
                    </ItemH3>
                    <ItemP>
                        Special Offer!
                    </ItemP>
                    <Navlink><Button round="true" to="/">MAKE AN APPOINTMENT</Button></Navlink>
                </BanerItems>
            </BanerContent>
        </Banercontainer>
    )
}

export default Baner


const Banercontainer=styled.div`
display: flex;
align-items: center;
justify-content: center;
background:url(${ImgBg}) no-repeat center;
background-size: cover;
width: 100%;
height: 700px;
position: relative;

`
const BanerContent=styled.div`
display: flex:
align-items: center;
justify-content: center;
width: 40%;
height:calc(100vh-85px);
line-height: 3.5rem;
margin: 10px 10px;
position: absolute;

`;
const BanerItems=styled.div`
display:flex;
flex-direction: column;
align-items: center;
justify-content:center;
width: 100%;
height: 100%;
color: #f2a73f;
padding: 10px 10px;
`
const ItemH3=styled.h2`
font-size: clamp(1.5rem, 6vw,2rem);
`
const ItemStrong=styled.strong`
font-size: clamp(1.5rem, 6vw,3rem);
`
const ItemP=styled.p`
font-size: clamp(1.5rem, 6vw,1.5rem);
text-align: center;
`
const Navlink=styled(Link)`
margin: 10px 10px;
padding: 5px 0;
`


