import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectRepositories, selectRepositoriesStatus, fetchRepositories } from "./MoviesBrowser/movieBrowserSlice";
import { Container} from "./styled";
import { PageView } from "./PageView";


export const PageStatus = () => {

    const dispatch = useDispatch();

    const repositoriesStatus = useSelector(selectRepositoriesStatus);
    const repositories = useSelector(selectRepositories);

    useEffect(() => {
        dispatch(fetchRepositories());
    }, [dispatch]);

    return (
        <Container>
                <PageView
                    status={repositoriesStatus}
                    repositories={repositories}
                />
        </Container>

    );
};