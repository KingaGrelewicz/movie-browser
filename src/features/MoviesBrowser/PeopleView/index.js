import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPeopleDetails,
  selectPeopleDetailsState,
} from "./PeopleDetails/peopleDetailsSlice";
import {
  fetchPeopleCredits,
  selectPeopleCreditsState,
} from "./PeopleCredits/peopleCreditsSlice";
import { PeopleViewWrapper } from "./styled";
import PeopleCredits from "./PeopleCredits";
import PeopleDetails from "./PeopleDetails";
import { Loading } from "../../LoadingPage";

const PeopleView = () => {
  const dispatch = useDispatch();
  const details = useSelector(selectPeopleDetailsState);
  const peopleCredits = useSelector(selectPeopleCreditsState);

  useEffect(() => {
    dispatch(fetchPeopleDetails());
    dispatch(fetchPeopleCredits());
  }, [dispatch]);

  return (
    <>
      {details.status && peopleCredits.status === "loading" && <Loading />}
      {details.status && peopleCredits.status === "success" && (
        <PeopleViewWrapper>
          <PeopleDetails />
          <PeopleCredits
            creditsData={peopleCredits.creditsData.cast}
            type="Cast"
          />
          <PeopleCredits
            creditsData={peopleCredits.creditsData.crew}
            type="Crew"
          />
        </PeopleViewWrapper>
      )}
      {details.status && peopleCredits.status === "error" && (
        <div>Error loading details</div>
      )}
    </>
  );
};

export default PeopleView;
