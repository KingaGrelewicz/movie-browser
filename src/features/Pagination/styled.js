import styled from "styled-components";
import { ReactComponent as Icon } from "./Vector.svg";
import { ReactComponent as IconBack } from "./Vector2.svg";
import { mediaQuery } from "../../core/App/theme";

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
display: flex;
align-items: center;
cursor: pointer;

&:hover {
    scale: 1.05;
  }

&::after {
      content: 'Previous';
    };
    

&:disabled {
    background-color: #E4E6F0;
}

@media (max-width: ${mediaQuery.breakpoints.mobileMax}px) {
   
padding-left: 12px;
padding-right: 12px;
    &::after {
      content: '';
    }
  }
`
export const OneAppositionFirst = styled.button`
border: none;
padding-bottom: 8px;
padding-top: 8px;
padding-left: 16px;
padding-right: 16px;
background-color: #D6E4FF;
border-radius: 5px;
margin: 6px;
color: black;
display: flex;
align-items: center;
cursor: pointer;

&:hover {
    scale: 1.05;
  }

&::after {
      content: 'First';
    };
    

&:disabled {
    background-color: #E4E6F0;
}

@media (max-width: ${mediaQuery.breakpoints.mobileMax}px) {
    padding-left: 12px;
    padding-right: 12px;
    &::after {
      content: '';
    }
  }
`
export const LastAppositionNext = styled.button`
border: none;
padding-bottom: 8px;
padding-top: 8px;
cursor: pointer;
padding-left: 16px;
padding-right: 16px;
background-color: #D6E4FF;
border-radius: 5px;
margin: 6px;
color: black;
display: flex;
align-items: center;

&:hover {
    scale: 1.05;
  }

&::after {
      content: 'Next';
    };
    

&:disabled {
    background-color: #E4E6F0;
}

@media (max-width: ${mediaQuery.breakpoints.mobileMax}px) {
    padding-left: 12px;
padding-right: 12px;
    &::after {
      content: '';
    }
  }
`
export const LastApposition = styled.button`
border: none;
padding-bottom: 8px;
padding-top: 8px;
cursor: pointer;
padding-left: 16px;
padding-right: 16px;
background-color: #D6E4FF;
border-radius: 5px;
margin: 6px;
color: black;
display: flex;
align-items: center;

&:hover {
    scale: 1.05;
  }

&::after {
      content: 'Last';
    };
    

&:disabled {
    background-color: #E4E6F0;
}

@media (max-width: ${mediaQuery.breakpoints.mobileMax}px) {
    padding-left: 12px;
padding-right: 12px;
    &::after {
      content: '';
    }
  }
`
export const Pages = styled.a`
color: #7E839A;
margin: 24px;
font-size: 14px;

@media (max-width: ${mediaQuery.breakpoints.mobileMax}px) {
    font-size: 10px;
    margin: 2px;
  }
`

export const PageNumber = styled.b`
color: black;
`

export const IconButton = styled(Icon)`
margin-right: 4px;

`

export const BackIconButton = styled(IconBack)`
margin-left: 4px;
order: 2;
`
