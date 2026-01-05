import { useTranslations } from "next-intl";

const projects = [
  {
    key: "cloud",
    tech: ["Azure", "AWS", "Terraform"],
    link: "https://github.com/fruizlanders",
  },
  {
    key: "saas",
    tech: ["Next.js", "Supabase", "Stripe"],
    link: "https://github.com/fruizlanders",
  },
  {
    key: "automation",
    tech: ["Node.js", "CI/CD", "GitHub Actions"],
    link: "https://github.com/fruizlanders",
  },
];

export default function ProjectsSection() {
  const t = useTranslations("projects");

  return (
    <section className="space-y-6">
      {/* TITLE */}
      <h2 className="text-2xl font-semibold">{t("title")}</h2>

      {/* PROJECT LIST */}
      <div className="grid gap-4">
        {projects.map((project) => (
          <a
            key={project.key}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-lg border border-neutral-800 p-4 hover:border-sky-400 transition"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-medium group-hover:text-sky-400 transition">
                  {t(`${project.key}.title`)}
                </h3>

                <p className="text-sm text-neutral-400 mt-1">
                  {t(`${project.key}.description`)}
                </p>
              </div>

              <span className="text-sm text-neutral-500 group-hover:text-sky-400 transition">
                ↗
              </span>
            </div>

            <div className="flex flex-wrap gap-2 mt-3">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="text-xs rounded-full border border-neutral-700 px-3 py-1 text-neutral-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
