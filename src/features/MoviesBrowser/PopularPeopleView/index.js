import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPeople,
  selectPopularPeopleData,
  selectPopularPeopleStatus,
  selectPages,
} from "./PopularPeople/popularPeopleSlice";
import { PopularPeopleStatus } from "./PopularPeopleStatus";

const PopularPeopleView = () => {
  const dispatch = useDispatch();

  const pages = useSelector(selectPages);
  const peopleStatus = useSelector(selectPopularPeopleStatus);

  useEffect(() => {
    dispatch(fetchPeople(pages));
  }, [pages]);

  return (
    <div>
      <PopularPeopleStatus pages ={pages} status={peopleStatus} />
    </div>
  );
};

export default PopularPeopleView;
