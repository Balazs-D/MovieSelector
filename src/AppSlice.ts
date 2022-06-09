import axios, { AxiosResponse } from "axios";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Genres} from "./Types";

const baseUrl = "https://api.themoviedb.org/3";
const movieDbApiKey = "86cc61c0363c975b6de2d10f8d915694";

export interface MovieSelector {
  processing: {
    isLoading: boolean;
    isError: Record<string, unknown> | null;
  };
  genres: Genres[];
}

const initialState: MovieSelector = {
  processing: {
    isLoading: false,
    isError: null,
  },
  genres: []
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


/**
 * REDUCERS
 */
export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {

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

  },
});

export const {
} = moviesSlice.actions;
