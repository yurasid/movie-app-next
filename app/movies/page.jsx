import Image from "next/image";
import { getMovies } from "../services/network";
import { getImageUrl } from "../services/network";
import Movie from '../components/MovieCard';

export default async function Movies(props) {
    const movies = await getMovies();

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8">Movies</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {movies.map((movie) => 
                    <Movie key={movie.title} movie={movie}>
                        <Image
                            src={getImageUrl(movie.posterPath)}
                            alt={movie.title}
                            height={200}
                            width={200}
                            className="w-full cursor-pointer relative max-w-sm rounded overflow-hidden shadow-lg bg-white"
                            priority
                        />
                    </Movie>
                )}
            </div>
        </div>
    )
}