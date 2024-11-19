import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterMoviesCard";
import MovieList from "../movieList";
import Grid from "@mui/material/Grid2";

type Filter = (movie: any) => boolean;

function MovieListPageTemplate({ movies, title, action }) {
  // const [nameFilter, setNameFilter] = useState("");
  // const [genreFilter, setGenreFilter] = useState("0");
  // const [starFilter, setStarFilter] = useState(0);
  // const [dateFilter, setDateFilter] = useState("");

  const [filters, setFilters] = useState<{
    [key: string]: Filter;
  }>({});

  // const genreId = Number(genreFilter);

  // let displayedMovies = movies
  //   .filter((m) => {
  //     return m.title.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
  //   })
  //   .filter((m) => {
  //     return genreId > 0 ? m.genre_ids.includes(genreId) : true;
  //   });

  const handleFiltersChange = (name, filter) => {
    setFilters((prev) => ({ ...prev, [name]: filter }));
  };

  const handleRemoveFilter = (name) => {
    setFilters((prev) => {
      const newFilters = { ...prev };
      delete newFilters[name];
      return newFilters;
    });
  };

  const displayedMovies = movies.filter((m) => {
    console.log(filters);
    const filterKeys = Object.keys(filters);
    return filterKeys.every((key) => {
      if (!filters[key]) {
        return true;
      }
      return filters[key](m);
    });
  });

  return (
    <Grid container>
      <Grid size={12}>
        <Header title={title} />
      </Grid>
      <Grid container sx={{ flex: "1 1 500px" }}>
        <Grid
          key="find"
          size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }}
          sx={{ padding: "20px" }}
        >
          <FilterCard
            onFilterChange={handleFiltersChange}
            onFilterRemoved={handleRemoveFilter}
          />
        </Grid>
        <MovieList action={action} movies={displayedMovies}></MovieList>
      </Grid>
    </Grid>
  );
}
export default MovieListPageTemplate;
