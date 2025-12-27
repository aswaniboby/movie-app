import { useState } from "react";

const API_KEY = "192b08c";

function App() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async () => {
    if (!search) return;

    const response = await fetch(
      `https://www.omdbapi.com/?s=${search}&apikey=${API_KEY}`
    );
    const data = await response.json();
    setMovies(data.Search || []);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>🎬 Movie Search App</h1>

      <input
        type="text"
        placeholder="Search movie..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={searchMovies}>Search</button>

      <div style={{ display: "flex", flexWrap: "wrap", marginTop: "20px" }}>
        {movies.map((movie) => (
          <div key={movie.imdbID} style={{ margin: "10px" }}>
            <img src={movie.Poster} width="150" />
            <h4>{movie.Title}</h4>
            <p>{movie.Year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
