import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import instance from '../../API/axios';
import "./SearchPage.css";

function SearchPage() {

   const [searchResults, setSearchResults] = useState([]);

   const useQuery = () => {
      return new URLSearchParams(useLocation().search)
   }
   
   let query = useQuery();
   const searchTerm = query.get("q")
   useEffect(() => {
      if(searchTerm){
         fetchSearchMovie(searchTerm);
      }
   },[searchTerm])

   const fetchSearchMovie = async (searchTerm) => {
      console.log( searchTerm);
      try {
        const request = await instance.get(
          `/search/multi?query=${searchTerm}`
        );
        console.log(request);
        setSearchResults(request.data.results);
      } catch (error) {
        console.log("error", error);
      }
    };
   
   const renderSearchResults = () => {
      return searchResults.length > 0 ? (
        <section className="search-container">
          {searchResults && searchResults.map((movie) => {
            if (movie.backdrop_path !== null && movie.media_type !== "person") {
               console.log('결과값이 있습니다.');
              const movieImageUrl =
              "https://image.tmdb.org/t/p/w500" + movie.backdrop_path;
              return (
                <div className="movie" key={movie.id}>
                  <div
                    onClick={() => Navigate(`/${movie.id}`)}
                    className="movie__column-poster"
                  >
                    <img
                      src={movieImageUrl}
                      alt="movie"
                      className="movie__poster"
                    />
                  </div>
                </div>
              );
            }
          })}
        </section>
      ) : (
        <section className="no-results">
          <div className="no-results__text">
            <p>
               {console.log("결과값이 없습니다.")}
              찾고자하는 검색어"{searchTerm}"에 맞는 영화가 없습니다.
            </p>
          </div>
        </section>
      );
    };  
  return renderSearchResults()
      
}

export default SearchPage
