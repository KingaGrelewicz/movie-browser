import Error from "../../../ErrorPage";
import { Loading } from "../../../LoadingPage";
import PopularPeople from "../PopularPeople";

export const PopularPeopleStatus = ({ pages, status, query }) => {

  switch (status) {
    case "initial":
      return null;

    case "loading":
      return <Loading />;

    case "error":
      return <Error />;

    case "success":

      return <PopularPeople pages={pages} query={query} />;

    default:
      throw new Error(`incorrect status: ${status}`);
  }
};
