import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-100 via-white to-slate-200 px-6">
      <div className="max-w-xl rounded-3xl bg-white p-10 text-center shadow-xl">
        <div className="mb-6 text-6xl">🐾</div>

        <h1 className="text-4xl font-extrabold text-slate-900">
          Pet Adoption
        </h1>

        <p className="mt-4 text-lg leading-8 text-slate-600">
          Browse available pets, discover their details, and manage your pet
          adoption system with a modern interface.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Link
            href="/pets"
            className="rounded-xl bg-slate-900 px-6 py-3 font-medium text-white transition duration-300 hover:bg-slate-700"
          >
            View Pets
          </Link>
        </div>
      </div>
    </main>
  );
}