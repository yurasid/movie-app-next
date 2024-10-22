import { MovieType, CinemaType } from "../types";
import { URLS, IMAGE_PREFIX } from "./constants";

async function getData<T>(url: URLS): Promise<T[]> {
  const res = await fetch(url, { cache: 'force-cache'});
  if (!res.ok) throw new Error('Fetch failed');
  const payload = await res.json();
  return Object.values(payload._embedded as T[][]).flat();
}

export const getMovies = () => getData<MovieType>(URLS.movies);

export const getCinemas = () => getData<CinemaType>(URLS.cinemas);

export const getMovieBySlug = async (slug: string) => {
  const url = `${URLS.movies}/${slug}`;
  const res = await fetch(url, { cache: 'force-cache'});
  if (!res.ok) throw new Error('Fetch failed');
  return res.json() as Promise<MovieType>;
}

export function getImageUrl(path: string) {
  return `${IMAGE_PREFIX}${path}`;
}