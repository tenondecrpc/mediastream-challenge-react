/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from "react";
import { getGenres, getMovies} from "../../services/Exercise02";

const movieLibraryController = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [fetchCount, setFetchCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [order, setOrder] = useState(1);

  useEffect(() => {
    const handleGenreFetch = async () => {
      try {
        setLoading(true);
        const result = await getGenres();
        setGenres(result);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.info("Run yarn movie-api for fake api");
      }
    };
    handleGenreFetch();
  }, []);

  useEffect(() => {
    const handleMovieFetch = async () => {
      setFetchCount((prevCount) => prevCount + 1);
      try {
        setLoading(true);
        const result = await getMovies(50, selectedGenre, 'year', order);
        setMovies(result);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.info("Run yarn movie-api for fake api");
      }
    };
    handleMovieFetch();
  }, [selectedGenre, order]);

  const toggleOrder = () => {
    setOrder(order * -1);
  };

  return {
    genres,
    movies,
    fetchCount,
    order,
    setSelectedGenre,
    toggleOrder,
    loading,
  };
};
export default movieLibraryController;