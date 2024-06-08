import styled from "styled-components";
import {ReactComponent as Icon} from "./Vector.svg";
import {ReactComponent as IconBack} from "./Vector2.svg";

export const Container = styled.div`
padding: 40px;
display: flex;
align-items: center;
justify-content: center;
`

export const OneApposition = styled.button`
border: none;
padding-bottom: 8px;
padding-top: 8px;
padding-left: 16px;
padding-right: 16px;
background-color: #D6E4FF;
border-radius: 5px;
margin: 6px;
color: black;

&:disabled {
    background-color: #E4E6F0;
}
`
export const LastApposition = styled.button`
border: none;
padding-bottom: 8px;
padding-top: 8px;
padding-left: 16px;
padding-right: 16px;
background-color: #D6E4FF;
border-radius: 5px;
margin: 6px;
color: black;

&:disabled {
    background-color: #E4E6F0;
}
`

export const Pages = styled.a`
color: #7E839A;
margin: 24px;
`

export const PageNumber = styled.b`
color: black;
`

export const IconButton = styled(Icon)`
margin-right: 8px;
`
export const BackIconButton = styled(IconBack)`
margin-left: 8px;
`
