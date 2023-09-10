import styled from "styled-components";
import {styled as muiStyled } from '@mui/material/styles';
import { InputBase } from "@mui/material";

export const Input = muiStyled(InputBase)({
  '& .MuiInputBase-input': {
    fontSize: "2rem",
    fontWeight: "700",
    color: "black",
    maxWidth: "125px",
    height: "30px",
    border: "1px solid black",
    borderRadius: "5px",
    padding: "1rem",
    '&:focus': {
      borderColor: "hsl(259,100%,65%)",
    },
  },
});

export const Label = muiStyled('label')({
  color: " hsl(0, 1%, 44%)",
  fontSize: "0.8rem",
  fontWeight: "600",
  letterSpacing: "2px"
})

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