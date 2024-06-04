import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { mediaQuery } from "../../core/App/theme";
import { ReactComponent as MovieIcon } from "./Icon/CameraIcon.svg";

const activeClassName = "link-active";

export const StyledNavLink = styled(NavLink).attrs(() => ({
	activeClassName,
}))`
	color: ${({ theme }) => theme.color.white};
	text-decoration: none;
	padding: 8px 24px;
	font-size: 14px;
	font-weight: 600;
	line-height: 21px;

	&.${activeClassName} {
		border: 1px solid ${({ theme }) => theme.color.white};
		border-radius: 24px;
	}

	&:hover {
		border: 1px solid ${({ theme }) => theme.color.white};
		border-radius: 24px;
		cursor: pointer;
	}

	@media (max-width: ${mediaQuery.breakpoints.mobileMax}px) {
		font-size: 12px;
		font-weight: 600;
		padding: 6px 14px;
	}
`;

export const Item = styled.li`
	margin: 0px 8px;

	@media (max-width: ${mediaQuery.breakpoints.mobileMax}px) {
		margin: auto;
	}
`;

export const List = styled.ul`
	background: ${({ theme }) => theme.color.black};
	margin-top: 0px;
	list-style: none;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-around;
	padding: 23px 0px;

	@media (max-width: ${mediaQuery.breakpoints.tabletVerticalMax}px) {
		display: grid;
		grid-row-gap: 24px;
	}
`;

export const Wrapper = styled.span`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const PageTitle = styled.span`
	font-size: 24px;
	font-weight: 500;
	line-height: 40px;
	margin-right: 20px;
	color: ${({ theme }) => theme.color.white};
	display: flex;
	align-items: center;
	flex-wrap: nowrap;

	@media (max-width: ${mediaQuery.breakpoints.tabletHorizonMax}px) {
		margin-right: 20px;
	}

	@media (max-width: ${mediaQuery.breakpoints.mobileMax}px) {
		font-size: 13px;
		font-weight: 500;
		margin: 10px;
	}
`;

export const Icon = styled(MovieIcon)`
	width: 40px;
	height: 40px;
	margin-right: 12px;

	@media (max-width: ${mediaQuery.breakpoints.mobileMax}px) {
		width: 30px;
		height: 30px;
	}
`;
