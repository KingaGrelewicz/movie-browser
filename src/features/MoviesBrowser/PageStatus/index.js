import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectRepositories,
  selectRepositoriesStatus,
  selectPages,
  fetchRepositories,
} from "../movieBrowserSlice";
import { Container } from "./styled";
import { PageView } from "../../PageView";
import { Paginations } from "../../Pagination";
import { useEffect } from "react";
import { setPages } from "../movieBrowserSlice";

export const PageStatus = () => {
  const dispatch = useDispatch();
  const repositoriesStatus = useSelector(selectRepositoriesStatus);
  const repositories = useSelector(selectRepositories);
  const pages = useSelector(selectPages);

  useEffect(() => {
    dispatch(fetchRepositories(pages));
  }, [pages]);

  return (
    <Container>
      <PageView status={repositoriesStatus} repositories={repositories} />
      {repositories && repositories.length > 0 && (
        <Paginations pages={pages} setPages={setPages} />
      )}
    </Container>
  );
};
