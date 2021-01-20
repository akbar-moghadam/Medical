import React,{useEffect} from 'react'
import styled from 'styled-components'
import {useStaticQuery,graphql} from 'gatsby'
import {BiMessageRoundedDots} from 'react-icons/bi'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Happy = () => {
useEffect(() => {
    Aos.init({duration:2000});
   
}, [])
    const data=useStaticQuery(graphql`
    query HappyQuery {
        allHappyJson {
          edges {
            node {
              txt
              writer
            }
          }
        }
      }
      
    `)
    return (
        <HappyContainer>
            <HappyTitle data-aos="fade-up">
                <h1>HAPPY PATIENTS</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, quibusdam ratione cumque ad dignissimos ea eum veritatis minima tempora eveniet labore? Iste minima quis ipsa corporis quaerat suscipit est rerum?</p>
            </HappyTitle>
            <HappyItem data-aos="fade-up">
                {data.allHappyJson.edges.map((item,index) =>{
                    return(
                        <Item key={index}>
                           <ItemIcon/> 
                            <ItemTxt>{item.node.txt}</ItemTxt>
                            <ItemWrite><ItemIcon/>{item.node.writer}</ItemWrite>
                        </Item>
                    )
                }
                
                )}
            </HappyItem>
        </HappyContainer>
    )
}

export default Happy

const HappyContainer=styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
padding:2rem 1rem;
width:100vw;
background:#f0f5f9;
`
const HappyTitle=styled.div`
display:flex;
flex-direction:column;
align-items:center;
width:100%;
margin:3rem 0;
h1{
    font-size:clamp(2rem,4vw,3rem);
    text-align:center;
    margin:1rem 0.5rem;
    padding:0.5rem;

}
p{
    font-size:clamp(0.7rem,2vw,1.2rem);
    text-align:left;
    margin:1rem 0.5rem;
    padding:0.5rem;
    width:50%;
}
`
const HappyItem=styled.div`
display:grid;
grid-template-columns:repeat(3,1fr);
grid-gap:3rem;
align-items:center;
justify-content:center;
width:80%;

@media screen and (max-width:768px){
    grid-template-columns:1fr;
}
`
const Item=styled.div`
display:flex;
flex-direction:column;
align-items:center;
width:100%;
background:#fff;

`
const ItemIcon=styled(BiMessageRoundedDots)`
display:block;

padding:0.5rem;
width:100%;
`
const ItemTxt=styled.p`
padding:2rem 1rem;
width:100%;
text-align:left;
line-height:1.6;
`
const ItemWrite=styled.strong`
padding:1rem 0.5rem;
width:100%;
text-align:center;
`



