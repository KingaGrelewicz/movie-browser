import { useQueryParameter } from "../../common/Navigation/Search/queryParameter";
import Error from "../ErrorPage";
import { Loading } from "../LoadingPage";
import { Popular } from "../MoviesBrowser/PopularMovies/Popular";

export const PageView = ({ status}) => {
  const query = useQueryParameter("query");

    switch (status) {
        case "initial":
            return null;

        case "loading":
            return <Loading />;

        case "error":
            return <Loading />;

        case "success":
            return <Popular query={query} />

            default:
                throw new Error (`incorrect status: ${status}`);
    }
};