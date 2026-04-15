'use client'
import Link from "next/link";

const NotFound = () => {
  return (
    <main className="relative min-h-screen flex items-center justify-center bg-slate-50 overflow-hidden">
      
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-[80px] opacity-30 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-[80px] opacity-30 animate-pulse delay-700"></div>

      <div className="relative z-10 text-center px-6">
        {/* Error Numbar Section */}
        <div className="relative inline-block">
          <h1 className="text-[10rem] md:text-[15rem] font-black text-slate-900 leading-none select-none tracking-tighter">
            404
          </h1>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 py-1 text-xs md:text-sm font-mono font-bold text-indigo-600 rotate-12 shadow-md border border-indigo-100 whitespace-nowrap uppercase">
            Page Not Found
          </div>
        </div>

        {/* Text Contient */}
        <div className="mt-8">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 tracking-tight">
            Page Not Found ?
          </h2>
          <p className="mt-4 text-slate-600 max-w-md mx-auto text-lg leading-relaxed">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
        </div>

        {/* Action Button */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className=" w-40 h-15 btn btn-primary font-semibold "
          >
            Return Home
          </Link>

          <Link
            href="/contact"
            className="btn w-40 h-15"
          >
            Reload
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;