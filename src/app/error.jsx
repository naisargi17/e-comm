"use client"

// pages/_error.js
import Link from 'next/link';

const Error = ({ statusCode }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">
        {statusCode ? `An error occurred: ${statusCode}` : 'An error occurred'}
      </h1>
      <p className="text-lg text-gray-600 mb-8">Please try again later or contact support.</p>
      <Link href="/">
        <button className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300">
          Go to Home
        </button>
      </Link>
    </div>
  );
};

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;

