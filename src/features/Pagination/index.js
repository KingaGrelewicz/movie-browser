import { Container } from "./styled";
import { OneApposition, Pages, PageNumber, LastApposition, IconButton, BackIconButton } from "./styled";
import { useDispatch } from "react-redux";


export const Paginations = ({pages, setPages}) => {


    const dispatch = useDispatch();

    const incrementPages = () => {
        dispatch(setPages(pages + 1));
    };

    const decreasePages = () => {
        dispatch(setPages(pages - 1));
    };

    const convertToLast = (argument) => {
        return 500;
      };
    
      const lastPages = () => {
        dispatch(setPages(convertToLast(pages)));
      };

      const convertToOne = (argument) => {
        return 1;
      };
    
      const firstPages = () => {
        dispatch(setPages(convertToOne(pages)));
      };
 
      
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

