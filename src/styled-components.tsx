import styled from "styled-components";
import TextField from "@mui/material/TextField";

export const Input = styled(TextField)`
  width: 150px;
  font-size: 5rem;
`;

export const Linea = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e0e0e0;
`
export const ArrowDownContainer = styled.div`
  width: 100px;
  height: 100px;
  background-color: black;
  border-radius: 50%;
  display: grid;
  place-content: center;
  place-items: center;
  position: absolute;
  right: 0;
  cursor: pointer;
`

export const H1 = styled.h1`
  font-size: 5rem;
  font-weight: bold;
  color: hsl(0,0%,8%);
`

export const Span = styled.span`
  color: hsl(259,100%,65%);
`