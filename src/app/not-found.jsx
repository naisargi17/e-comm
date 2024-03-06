// pages/404.js
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">404 - Page Not Found</h1>
      <p className="text-lg text-gray-600 mb-8">The page you are looking for might have been removed or doesn't exist.</p>
      <Link href="/">
        <button className="bg-slate-500 text-white px-6 py-3 rounded-full hover:bg-slate-600 transition duration-300">
          Go to Home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
