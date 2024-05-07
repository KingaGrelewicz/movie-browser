import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectRepositories, selectRepositoriesStatus, fetchRepositories } from "../movieBrowserSlice";
import { Container} from "./styled";
import { Content } from "./Status";


export const PopularMovies = () => {

    const dispatch = useDispatch();

    const repositoriesStatus = useSelector(selectRepositoriesStatus);
    const repositories = useSelector(selectRepositories);

    useEffect(() => {
        dispatch(fetchRepositories());
    }, [dispatch]);

    return (
        <Container>
                <Content
                    status={repositoriesStatus}
                    repositories={repositories}
                />
        </Container>

    );
};