import { useSelector } from "react-redux";
import { selectRepositories, selectRepositoriesStatus } from "../movieBrowserSlice";
import { Container } from "./styled";
import { PageView } from "../../PageView";
import { selectPages, fetchRepositories } from "../movieBrowserSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

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
		</Container>
	);
};
