import { ReactComponent as ErrorIcon } from "./../../images/error.svg";
import { Info, Text, Wrapper, ErrorNavLink } from "./styled";

const Error = () => {
  return (
    <Wrapper>
      <ErrorIcon />
      <Text>Opps! Something went wrong...</Text>
      <Info>
        Please check your network connection <br /> and try again
      </Info>
      <ErrorNavLink to="/movies">Back to home page</ErrorNavLink>
    </Wrapper>
  );
};

export default Error;
