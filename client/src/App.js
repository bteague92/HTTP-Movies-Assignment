import React, { useState } from "react";
import { Route } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import UpdateMovieForm from "./Movies/updateMovie";

/* 
1. Build update route (dynamic param)
2. History.push in the btn click
3. Update form needs to populate the form based on param
4. PUT
*/

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <>
      <SavedList list={savedList} />
      <Route exact path="/" component={MovieList} />
      <Route
        path="/movies/:id"
        render={props => {
          return <Movie {...props} addToSavedList={addToSavedList} />;
        }}
      />
      <Route
        exact
        path="/update-movie/:id"
        render={props => (
          <UpdateMovieForm setSavedList={setSavedList} />
        )}
      />
    </>
  );
};

export default App;
