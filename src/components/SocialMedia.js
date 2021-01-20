import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'
import {TiSocialDribbble,TiSocialTwitter,TiSocialFacebook,TiSocialGithub} from 'react-icons/ti'
const SocialMedia = () => {
    return (
        <Social>
                    <NavLink to="/Dribbble"><DribbbleIcon /></NavLink>
                    <NavLink to="/"><TwitterIcon /></NavLink>
                    <NavLink to="/Facebook"><FacebookIcon /></NavLink>
                    <NavLink to="/"><GithubIcon /></NavLink>

        </Social>
    )
}

export default SocialMedia

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