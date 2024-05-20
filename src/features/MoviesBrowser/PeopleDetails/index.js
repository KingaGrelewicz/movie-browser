import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPeopleDetails,
  selectPeopleDetailsState,
} from "./peopleDetailsSlice";
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
// import poster from "../../../images/poster.png";

const PeopleDetails = () => {
  const dispatch = useDispatch();
  const { status, details } = useSelector(selectPeopleDetailsState);

  useEffect(() => {
    dispatch(fetchPeopleDetails());
  }, [dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "error") {
    return <div>Error loading details</div>;
  }

  if (status === "success") {
    const { profile_path, name, birthday, place_of_birth, biography } = details;
    return (
      <PeopleDetailsWrapper>
        <PeopleDetailsPhoto
          src={`https://image.tmdb.org/t/p/w185/${profile_path}`}
          alt={name}
        />
        <PeopleDetailsContent>
          <PeopleDetailsHeader>{name}</PeopleDetailsHeader>
          <PeopleDetailsData>
            <PeopleDetailsBirthDate>Date of birth:</PeopleDetailsBirthDate>
            <PeopleDetailsBirthDateContent>
              {birthday}
            </PeopleDetailsBirthDateContent>
            <PeopleDetailsBirthPlace>Place of birth:</PeopleDetailsBirthPlace>
            <PeopleDetailsBirthPlaceContent>
              {place_of_birth}
            </PeopleDetailsBirthPlaceContent>
          </PeopleDetailsData>
        </PeopleDetailsContent>
        <PeopleDetailsBiography>{biography}</PeopleDetailsBiography>
      </PeopleDetailsWrapper>
    );
  }
  if (!details) {
    return null;
  }
};

// };

export default PeopleDetails;
