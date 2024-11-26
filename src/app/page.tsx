import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50 px-4 py-12 md:px-8">
      {/* Header */}
      <header className="max-w-4xl mx-auto mb-16">
        <h1 className="font-serif text-4xl md:text-5xl text-stone-900 mb-4">
          Your Name
        </h1>
        <div className="h-px w-16 bg-stone-400 mb-8"></div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto">
        {/* Bio Section */}
        <section className="mb-16 flex flex-col md:flex-row gap-8 items-start">
          <div className="md:w-1/3">
            <img
              src="/api/placeholder/400/400"
              alt="Profile"
              className="w-full rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-2/3 font-serif">
            <h2 className="text-2xl text-stone-900 mb-4">About</h2>
            <p className="text-stone-700 leading-relaxed mb-4">
              Welcome. I'm a [your role] based in [your location]. My work focuses on [your interests/specialties].
            </p>
            <p className="text-stone-700 leading-relaxed">
              Currently, I'm exploring [current interests/projects].
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="grid md:grid-cols-2 gap-6">
          {/* Writing */}
          <Link href="/writing" className="group">
            <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <span className="block text-xl text-stone-400 mb-4 font-serif">§</span>
              <h3 className="font-serif text-xl text-stone-900 mb-2">Writing</h3>
              <p className="text-stone-600 text-sm">Essays, thoughts, and observations</p>
              <span className="block mt-4 text-stone-400 text-sm group-hover:text-stone-600 transition-colors duration-200">
                Read →
              </span>
            </div>
          </Link>

          {/* Dinner Map */}
          <a 
            href="https://osmanrkhan.github.io/twenty_dollar_dinners_map/html/dinner_map.html"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <span className="block text-xl text-stone-400 mb-4 font-serif">⌖</span>
              <h3 className="font-serif text-xl text-stone-900 mb-2">Dinner Map</h3>
              <p className="text-stone-600 text-sm">Exploring affordable dining experiences</p>
              <span className="block mt-4 text-stone-400 text-sm group-hover:text-stone-600 transition-colors duration-200">
                Visit →
              </span>
            </div>
          </a>

          {/* Lahore Protest Tracker */}
          <Link href="/lahore-protests" className="group">
            <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <span className="block text-xl text-stone-400 mb-4 font-serif">†</span>
              <h3 className="font-serif text-xl text-stone-900 mb-2">Lahore Protest Tracker</h3>
              <p className="text-stone-600 text-sm">Monitoring civic engagement and social movements</p>
              <span className="block mt-4 text-stone-400 text-sm group-hover:text-stone-600 transition-colors duration-200">
                View →
              </span>
            </div>
          </Link>
        </section>
      </main>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto mt-16 pt-8 border-t border-stone-200">
        <p className="text-stone-500 text-sm text-center">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
      </footer>
    </div>
  );
}