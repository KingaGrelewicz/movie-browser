import { Container } from "./styled";
import { OneApposition, Pages, PageNumber, LastApposition, IconButton, BackIconButton } from "./styled";


export const Paginations = ({pages, incrementPages, decreasePages, firstPages, lastPages}) => {
  
 
    return(
        <Container>
            <OneApposition onClick={firstPages} disabled={pages === 1}><IconButton />First</OneApposition>
            <OneApposition onClick={decreasePages} disabled={pages === 1}><IconButton />Previous</OneApposition>
            <Pages>Page <PageNumber>{pages}</PageNumber> of <PageNumber>500</PageNumber></Pages>
            <LastApposition onClick={incrementPages} disabled={pages === 500}>Next<BackIconButton /></LastApposition>
            <LastApposition onClick={lastPages} disabled={pages === 500}>Last<BackIconButton /></LastApposition>
        </Container>

    );
}

