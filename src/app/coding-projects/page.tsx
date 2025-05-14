import Link from "next/link";

export default function CodingProjects() {
  const projects = [
    {
      name: "Poisson Party Predictor",
      repo: "osmkhan/poisson-party-predictor",
      description: "A little project to assuage a worried pre-party mind.",
      url: "https://osmkhan.github.io/poisson-party-predictor/",
      showGithub: true
    },
    {
      name: "Fussin' and Lovin'",
      repo: "osmkhan/fussin_and_lovin",
      description: "A tool for tracking your progress through Matt Radosevich's best hand-picked country deep-cuts.",
      url: "https://osmkhan.github.io/fussin_and_lovin/",
      showGithub: true
    },
    {
      name: "Twenty-Dollar Dinner Map",
      repo: "osmkhan/twenty_dollar_dinners_map",
      description: "A prototype for NYC's best blog's best affordable dinner column. They've since launched an upscaled, way better version at{" "}
                    <a 
                      href="https://hellgatenyc.com/20-dinner-interactive-map-nyc-cheap-eats/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--accent)] hover:text-[var(--accent-hover)]"
                    >
                      Hell Gate
                    </a>
                    , with some input!",
      url: "https://hellgatenyc.com/20-dinner-interactive-map-nyc-cheap-eats/",
      showGithub: false
    }
  ];

  return (
    <div className="min-h-screen px-4 py-12 md:px-8">
      <main className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-serif mb-8 font-light tracking-tight">
          Code Projects
        </h1>
        
        <div className="grid gap-6">
          {projects.map((project) => (
            <div 
              key={project.repo}
              className="group p-6 bg-[var(--card-bg)] rounded-lg border border-[var(--border)] hover:border-[var(--accent)] transition-all duration-300"
            >
              <h2 className="text-2xl font-serif mb-2 group-hover:text-[var(--accent)] transition-colors duration-300">
                {project.name}
              </h2>
              <p className="text-[var(--muted)] mb-6">
                {project.name === "Twenty-Dollar Dinner Map" ? (
                  <>
                    A prototype for NYC's best blog's best affordable dinner column. They've since launched an upscaled, way better version at{" "}
                    <a 
                      href="https://hellgatenyc.com/20-dinner-interactive-map-nyc-cheap-eats/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--accent)] hover:text-[var(--accent-hover)]"
                    >
                      Hell Gate
                    </a>
                    , with some input!
                  </>
                ) : (
                  project.description
                )}
              </p>
              <div className="flex gap-4">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[var(--border)] text-[var(--foreground)] rounded-md hover:bg-[var(--accent)] hover:text-white transition-all duration-300"
                >
                  Look At It →
                </a>
                {project.showGithub && (
                  <a
                    href={`https://github.com/${project.repo}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-[var(--border)] text-[var(--foreground)] rounded-md hover:bg-[var(--accent)] hover:text-white transition-all duration-300"
                  >
                    GitHub Repository →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <Link 
          href="/"
          className="inline-block mt-8 text-[var(--muted)] hover:text-[var(--accent)] transition-colors duration-300"
        >
          ← Back to Home
        </Link>
      </main>
    </div>
  );
} 