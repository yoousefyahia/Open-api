"use client";

import { usePets } from "../hooks/use-pets";

export default function PetsList() {
  const { data, isLoading, error } = usePets();

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center text-xl font-semibold">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-screen items-center justify-center text-xl font-semibold text-red-500">
        Something went wrong.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="mx-auto max-w-7xl px-6 py-10">
        {/* Header */}
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold">🐾 Pets</h1>
            <p className="mt-2 text-slate-500">
              Showing {data?.data.length ?? 0} Pets
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {data?.data.map((pet) => (
            <div
              key={pet.id}
              className="overflow-hidden rounded-2xl bg-white shadow transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src={
                  pet.photos?.[0] ??
                  "https://placehold.co/600x400?text=No+Image"
                }
                alt={pet.name}
                className="h-60 w-full object-cover"
              />

              <div className="p-5">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-2xl font-bold">{pet.name}</h2>

                    <p className="text-sm text-slate-500">
                      {pet.species} • {pet.gender}
                    </p>
                  </div>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      pet.status === "AVAILABLE"
                        ? "bg-green-100 text-green-700"
                        : pet.status === "ADOPTED"
                        ? "bg-red-100 text-red-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {pet.status}
                  </span>
                </div>

                <div className="mt-5 space-y-2 text-sm">
                  <p>
                    <span className="font-semibold">Breed:</span> {pet.breed}
                  </p>

                  <p>
                    <span className="font-semibold">Age:</span>{" "}
                    {pet.ageMonths} months
                  </p>

                  <p>
                    <span className="font-semibold">Size:</span> {pet.size}
                  </p>

                  <p>
                    <span className="font-semibold">Price:</span>{" "}
                    <span className="text-lg font-bold text-emerald-600">
                      {pet.price} {pet.currency}
                    </span>
                  </p>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {pet.medicalInfo?.vaccinated && (
                    <span className="rounded-full bg-green-100 px-3 py-1 text-xs text-green-700">
                      Vaccinated
                    </span>
                  )}

                  {pet.medicalInfo?.microchipped && (
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs text-blue-700">
                      Microchipped
                    </span>
                  )}

                  {pet.medicalInfo?.spayedNeutered && (
                    <span className="rounded-full bg-purple-100 px-3 py-1 text-xs text-purple-700">
                      Neutered
                    </span>
                  )}

                  {pet.medicalInfo?.specialNeeds && (
                    <span className="rounded-full bg-orange-100 px-3 py-1 text-xs text-orange-700">
                      Special Needs
                    </span>
                  )}
                </div>

                {pet.description && (
                  <p className="mt-5 line-clamp-3 text-sm text-slate-500">
                    {pet.description}
                  </p>
                )}

                <button className="mt-6 w-full rounded-xl bg-slate-900 py-3 font-medium text-white transition hover:bg-slate-700">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}