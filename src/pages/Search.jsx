import React from "react";
import { useLocation } from "react-router-dom";
import { dummy } from "../movieDummy";

export default function Search() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const query = params.get("query");

  const movies = dummy.results;

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(query?.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>검색 결과</h2>
      {query ? (
        filteredMovies.length > 0 ? (
          <ul>
            {filteredMovies.map((movie) => (
              <li key={movie.id} style={{ marginBottom: "20px" }}>
                <img
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  alt={movie.title}
                  style={{
                    width: "100px",
                    height: "150px",
                    objectFit: "cover",
                  }}
                />
                <div>
                  <strong>{movie.title}</strong> ({movie.release_date})
                </div>
                <p style={{ maxWidth: "400px" }}>{movie.overview}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>"{query}"에 대한 검색 결과가 없습니다.</p>
        )
      ) : (
        <p>검색어를 입력하세요.</p>
      )}
    </div>
  );
}
