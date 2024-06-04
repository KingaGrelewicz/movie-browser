import { useSelector } from "react-redux";
import { selectPeopleDetailsState, fetchPeopleDetails, selectPeopleState } from "./peopleDetailsSlice";
import {
  PeopleDetailsBiography,
  PeopleDetailsBirthDate,
  PeopleDetailsBirthDateContent,
  PeopleDetailsBirthPlace,
  PeopleDetailsBirthPlaceContent,
  PeopleDetailsContent,
  PeopleDetailsData,
  PeopleDetailsHeader,
  PeopleDetailsPhoto,
  PeopleDetailsWrapper,
} from "./styled";

import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const PeopleDetails = () => {
  const detailsPeople = useSelector(selectPeopleState);
  const details = detailsPeople.details
  const dispatch = useDispatch();
  const params = useParams();
  const peopleIp = params.id;


  useEffect(() => {
    dispatch(fetchPeopleDetails(peopleIp));
  }, [peopleIp]);

  
  return (
    <PeopleDetailsWrapper>
      <PeopleDetailsPhoto
        src={`https://image.tmdb.org/t/p/original/${details?.profile_path}`}
        alt={details?.name}
      />
      <PeopleDetailsContent>
        <PeopleDetailsHeader>{details?.name}</PeopleDetailsHeader>
        <PeopleDetailsData>
          <PeopleDetailsBirthDate>Date of birth:</PeopleDetailsBirthDate>
          <PeopleDetailsBirthDateContent>
            {details?.birthday}
          </PeopleDetailsBirthDateContent>
          <PeopleDetailsBirthPlace>Place of birth:</PeopleDetailsBirthPlace>
          <PeopleDetailsBirthPlaceContent>
            {details?.place_of_birth}
          </PeopleDetailsBirthPlaceContent>
        </PeopleDetailsData>
      </PeopleDetailsContent>
      <PeopleDetailsBiography>{details?.biography}</PeopleDetailsBiography>
    </PeopleDetailsWrapper>
  );
};

export default PeopleDetails;
