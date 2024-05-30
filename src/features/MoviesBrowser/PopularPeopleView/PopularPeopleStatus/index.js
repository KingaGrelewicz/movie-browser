import { Loading } from "../../../LoadingPage";
import PopularPeople from "../PopularPeople";

export const PopularPeopleStatus = ({ status, data }) => {
  switch (status) {
    case "initial":
      return null;

    case "loading":
      return <Loading />;

    case "error":
      return <Loading />;

    case "success":
      return <PopularPeople data={data} />;

    default:
      throw new Error(`incorrect status: ${status}`);
  }
};
