import styled from "styled-components";

const Anchor = styled.a`
    display: flex;
    flex-direction: column;
    text-align: center;
    text-decoration: none;
    width: 75px;
`
const Image = styled.img`
    border: 1px solid #ddd;
    box-shadow: 0px 10px 14px;
    border-radius: 50%;
    overflow: hidden;
    object-fit: cover;
    height: 75px;
    width: 75px;
`
export {Anchor, Image}