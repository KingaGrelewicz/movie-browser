import { Container, LastAppositionNext } from "./styled";
import { OneApposition, OneAppositionFirst, Pages, PageNumber, LastApposition, IconButton, BackIconButton } from "./styled";
import { useDispatch } from "react-redux";
import { useQueryParameter } from "../../common/Navigation/Search/queryParameter";

export const Paginations = ({pages, setPages}) => {
  const query = useQueryParameter("query");

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

      
      if(!query) {
        return(
          <Container>
              <OneAppositionFirst onClick={firstPages} disabled={pages === 1}><IconButton disabled={pages === 1}/><IconButton /></OneAppositionFirst>
              <OneApposition onClick={decreasePages} disabled={pages === 1}><IconButton /></OneApposition>
              <Pages>Page <PageNumber>{pages}</PageNumber> of <PageNumber>500</PageNumber></Pages>
              <LastAppositionNext onClick={incrementPages} disabled={pages === 500}><BackIconButton /></LastAppositionNext>
              <LastApposition onClick={lastPages} disabled={pages === 500}><BackIconButton/><BackIconButton/></LastApposition>
          </Container>
  
      );
      }
      
  
}

