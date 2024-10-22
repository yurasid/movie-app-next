"use client";

import { useRouter } from 'next/navigation';
import { MovieType } from '@/app/types';

export function MovieCard({ movie, children }: { movie: MovieType, children: React.ReactNode}) {
    const { push } = useRouter();

    return (
        <div onClick={() => push(`/movies/${movie.slug}`)}>
            {children}
        </div>
    )
}