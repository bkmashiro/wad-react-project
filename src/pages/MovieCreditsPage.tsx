import React from "react";
import { useParams } from "react-router-dom";
import { getMovie } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";

const MovieCreditsPage = (props) => {
  const { id } = useParams();
  const {
    data: movie,
    error,
    isLoading,
    isError,
  } = useQuery(["movie", { id: id }], getMovie);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{(error as any).message}</h1>;
  }

  return (
    <>
      {movie ? (
        <>
          <p>
            This page is for the movie with id {id}. This page will show details
            of the movie.
          </p>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default MovieCreditsPage;
