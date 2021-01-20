import React from 'react'
import styled from 'styled-components'
import {graphql,useStaticQuery} from "gatsby"
import Img from 'gatsby-image'
import Hospital from "../images/hospital.jpg"

const Satisfied = () => {

    const data=useStaticQuery(graphql`
    query SatisQuery {
        allSatisfieldJson {
          edges {
            node {
              num
              title
              image {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
      
    `)

    function getsatis(data){
        const ExArray=[];
        data.allSatisfieldJson.edges.forEach((item,index)=> {
            ExArray.push(
                <SatItem key={index}>
                    <SatImg fluid={item.node.image.childImageSharp.fluid} />
                    <Satnum>{item.node.num}</Satnum>
                    <Satp>{item.node.title}</Satp>
                </SatItem>
            )
        })
            return ExArray
    }

    return (
        <SatContainer>
            <Item>{getsatis(data)}</Item>
            
        </SatContainer>
    )
}
export default Satisfied

const SatContainer=styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100%;
height:400px;
background:url(${Hospital}) red no-repeat center;
background-size:cover;

`
const Item=styled.div`
display:grid;
grid-template-columns:repeat(4,1fr);
justify-content:center;
align-items:center;
width:100%;
height:100%;
background:#49374d;
opacity:0.9;
@media screen and(max-width:768px){
    
    grid-template-columns:1fr;
}
`
const SatItem=styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width:100%;
height:100%;

`
const SatImg=styled(Img)`
margin:1.5rem 0.5rem;
width:15%;
height:auto;


`
const Satnum=styled.h2`
color:#fff;
margin:0.5rem 0.5rem;
font-size:clamp(1rem,3vw,3rem);
width:100%;
text-align:center;
`
const Satp=styled.p`
color:#fff;
margin:0.5rem 0.5rem;
font-size:clamp(0.5rem,2vw,1rem);
width:100%;
text-align:center;
`