import Link from "next/link";

export default function CodingProjects() {
  const projects = [
    {
      name: "Fussin' and Lovin'",
      repo: "osmkhan/fussin_and_lovin",
      description: "A data-driven exploration of relationships and human connection, visualized through interactive charts and narratives.",
      url: "https://github.com/osmkhan/fussin_and_lovin"
    },
    {
      name: "Twenty Dollar Dinners Map",
      repo: "osmkhan/twenty_dollar_dinners_map",
      description: "An interactive map showcasing affordable dining options across the city, helping people discover great food without breaking the bank.",
      url: "https://osmkhan.github.io/twenty_dollar_dinners_map/html/dinner_map.html"
    }
  ];

  return (
    <div className="min-h-screen px-4 py-12 md:px-8">
      <main className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-serif mb-8 font-light tracking-tight">
          Coding Projects
        </h1>
        
        <div className="grid gap-6">
          {projects.map((project) => (
            <div 
              key={project.repo}
              className="group p-6 bg-[#1a1a1a] rounded-lg border border-[#2a2a2a] hover:border-[var(--accent)] transition-all duration-300"
            >
              <h2 className="text-2xl font-serif mb-2 group-hover:text-[var(--accent)] transition-colors duration-300">
                {project.name}
              </h2>
              <p className="text-[var(--muted)] mb-6">
                {project.description}
              </p>
              <div className="flex gap-4">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors duration-300"
                >
                  View Project →
                </a>
                <a
                  href={`https://github.com/${project.repo}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors duration-300"
                >
                  GitHub Repository →
                </a>
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