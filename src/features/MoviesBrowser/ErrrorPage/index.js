import { ReactComponent as ErrorIcon } from "./error.svg";
import { Info, Text, Wrapper, Button } from "./styled";

export default () => {
	return (
		<Wrapper>
            <ErrorIcon />
			<Text>Opps! Something went wrong...</Text>
			<Info>Please check your network connection <br /> and try again</Info>
            <Button>Back to home page</Button>
		</Wrapper>
	);
};