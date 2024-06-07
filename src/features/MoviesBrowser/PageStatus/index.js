import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectRepositories,
  selectRepositoriesStatus,
  fetchRepositories,
} from "../movieBrowserSlice";
import { Container } from "./styled";
import { PageView } from "../../PageView";
import { Paginations } from "../../Pagination";
import { selectPages } from "../movieBrowserSlice";
import { setPages } from "../movieBrowserSlice";

export const PageStatus = () => {
  const repositoriesStatus = useSelector(selectRepositoriesStatus);
  const repositories = useSelector(selectRepositories);
  const pages = useSelector(selectPages);

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

  useEffect(() => {
    dispatch(fetchRepositories(pages));
  }, [pages]);

  return (
    <Container>
      <PageView status={repositoriesStatus} repositories={repositories} />
      <Paginations
        pages={pages}
        incrementPages={incrementPages}
        decreasePages={decreasePages}
        firstPages={firstPages}
        lastPages={lastPages}
      />
    </Container>
  );
};
