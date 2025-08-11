import Link from 'next/link';
import React from 'react'
import { FaChurch } from 'react-icons/fa';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-900 via-purple-700 to-indigo-800 text-white p-6">
      <div className="mb-6">
        <FaChurch size={70} className="text-yellow-400 animate-bounce" />
      </div>
      <h1 className="text-8xl font-extrabold drop-shadow-lg">404</h1>
      <p className="mt-4 text-2xl font-semibold">Oops! Page not found</p>
      <p className="mt-2 text-center max-w-md text-lg text-gray-200">
        We couldn’t find the page you’re looking for. It might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>

      <Link
        href="/"
        className="mt-6 px-6 py-3 bg-yellow-400 text-purple-900 font-bold rounded-lg shadow-lg hover:bg-yellow-300 hover:scale-105 transition-transform"
      >
        Go Back Home
      </Link>
    </div>
  );
}
