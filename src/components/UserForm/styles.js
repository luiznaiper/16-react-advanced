import styled from "styled-components";

const Form = styled.form`
  padding: 16px 0;
`;
const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 3px;
  margin: 0 auto;
  margin-bottom: 8px;
  padding: 8px 4px;
  display: block;
  width: 90%;
  text-align: center;
  &[disabled] {
    opacity: 0.3;
  }
`;

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

const Title = styled.h2`
  font-size: 16px;
  font-weight: 500;
  padding: 8px 0;
  padding-left: 20px;
`;

const Error = styled.span`
  font-size: 14px;
  color: red;
  text-align: center;
  padding-left: 20px;
`;

export { Form, Input, Button, Title, Error };
