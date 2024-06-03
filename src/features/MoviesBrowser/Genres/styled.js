import styled from "styled-components";
import { mediaQuery } from "../../../core/App/theme";

export const GenresList = styled.ul`
	list-style: none;
	display: flex;
	flex-wrap: wrap;
	padding: 0px;

	@media (max-width: ${mediaQuery.breakpoints.mobileMax}px) {
		padding: 0px;
	}
`;

export const GenresItem = styled.li`
	font-size: 14px;
	font-weight: 400;
	background-color: ${({ theme }) => theme.color.grey};
	border-radius: 5px;
	padding: 8px 16px 8px 16px;
	text-align: center;
	margin-right: 8px;
	margin-bottom: 8px;
	height: fit-content;

	@media (max-width: ${mediaQuery.breakpoints.mobileMax}px) {
		font-family: Poppins;
		font-size: 10px;
		font-weight: 400;
		line-height: 11px;
	}
`;
