import React,{useEffect} from 'react'
import styled from 'styled-components'
import {useStaticQuery,graphql,Link} from 'gatsby'
import Img from 'gatsby-image'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Instagram = () => {
  useEffect(() => {
    Aos.init({duration:2000});
    },[]);
    const data=useStaticQuery(graphql`
    query InsQuery {
        allInstagramJson {
          edges {
            node {
              alt
              to
              src {
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
    return (
        <InsContainer>
            <InsTitle data-aos="fade-left">
                <TitleLine><p >_________</p></TitleLine>
                <TitleItem ><h2 >INSTAGRAM GALLERY</h2></TitleItem>
                <TitleLine><p >_________</p></TitleLine>
            </InsTitle>
            <PicGallery>
                {data.allInstagramJson.edges.map((item,index) =>{
                    return(
                        <PicItem>
                         <PicLink to={item.node.to} >  <ItemImg alt={item.node.alt} fluid={item.node.src.childImageSharp.fluid} /></PicLink>
                        </PicItem>
                    )
                })

                }
            </PicGallery>
        </InsContainer>
    )
}

export default Instagram

const InsContainer=styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
width:100vw;
background:#f0f5f9;
`
const InsTitle=styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100%;
padding:2rem 0.5rem;

`
const TitleLine=styled.div`

display:flex;
align-items:center;
height:50px;
p{
    color:#dbe2ef;
    height:30px;
}
`
const TitleItem=styled.div`
border: 1px solid #c9d6df;
padding:1rem;
h2{
    font-size:clamp(1rem,3vw,2rem)
    padding:1rem;
}
`
const PicGallery=styled.div`
display:grid;
grid-template-columns:repeat(4,1fr);
align-items:center;
width:100%;

@media screen and (max-width:768px){
grid-template-columns:1fr;
}
`
const PicItem=styled.div`
`
const PicLink=styled(Link)`

&:hover{
    box-shadow:inset 2px 2px 20px 3px red;

}
`
const ItemImg=styled(Img)`


`