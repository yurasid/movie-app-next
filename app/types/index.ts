export type RequestType = MovieType | CinemaType

export type MovieType = {
  title: string
  backdropPath: string
  posterPath: string
  releaseDate: string,
  overview: string,
  id: string
  slug: string
}

export type CinemaType = {
  name: string
  profileImageUrl: string
  address: string
  city: string
  phone: string
}
