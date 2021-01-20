import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'
import{VscLocation} from 'react-icons/vsc'
import {BiPhoneCall} from 'react-icons/bi'
import {TiSocialDribbble,TiSocialTwitter,TiSocialFacebook,TiSocialGithub} from 'react-icons/ti'

function UnderHeader() {
    return (
        
           <UnderHeaderContainer>
               <UnderAdress>
                   <LocationIcon />
                    <p>198 west 21th Street, Suite 721 New York NY 10016</p>
               </UnderAdress>
               <UnderCall>
                    <CallIcon />
                    <p>+1-123-456-7890</p>
               </UnderCall>
               <UnderSocial>
                    <NavLink to="/Dribbble"><DribbbleIcon /></NavLink>
                    <NavLink to="/"><TwitterIcon /></NavLink>
                    <NavLink to="/Facebook"><FacebookIcon /></NavLink>
                    <NavLink to="/"><GithubIcon /></NavLink>

               </UnderSocial>
            </UnderHeaderContainer> 
        
    );
}

export default UnderHeader

const UnderHeaderContainer=styled.div`
display: flex;
align-items: center;
justify-content:space-around;
width: 100vw;
height: 35px;
padding: 1rem calc((100vw - 1200px) / 2);
background: #343147;
color:#fff;
font-size:13px;


`
const UnderAdress=styled.div`
display:flex;
align-items: center;
border-right:1px solid #f2a73f;
border-left:1px solid #f2a73f;
padding: 0 0.5rem;
@media screen and (max-width:768px){
    display: none;
}
`
const UnderCall=styled.div`
display:flex;
align-items: center;
border-right:1px solid #f2a73f;
border-left:1px solid #f2a73f;
padding: 0 0.5rem;

`
const UnderSocial=styled.div`
display:flex;
align-items: center;
border-right:1px solid #f2a73f;
border-left:1px solid #f2a73f;
padding: 0 0.5rem;

`
const NavLink=styled(Link)``
const DribbbleIcon=styled(TiSocialDribbble)`
padding: 0 5px;
color:#fff;
font-size:30px;
cursor: pointer;

`
const TwitterIcon=styled(TiSocialTwitter)`
padding: 0 5px;
color:#fff;
font-size:30px;
cursor: pointer;
`
const FacebookIcon=styled(TiSocialFacebook)`
padding: 0 5px;
color:#fff;
font-size:30px;
cursor: pointer;
`
const GithubIcon=styled(TiSocialGithub)`
padding: 0 5px;
color:#fff;
font-size:30px;
cursor: pointer;
`
const LocationIcon=styled(VscLocation)`
padding: 0 5px;
color:#fff;
font-size:30px;
cursor: pointer;

`
const CallIcon=styled(BiPhoneCall)`
padding: 0 7px;
color:#fff;
font-size:30px;
cursor: pointer;
`
