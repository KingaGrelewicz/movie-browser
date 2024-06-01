import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectRepositories, selectRepositoriesStatus, fetchRepositories, selectPages } from "./MoviesBrowser/movieBrowserSlice";
import { Container} from "./styled";
import { PageView } from "./PageView";
import { Paginations } from "./Pagination";


export const PageStatus = () => {

    const repositoriesStatus = useSelector(selectRepositoriesStatus);
    
    const dispatch = useDispatch();
    const repositories = useSelector(selectRepositories);
    const pageNumber = 7;

    useEffect(() => {
        dispatch(fetchRepositories(pageNumber));
    }, [dispatch]);

    return (
        <Container>
                <PageView
                    status={repositoriesStatus}
                    repositories={repositories}/>
                    <Paginations page = {pageNumber}/>
        </Container>
        

    );
};