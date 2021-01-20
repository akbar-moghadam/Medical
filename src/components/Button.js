import styled from 'styled-components'
import {Link} from 'gatsby'



export const Button=styled(Link)`
background:${props => props.theme.bg};
color: ${props => props.theme.fg};
padding: 1rem;
text-decoration: none;
font-size: 18px;
white-space: nowrap;
bordr: none;
outline: none;
transition: 0.5s !important;
border-radius:${({round}) => (round ? '25px':'10px')};
white-space: nowrap;
min-width: 150px;
text-align: center;

&:hover{
    background:${props => props.theme.fg};
    color:${props => props.theme.bg};
    transform: translateY(-3px);
    font-style: bold;
    box-shadow:inset 2px 2px 20px 3px #87b05a;
}
}
`;

Button.defaultProps={
theme:{
    bg:"#343147",
    fg:"#f2a73f"
}
};

