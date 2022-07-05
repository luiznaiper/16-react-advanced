import styled, {css} from "styled-components";
import { scale } from "../../styles/animation";
const List = styled.ul`
    display: flex;
    overflow: scroll;
    width: 100%;
    ${props => props.fixed && css `
    {
        background-color: #fff;
        border-radius: 60px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
        left: 0;
        margin: 0 auto;
        max-width: 400px;
        padding: 5px;
        position: fixed;
        right: 0;
        top: -20px;
        transform: scale(.5);
        ${scale({time: '0.3s'})}        
        z-index: 1;
    `}
`
const Item = styled.li`
padding: 0 8px;

`

export {List, Item}