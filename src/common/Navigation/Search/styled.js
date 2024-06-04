import styled from "styled-components";
import { mediaQuery } from "../../../core/App/theme";
import { ReactComponent as SearchIcon } from "./pic.svg";


export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	padding: 0px 10px;
	background-color: ${({ theme }) => theme.color.white};
	border: 1px solid ${({ theme }) => theme.color.grey};
	border-radius: 33px;
	max-width: 500px;
	width: 90%;

	@media (max-width: ${mediaQuery.breakpoints.tabletVerticalMax}px) {
		justify-content: flex-start;
	}
`;

export const Input = styled.input`
	font-size: 16px;
	font-weight: 400;
	line-height: 24px;
	color: ${({ theme }) => theme.color.darkerGrey};
	padding: 12px 0px;
	border: none;
	width: 80%;
	outline: none;

	@media (max-width: ${mediaQuery.breakpoints.tabletVerticalMax}px) {
		margin: 0px 20px;
		font-family: Poppins;
		font-size: 13px;
		font-weight: 400;
		width: 100%;
	}
`;

export const SearchPic = styled(SearchIcon)`
	width: 24px;
	height: 24px;
	margin: 10px;

	@media (max-width: ${mediaQuery.breakpoints.mobileMax}px) {
		width: 16px;
		height: 16px;
	}

`;
