import { HOST, PORT } from "../../utils";

export const getGenres = () => {
  return fetch(`${HOST}:${PORT}/genres`).then((res) => res.json());
}

export const getMovies = (limit, selectedGenre, sort, order) => {
  return fetch(`${HOST}:${PORT}/movies?_limit=${limit}&genres_like=${selectedGenre}&_sort=${sort}&_order=${order > 0 ? "asc" : "desc"}`).then((res) => res.json());
}