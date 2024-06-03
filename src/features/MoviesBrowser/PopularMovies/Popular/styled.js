import styled from "styled-components";
import { mediaQuery } from "../../../../core/App/theme";

export const Container = styled.main`
	max-width: 1368px;
	margin: auto;
`;
export const Title = styled.h1`
	font-weight: 600;
	font-size: 36px;
	margin-left: 30px;

	@media (max-width: ${mediaQuery.breakpoints.mobileMax}px) {
		font-size: 18px;
		font-weight: 600;
	}
`;
export const Movies = styled.section`
	display: flex;
	flex-wrap: wrap;
	margin: 0 auto;
	justify-content: center;
	gap: 24px;
`;
