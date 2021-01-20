import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import {graphql,Link,useStaticQuery} from 'gatsby'
import {TiSocialDribbble,TiSocialTwitter,TiSocialFacebook,TiSocialGithub} from 'react-icons/ti'

const Exprenced = () => {

    const data=useStaticQuery(graphql`
    query MyQuery {
      allExpJson {
        edges {
          node {
            alt
            dribbel
            facebook
            git
            name
            title
            twitter
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
    function getx(data) {
      const ExArray=[]
      data.allExpJson.edges.forEach((item,index)=>{
          ExArray.push(
              <ProductCard key={index}>
                <ItemImg alt={item.node.alt} fluid={item.node.image.childImageSharp.fluid} />
                  <ItemSocial>
                    <FaceLink to={item.node.facebook}><TiSocialFacebook/></FaceLink>
                    <TwitterLink to={item.node.twitter}><TiSocialTwitter/></TwitterLink>
                    <GitLink to={item.node.git}><TiSocialGithub/></GitLink>
                    <DribbelLink to={item.node.dribbel}><TiSocialDribbble/></DribbelLink>
                  </ItemSocial>
                  <Itemh3>{item.node.name}</Itemh3>
                <ItemP>{item.node.title}</ItemP>
                 

              </ProductCard>
          )
      })
      return ExArray
  }

    return (
        <ExContainer>
            <ExTitle>
                <h2>EXPERIENCED DOCTORS</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ipsa, iure incidunt harum accusamus a officiis fuga doloribus iste at, quidem nobis earum pariatur reiciendis dolore quod, libero temporibus cupiditate.</p>
            </ExTitle>
            <ExItems>
            {getx(data)}
            </ExItems>
        </ExContainer>
    )
}

export default Exprenced

const ExContainer=styled.div`
display: flex;
flex-direction: column;
justify-content:center;
align-items: center;
width:100vw;
background:#f0f5f9;
padding: 1rem 0;
@media screen and (max-width:768px){
  min-height:1900px;
   justify-content:flex-start;
}
`
const ExTitle=styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction:column;
margin: 2rem 0.5rem;
width:100%;


@media screen and (max-width:768px){
  
}

h2{
    font-size:clamp(1rem,4vw,2rem);
    width:100%;
    margin:0.5rem;
    padding:0.5rem;
    text-align:center;
}
p{
    font-size:clamp(0.5rem,3vw,0.9rem);
    width:50%;
    margin:0.5rem;
    padding:0.5rem;
    text-align:center;
    line-height:1.5rem;
    @media screen and(max-width:768px){
      width:70%;
    }
}
`
const ExItems=styled.div`
display: grid;
grid-template-columns: repeat(4,1fr);
grid-gap:10px;
align-items:center;
justify-content:center;
width:80%;
margin: 0.5rem 0.5rem;
@media screen and (max-width:768px){
  grid-template-columns:1fr;
  
}
`

const ProductCard=styled.div`
text-align: center;
width:100%;
height:100%;



`
const ItemImg=styled(Img)`
z-index:4;
&:hover{
  opacity:0.5;
  z-index:initial;
}
`
const ItemSocial=styled.div`
display:flex;
align-items:center;
justify-content:center;
position:absolute;
left:50px;
top:60px;
width:70%;


&:hover{
  color:#f2a73f;
  z-index:15;
}
`
const FaceLink=styled(Link)`
color:#49374d;
font-size: 24px;
margin:0 5px;

&:hover{
  color:#f2a73f;
 font-size:27;
}
@media screen and(max-width:768px){

}
`
const TwitterLink=styled(FaceLink)``
const DribbelLink=styled(FaceLink)``
const GitLink=styled(FaceLink)``
const Itemh3=styled.h3`
margin:0.5rem 0.5rem;
padding: 0.5rem 0.5rem;
font-size:clamp(0.9rem,2vw,1.2rem);
`
const ItemP=styled.p`
margin:0.5rem 0.5rem;
padding: 0.5rem 0.5rem;
font-size:clamp(0.5rem,3vw,0.9rem);
`


