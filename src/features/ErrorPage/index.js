import { toHomePage } from "../../core/App/routes";
import { useNavigate } from "react-router-dom";
import { ReactComponent as ErrorIcon } from "./../../images/error.svg";
import { Info, Text, Wrapper, Button } from "./styled";

export default () => {
	const navigate = useNavigate();

	return (
		<Wrapper>
			<ErrorIcon />
			<Text>Opps! Something went wrong...</Text>
			<Info>
				Please check your network connection <br /> and try again
			</Info>
			<Button onClick={() => navigate(toHomePage())} >
				Back to home page
			</Button>
		</Wrapper>
	);
};
