import styled from "styled-components"; 

const ImgLoading = styled.div`
    box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);
    height: 100%;
    object-fit: cover;
    background-color: #e7e7de;
    position: absolute;
    top: 0;
    width: 100%;
`
const ButtonLoading = styled.button`
margin-top: 10px;
padding-top: 8px;
display: flex;
align-items: center;
background-color: #e7e7e7de;
width: 30px;
height: 30px;
border-radius: 50%;
`

export {ImgLoading, ButtonLoading}