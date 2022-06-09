import axios, { AxiosResponse } from "axios";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Genres, MovieDetails, MovieList } from "./Types";

const baseUrl = "https://api.themoviedb.org/3";
const movieDbApiKey = "86cc61c0363c975b6de2d10f8d915694";

export interface MovieSelector {
  processing: {
    isLoading: boolean;
    isError: Record<string, unknown> | null;
  };
  genre: { code: number; name: string };
  movieId: number;
  genres: Genres[];
  currentQuery: string;
  listOfMovies: MovieList;
  movieDetails: MovieDetails | null;
}

const initialState: MovieSelector = {
  processing: {
    isLoading: false,
    isError: null,
  },
  genre: { code: 0, name: "" },
  movieId: 0,
  genres: [],
  currentQuery: "",
  listOfMovies: {
    page: 1,
    results: [],
    total_pages: 1,
    total_results: 0,
  },
  movieDetails: null,
};

/**
 * THUNKS
 */

export const getGenres = createAsyncThunk("genres/getGenres", async () => {
  const res = await axios
      .get(`${baseUrl}/genre/movie/list?api_key=${movieDbApiKey}&language=en-US`)
      .then((response: AxiosResponse<Genres>) => response.data)
      .catch((error) => error);

  return res.genres;
});

export const getListByGenre = createAsyncThunk(
    "genres/getListByGenre",
    async (args: { genreId: number; page: number }
           ) => {
      const { genreId, page } = args;
      const res = await axios
          .get(
              `${baseUrl}/discover/movie?api_key=${movieDbApiKey}&with_genres=${genreId}&page=${page}`
          )
          .then((response: AxiosResponse<MovieList>) => response.data)
          .catch((error) => error);


      return res;
    }
);

export const getMovie = createAsyncThunk(
    "detail/getMovie",
    async (args: { movieId: number }) => {
      const { movieId } = args;
      const res = await axios
          .get(
              `${baseUrl}/movie/${movieId}?api_key=${movieDbApiKey}&language=en-US`
          )
          .then((response: AxiosResponse<MovieDetails>) => response.data)
          .catch((error) => error);
      console.log(res);
      return res;
    }
);

export const searchMovie = createAsyncThunk(
    "search/getMovie",
    async (args: { query: string }) => {
      const { query } = args;
      setQuery(query);

      const res = await axios
          .get(`${baseUrl}/search/movie?api_key=${movieDbApiKey}&query=${query}`)
          .then((response: AxiosResponse<MovieList>) => response.data)
          .catch((error) => error);
      return res;
    }
);

/**
 * REDUCERS
 */
export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    resetGenreList: (state: MovieSelector) => {
      state.listOfMovies = {
        page: 1,
        results: [],
        total_pages: 1,
        total_results: 0,
      };
    },
    resetMovieDetails: (state: MovieSelector) => {
      state.movieDetails = null;
    },
    setGenreData: (
        state: MovieSelector,
        action: PayloadAction<{ code: number; name: string }>
    ) => {
      state.genre = action.payload;
    },
    setMovieId: (state: MovieSelector, action: PayloadAction<number>) => {
      state.movieId = action.payload;
    },
    setQuery: (state: MovieSelector, action: PayloadAction<string>) => {
      state.currentQuery = action.payload;
    },
  },
  extraReducers: {
    [getGenres.pending.type]: (state) => {
      state.genres = [];
      state.processing = {
        isLoading: true,
        isError: null,
      };
    },
    [getGenres.fulfilled.type]: (state, action) => {
      state.genres = action.payload;
      state.processing = {
        isLoading: false,
        isError: null,
      };
    },
    [getGenres.rejected.type]: (state, action) => {
      state.genres = [];
      state.processing = {
        isLoading: false,
        isError: action.payload.message,
      };
    },
    [getListByGenre.pending.type]: (state) => {
      state.listOfMovies = {
        page: 1,
        results: [],
        total_pages: 1,
        total_results: 0,
      };
      state.processing = {
        isLoading: true,
        isError: null,
      };
    },
    [getListByGenre.fulfilled.type]: (state, action) => {
      state.listOfMovies = {
        page: action.payload.page,
        results: action.payload.results,
        total_pages: action.payload.total_pages,
        total_results: action.payload.total_results,
      };
      state.processing = {
        isLoading: false,
        isError: null,
      };
    },
    [getListByGenre.rejected.type]: (state, action) => {
      state.listOfMovies = {
        page: 1,
        results: [],
        total_pages: 1,
        total_results: 0,
      };
      state.processing = {
        isLoading: false,
        isError: action.payload,
      };
    },
    [getMovie.pending.type]: (state) => {
      state.genres = [];
      state.processing = {
        isLoading: true,
        isError: null,
      };
    },
    [getMovie.fulfilled.type]: (state, action) => {
      state.movieDetails = action.payload;
      state.processing = {
        isLoading: false,
        isError: null,
      };
    },
    [getMovie.rejected.type]: (state, action) => {
      state.genres = [];
      state.processing = {
        isLoading: false,
        isError: action.payload.message,
      };
    },

    [searchMovie.pending.type]: (state) => {
      state.listOfMovies = {
        page: 1,
        results: [],
        total_pages: 1,
        total_results: 0,
      };
      state.processing = {
        isLoading: true,
        isError: null,
      };
    },
    [searchMovie.fulfilled.type]: (state, action) => {
      (state.listOfMovies = {
        page: action.payload.page,
        results: action.payload.results,
        total_pages: action.payload.total_pages,
        total_results: action.payload.total_results,
      }),
          (state.processing = {
            isLoading: false,
            isError: null,
          });
    },
    [searchMovie.rejected.type]: (state, action) => {
      state.listOfMovies = {
        page: 1,
        results: [],
        total_pages: 1,
        total_results: 0,
      };
      state.processing = {
        isLoading: false,
        isError: action.payload.message,
      };
    },
  },
});

export const {
  resetGenreList,
  resetMovieDetails,
  setGenreData,
  setMovieId,
  setQuery,
} = moviesSlice.actions;
