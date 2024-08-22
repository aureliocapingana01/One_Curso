import styled from "styled-components";
import { theme } from "../../../Slyle-Global/Themes";

export const Container = styled.div `
  position: relative;
  display: inline-block;
`

export const CampoDeBusca = styled.input `
  width: 566px;
  height: 56px;
  padding: 12px 16px;
  border-radius: 10px;
  border: 2px solid;
  border-color: ${theme.color.dourado_claro};
  background: transparent;
  box-sizing: border-box;
  color: ${theme.color.dourado_claro};
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
  
  /* & :focus {
    border-color: ${theme.color.dourado_claro};
    border-color: red;
    
  }  */
`
export const IconeLupa = styled.img `
  position: absolute;
  top: 10px;
  right: 10px;
  width: 20px;
  height: 20px;
`