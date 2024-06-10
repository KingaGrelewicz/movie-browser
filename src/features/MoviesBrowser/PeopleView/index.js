import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchPeopleDetails,selectPeopleState,} from "./PeopleDetails/peopleDetailsSlice";
import {fetchPeopleCredits,selectPeopleCreditsState,} from "./PeopleCredits/peopleCreditsSlice";
import { PeopleViewWrapper } from "./styled";
import PeopleCredits from "./PeopleCredits";
import PeopleDetails from "./PeopleDetails";
import { Loading } from "../../LoadingPage";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Error from "../../ErrorPage";


const PeopleView = () => {
  const dispatch = useDispatch();

  const params = useParams();
  const peopleIp = params.id;

  const details = useSelector(selectPeopleState);
  const peopleCredits = useSelector(selectPeopleCreditsState);

  useEffect(() => {
    dispatch(fetchPeopleDetails(peopleIp));
    dispatch(fetchPeopleCredits(peopleIp));
  }, [dispatch]);

  return (
    <>
      {details.status && peopleCredits.status === "loading" && <Loading />}
      {details.status && peopleCredits.status === "success" && (
       <>
        <PeopleViewWrapper>
          <PeopleDetails peopleIp={peopleIp} />
          <PeopleCredits peopleIp={peopleIp} type="Cast" />
          <PeopleCredits peopleIp={peopleIp} type="Crew" />
        </PeopleViewWrapper>
        
       </>
      )}
      {details.status && peopleCredits.status === "error" && (
        <Error />
      )}
    </>
  );
};

export default PeopleView;

