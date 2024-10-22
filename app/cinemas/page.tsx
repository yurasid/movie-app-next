import Image from "next/image";
import { getCinemas } from "../services/network";

export default async function CinemasPage() {
    const cinemas = await getCinemas();

    return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Cinemas</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cinemas.map((cinema) => (
          <div key={cinema.name} className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4">
            <Image className="pb-3" alt={cinema.name} src={cinema.profileImageUrl} width={300} height={20} />
            <h2 className=" text-xl font-semibold mb-2">{cinema.name}</h2>
            <p className="text-gray-700">{cinema.address}</p>
            <p className="text-gray-500">{cinema.city}</p>
            <p className="text-gray-700 mt-4">
              <strong>Contact: </strong>{cinema.phone}
            </p>
          </div>
        ))}
      </div>
    </div>
    )
}