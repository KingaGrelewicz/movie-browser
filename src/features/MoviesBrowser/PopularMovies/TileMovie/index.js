import { 
	Container, 
	Image, 
	Description, 
	DescriptionTitle, 
	Links, 
	Date, 
  } from "./styled";
  import Genres from "../../Genres/index.js";
  import { useDispatch } from "react-redux";
  import { useEffect } from "react";
  import { fetchGenres } from "../../Genres/genresSlice.js";
  import Rating from "../../Rating";
  
  export const TileMovie = ({
	  id,
	  title,
	  release_date,
	  poster_path,
	  vote_count,
	  vote_average,
	  genre_ids
  }) => {
	  const dispatch = useDispatch();
  
	  useEffect(() => {
		  dispatch(fetchGenres());
	  }, [dispatch]);
  
	  return (
		  <Container key={id}>
			  <Image src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt="" />
			  <Description>
				  <div>
					  <DescriptionTitle>
						  <Links to={`/movies/${id}`}>{title}</Links>
					  </DescriptionTitle>
					  <Date>{release_date}</Date>
					  <Genres genreIds={genre_ids} />
				  </div>
				  <Rating variant="movies" ratingData={{ vote_average, vote_count }} />
			  </Description>
		  </Container>
	  );
  };
  