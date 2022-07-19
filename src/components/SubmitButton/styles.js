import styled from "styled-components";

const Button = styled.button`
  background-color: #fb8122;
  border-radius: 3px;
  margin: 0 auto;
  color: #fff;
  height: 32px;
  display: block;
  width: 90%;
  text-align: center;
  &[disabled] {
    opacity: 0.3;
  }
`;

export { Button };
