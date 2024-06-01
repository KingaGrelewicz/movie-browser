import { Container } from "./styled";
import { OneApposition, Pages, PageNumber, LastApposition, IconButton, BackIconButton } from "./styled";
import { useDispatch } from "react-redux";


export const Paginations = ({page}) => {
 
    return(
        <Container>
            <OneApposition><IconButton />First</OneApposition>
            <OneApposition><IconButton />Previous</OneApposition>
            <Pages>Page <PageNumber>{page}</PageNumber> of <PageNumber>500</PageNumber></Pages>
            <LastApposition onClick={page => page +1}>Next<BackIconButton /></LastApposition>
            <LastApposition>Last<BackIconButton /></LastApposition>
        </Container>

    );
}

