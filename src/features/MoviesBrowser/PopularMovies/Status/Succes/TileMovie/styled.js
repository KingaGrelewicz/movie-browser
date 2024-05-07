import styled from "styled-components";
import {ReactComponent as StarIcon} from "./Star.svg"


export const Image = styled.img`
width: 292px;
height: 434px;
border: 5px;
margin: 16px;
`
export const Description = styled.div`
margin: 0px 16px 16px 16px;
`;

export const DescriptionTitle = styled.h2`
font-weight: 500;
font-size: 22px;
margin-bottom: 8px;
margin-top: 0px;
`;

export const Data = styled.div`
font-size: 16px;
font-weight: 400;
color: ${({theme})=>theme.color.darkerGrey};
margin-bottom: 8px;
`
export const Genres = styled.ul`
list-style: none;
display: flex;
flex-wrap: wrap;
padding: 0px;
margin-bottom: 39px;
`

export const Genre = styled.li`
font-size: 14px;
font-weight: 400;
background-color: ${({theme})=>theme.color.grey};
border-radius: 5px;
padding: 8px 16px 8px 16px;
text-align: center;
margin-right: 8px;
`

export const Rating = styled.footer`
margin-bottom: 16px;
display: flex;
`

export const AverageRating = styled.a`
font-size: 16px;
font-weight: 600;
margin-right: 12px;
`

export const NumberOfRating = styled.a `
font-size: 16px;
font-weight: 600;
color: ${({theme})=> theme.color.darkerGrey};
margin-right: 12px;
`

export const StyleStarIcon = styled(StarIcon)`
margin-right: 12px;
`

export const Container = styled.section`
width: 324px;
height: 650px;
border-radius: 5px;
background-color: ${({theme})=>theme.color.white};
box-shadow: 0px 4px 12px 0px #BAC7D580;
display: grid;
`
