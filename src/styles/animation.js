import { keyframes, css } from "styled-components"

const fadeInKeyFrames = keyframes`
    from{
        filter: blur(5px);
        opacity: 0;
    }
    to {
        filter: blur(0);
        opacity: 1;
    }
`

const fadeIn = ({time='1s', type='ease'}={})=>{
    return css`animation: ${time} ${fadeInKeyFrames} ${type};`
}

const scaleDown = keyframes`
    from {
      transform: scale(1);
    }
    to {
      transform: scale(0.5);
    }
`;

 const scale = ({time='1s', type='ease'} = {})=> css ` 
    animation: ${time} ${scaleDown} ${type};
`;

export {fadeIn, scale}