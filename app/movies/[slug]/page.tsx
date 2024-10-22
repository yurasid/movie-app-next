import { notFound } from "next/navigation";
import Image from 'next/image'
import { getImageUrl, getMovieBySlug } from "@/app/services/network";

interface MoviePageProps {
    params: {
        slug: string
    }
}

export default async function MoviePage({ params }: MoviePageProps) {
    const movie = await getMovieBySlug(params.slug);
    const posterUrl = getImageUrl(movie.posterPath);

  if (!movie) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div 
        style={{
          position: 'fixed',
          top: 0, left: 0, bottom: 0, right: 0,
          opacity: 0.2,
          pointerEvents: 'none',
          backgroundImage: `url(${getImageUrl(movie.backdropPath)})`,
          backgroundSize: 'cover'
        }}
      />
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3">
          <Image width={300} height={100} src={posterUrl} alt={movie.title} className="rounded-lg shadow-lg" />
        </div>
        <div className="md:w-2/3 md:ml-8">
          <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
          <p className="text-gray-500 text-base mb-6">{movie.overview}</p>
          <p className="text-lg font-semibold">
            Release Date: <span className="text-gray-400">{new Date(movie.releaseDate).toLocaleDateString()}</span>
          </p>
        </div>
      </div>
    </div>
  );
}