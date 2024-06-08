import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPeople,
  selectPopularPeopleStatus,
  selectPages,
} from "./PopularPeople/popularPeopleSlice";
import { PopularPeopleStatus } from "./PopularPeopleStatus";
import { useQueryParameter } from "./../../../common/Navigation/Search/queryParameter"

const PopularPeopleView = () => {
  const dispatch = useDispatch();
  const query = useQueryParameter("query");

  const pages = useSelector(selectPages);
  const peopleStatus = useSelector(selectPopularPeopleStatus);

  useEffect(() => {
    dispatch(fetchPeople(pages));
  }, [pages]);

  return (
    <div>
      <PopularPeopleStatus pages ={pages} status={peopleStatus} query={query} />
    </div>
  );
};

export default PopularPeopleView;
