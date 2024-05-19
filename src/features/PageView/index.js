import { Loading } from "../LoadingPage";
import { Popular } from "../MoviesBrowser/PopularMovies/Popular";

export const PageView = ({status, repositories}) => {

    switch (status) {
        case "initial":
            return null;

        case "loading":
            return <Loading />;

        case "error":
            return <Loading />;

        case "success":
            return <Popular repositories={repositories} />

            default:
                throw new Error (`incorrect status: ${status}`);
    }
};