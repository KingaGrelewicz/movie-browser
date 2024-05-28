import { useSelector } from "react-redux";
import { selectPeopleDetailsState } from "./peopleDetailsSlice";
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

const PeopleDetails = () => {
  const { details } = useSelector(selectPeopleDetailsState);

  return (
    <PeopleDetailsWrapper>
      <PeopleDetailsPhoto
        src={`https://image.tmdb.org/t/p/w185/${details.profile_path}`}
        alt={details.name}
      />
      <PeopleDetailsContent>
        <PeopleDetailsHeader>{details.name}</PeopleDetailsHeader>
        <PeopleDetailsData>
          <PeopleDetailsBirthDate>Date of birth:</PeopleDetailsBirthDate>
          <PeopleDetailsBirthDateContent>
            {details.birthday}
          </PeopleDetailsBirthDateContent>
          <PeopleDetailsBirthPlace>Place of birth:</PeopleDetailsBirthPlace>
          <PeopleDetailsBirthPlaceContent>
            {details.place_of_birth}
          </PeopleDetailsBirthPlaceContent>
        </PeopleDetailsData>
      </PeopleDetailsContent>
      <PeopleDetailsBiography>{details.biography}</PeopleDetailsBiography>
    </PeopleDetailsWrapper>
  );
};

export default PeopleDetails;
