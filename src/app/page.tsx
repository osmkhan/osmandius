import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen px-4 py-12 md:px-8 bg-[#1a0808]">
      <main className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12">
        {/* Bio Section */}
        <div className="md:w-2/3">
          <h1 className="text-4xl md:text-5xl text-stone-100 mb-8 font-light">
            Osman R. Khan
          </h1>
          <div className="prose prose-invert prose-lg">
            <p className="text-xl text-stone-300 leading-relaxed">
              Hello, I&apos;m Osman. This is my website. More to come.
            </p>
          </div>
        </div>

        {/* Directory */}
        <nav className="md:w-1/3 space-y-4">
          <Link
            href="/coding-projects"
            className="block p-4 bg-[#2a0f0f] rounded-lg shadow-sm hover:bg-[#3a1515] transition-all duration-200"
          >
            <h2 className="text-lg text-stone-100 mb-1">Coding Projects</h2>
            <p className="text-sm text-stone-400">
              See dinner map here:{" "}
              <a
                href="https://osmanrkhan.github.io/twenty_dollar_dinners_map/html/dinner_map.html"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-stone-300 hover:text-stone-100"
              >
                Dinner Map
              </a>
            </p>
          </Link>

          <Link
            href="/writing"
            className="block p-4 bg-[#2a0f0f] rounded-lg shadow-sm hover:bg-[#3a1515] transition-all duration-200"
          >
            <h2 className="text-lg text-stone-100 mb-1">Writing</h2>
            <p className="text-sm text-stone-400">Essays and thoughts</p>
          </Link>
        </nav>
      </main>

      <footer className="max-w-4xl mx-auto mt-16 pt-8 border-t border-stone-700">
        <p className="text-stone-500 text-sm text-center">
          © {new Date().getFullYear()} Osman R. Khan. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
