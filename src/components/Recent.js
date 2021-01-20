import React from 'react'
import styled from 'styled-components'
import {useStaticQuery,graphql,Link} from 'gatsby'

import Labor from '../images/labor.jpg'


const Recent = () => {

    const data=useStaticQuery(graphql`
    query ReQuery {
        allRecentJson {
          edges {
            node {
              rtitle
              rto
              recdes
              rdate
            }
          }
        }
      }
      
    `)
    
    return (
        <Recentcontainer>
            <RecTitle>
                <h2>RECENT BLOG</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt tenetur repudiandae necessitatibus saepe, vel consequatur temporibus similique iure esse eos delectus ea dolorem omnis accusamus eligendi explicabo odit reiciendis? Tempore.</p>
            </RecTitle>
            <RecContent>
                <RecDes>{data.allRecentJson.edges.map((item,index) => {
                    return(
                        <Item key={index}>
                        <ItemDate><strong>{item.node.rdate}</strong></ItemDate>
                        <ItemDes>
                        <ItemTitle to={item.node.rto}>{item.node.rtitle}</ItemTitle>
                        <Itemp>{item.node.recdes}</Itemp>
                        </ItemDes>
                    </Item>  
                    )
                    })
                
            }</RecDes>
                <RecImg><img src={Labor} alt="labor"/></RecImg>
            </RecContent>
        </Recentcontainer>
    )
}

export default Recent


const Recentcontainer=styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
width:100vw;
background:#f0f5f9;


`
const RecTitle=styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
width:100%;
margin:2rem 0;

h2{
    text-align:center;
    width:100%;
    padding:1rem 0.5rem;

}
p{
    text-align:left;
    width:50%;
    padding:1rem 0.5rem;
    font-size:clamp(0.5rem,2vw,0.9rem);
}
`
const RecContent=styled.div`
display:grid;
grid-template-columns:1fr 1fr;
align-items:center;
justify-content:center;
width:80%;



@media screen and (max-width:768px){
    grid-template-columns:1fr;
}
`
const RecDes=styled.div`
display:flex;
flex-direction:column;
align-item:center;
justify-content:center;
width:100%;
margin:2rem 0;

`
const Item=styled.div`
display:grid;
grid-template-columns:0.5fr 1.5fr;
width:100%;

`
const ItemDes=styled.div`
display:flex;
flex-direction:column;
align-item:center;
justify-content:center;
width:100%;
margin:0.5rem 0.5rem;
padding:0.5rem 0.5rem;
`

const ItemDate=styled.div`
display:flex;
align-items:start;
justify-content:center;
margin:0.5rem 0;
width:65%;
font-size:clamp(0.7rem,3vw,1.2rem);
height:70%;
color:#343147;



padding:1rem;
strong{
    background:#f2a73f;
    border-radius:100%;
    padding:1.2rem 1.3rem;
    margin:0.5rem 0.5rem;
    text-align:center;
    
}


}
`
const ItemTitle=styled(Link)`
text-decoration:none;
width:100%;
padding:0.5rem;
color:#343147;
font-weight:600;
`

const Itemp=styled.p`
width:100%;
padding:0.5rem;
line-height:1.5;
`
const RecImg=styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100%;
img{
    width:90%;
    margin:1rem;

}

`
