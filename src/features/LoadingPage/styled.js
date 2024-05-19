import {ReactComponent as Spinner} from "./icon-spinner.svg";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
to {
    transform: rotate(360deg);
}
`;

export const StyledSpinner = styled(Spinner)`
display: block;
margin: 91px auto;
animation: ${rotate} 1s linear infinite;
height: auto;
`