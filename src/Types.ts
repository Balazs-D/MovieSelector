export enum Status {
  IDLE = "IDLE",
  LOADING = "LOADING",
}

export interface Genres {
  id: number;
  name: string;
}

export interface MovieList {
  page: number;
  results: MovieDetails[];
  total_pages: number;
  total_results: number;
}

export interface MovieDetails {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null;
  budget: number;
  genres: Genres[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Companies[];
  production_countries: Countries[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface Companies {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface Countries {
  iso_3166_1: string;
  name: string;
}

export interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

