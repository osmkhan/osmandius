import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen px-4 py-32 md:px-8">
      <main className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12">
        {/* Bio Section */}
        <div className="md:w-2/3">
          <h1 className="text-4xl md:text-6xl font-serif mb-8 font-light tracking-tight">
            Osman R. Khan
          </h1>
          <div className="prose prose-invert prose-lg">
            <p className="text-base text-[var(--muted)] leading-relaxed mb-8">
              Hi, I&apos;m Osman. 
            </p>
            <p className="text-base text-[var(--muted)] leading-relaxed mb-8">
              I work for the Wall Street Journal&apos;s newsroom data science team as a statistician. I&apos;m currently working on some genAI projects.

              Previously, I built real-time data pipelines and contextual metrics that our newsroom uses to understand our readers better.
            </p>
            <p className="text-base text-[var(--muted)] leading-relaxed">
              I was born in Canada, grew up in Pakistan, and, after a brief stint in the woods of New Hampshire, currently reside in Manhattan. I yet live. This is where I&apos;ll be keeping things I do going forward. If there&apos;s something here you like, please say hi!
            </p>
          </div>
        </div>

        {/* Directory */}
        <nav className="md:w-1/3 space-y-4">
          <Link
            href="/coding-projects"
            className="group block p-6 bg-[var(--card-bg)] rounded-lg border border-[var(--border)] hover:border-[var(--accent)] transition-all duration-300"
          >
            <h2 className="text-xl font-serif mb-2 group-hover:text-[var(--accent)] transition-colors duration-300">Code Projects</h2>
            <p className="text-[var(--muted)] text-sm">
              Some side projects for various friends.
            </p>
          </Link>

          <a
            href="https://osmankhana.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-6 bg-[var(--card-bg)] rounded-lg border border-[var(--border)] hover:border-[var(--accent)] transition-all duration-300"
          >
            <h2 className="text-xl font-serif mb-2 group-hover:text-[var(--accent)] transition-colors duration-300">OsmanKhānā</h2>
            <p className="text-[var(--muted)] text-sm">All the musings I&apos;m allowed to publish by my employer and the U.S., Canadian, and Pakistani governments.</p>
          </a>

          <a
            href="https://www.linkedin.com/in/osman-khan-500447157/"
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-6 bg-[var(--card-bg)] rounded-lg border border-[var(--border)] hover:border-[#0077b5] transition-all duration-300"
          >
            <h2 className="text-xl font-serif mb-2 group-hover:text-[#0077b5] transition-colors duration-300">LinkedIn</h2>
            <p className="text-[var(--muted)] text-sm">Connect with me here, if you feel so moved.</p>
          </a>
        </nav>
      </main>

      <div className="max-w-4xl mx-auto mt-24 px-4">
        <div className="p-8 bg-[var(--card-bg)] rounded-lg border border-[var(--border)]">
          <h2 className="text-2xl font-serif mb-4">Stay Updated</h2>
          <p className="text-[var(--muted)] mb-6">Get notified when I publish new projects or write something interesting.</p>
          <a
            href="https://osmankhana.substack.com/subscribe"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-[var(--border)] text-[var(--foreground)] rounded-md hover:bg-[var(--accent)] hover:text-white transition-all duration-300"
          >
            Subscribe →
          </a>
        </div>
      </div>

      <footer className="max-w-4xl mx-auto mt-16 pt-8 border-t border-[var(--border)]">
        <p className="text-[var(--muted)] text-sm text-center">
          © {new Date().getFullYear()} Osman R. Khan. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
