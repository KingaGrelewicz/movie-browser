import { useSelector } from "react-redux";
import { selectRepositories, selectRepositoriesStatus } from "../movieBrowserSlice";
import { Container } from "./styled";
import { PageView } from "../../PageView";
import { Paginations } from "../../Pagination";
import { selectPages, fetchRepositories } from "../movieBrowserSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
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
			<Paginations pages={pages} setPages={setPages} />
		</Container>
	);
};
