import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPeople, selectPopularPeopleData, selectPopularPeopleStatus } from "./PopularPeople/popularPeopleSlice";
import { PopularPeopleStatus } from "./PopularPeopleStatus";


export const PopularPeopleView = () => {
  const dispatch = useDispatch();

  const peopleStatus = useSelector(selectPopularPeopleStatus);
  const peopleData = useSelector(selectPopularPeopleData);

  useEffect(() => {
    dispatch(fetchPeople());
  }, [dispatch]);

  return (
    <div>
      <PopularPeopleStatus status={peopleStatus} repositories={peopleData} />
    </div>
  );
};
