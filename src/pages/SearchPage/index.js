import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import  {useDebounce}  from '../../hooks/useDebounce';
import instance from '../../API/axios';
import "./SearchPage.css";

function SearchPage() {
   const navigate = useNavigate()
   const [searchResults, setSearchResults] = useState([]);

   const useQuery = () => {
      return new URLSearchParams(useLocation().search)
   }
   
   let query = useQuery();
   const searchTerm = query.get("q")
   const debouncedSearchTemr = useDebounce(searchTerm,2000)

   useEffect(() => {
      if(debouncedSearchTemr){
         fetchSearchMovie(debouncedSearchTemr);
      }
   },[debouncedSearchTemr])

   const fetchSearchMovie = async (searchTerm) => {
      console.log( searchTerm);
      try {
        const request = await instance.get(
          `/search/multi?query=${searchTerm}`
        );
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
              const movieImageUrl =
              "https://image.tmdb.org/t/p/w500" + movie.backdrop_path;
              return (
                <div className="movie" key={movie.id}>
                  <div
                    onClick={() => navigate(`/${movie.id}`)}
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
              찾고자하는 검색어"{debouncedSearchTemr}"에 맞는 영화가 없습니다.
            </p>
          </div>
        </section>
      );
    };  
  return renderSearchResults()
      
}

export default SearchPage
