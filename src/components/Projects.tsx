import { useState, useEffect, useRef } from "react"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Загородный дом в скандинавском стиле",
    category: "Дизайн дома",
    location: "Подмосковье",
    year: "2024",
    image: "https://cdn.poehali.dev/projects/bdde0735-63d4-4ca0-bdab-4863e4a7453c/files/d1d3f292-1137-44db-9ac6-a0d6d4dae405.jpg",
  },
  {
    id: 2,
    title: "Таунхаус с авторскими акцентами",
    category: "Таунхаус",
    location: "Москва",
    year: "2024",
    image: "https://cdn.poehali.dev/projects/bdde0735-63d4-4ca0-bdab-4863e4a7453c/files/6aa9edc5-3a28-4136-8b0f-6b95f2d9e710.jpg",
  },
  {
    id: 3,
    title: "Квартира в стиле лофт",
    category: "Дизайн квартиры",
    location: "Санкт-Петербург",
    year: "2023",
    image: "https://cdn.poehali.dev/projects/bdde0735-63d4-4ca0-bdab-4863e4a7453c/files/6c1363f2-d075-431f-b176-4101e10a81df.jpg",
  },
  {
    id: 4,
    title: "Хомстейджинг перед продажей",
    category: "Хомстейджинг",
    location: "Москва",
    year: "2023",
    image: "https://cdn.poehali.dev/projects/bdde0735-63d4-4ca0-bdab-4863e4a7453c/files/5eb6a838-9979-49c8-987f-5619263a0ca6.jpg",
  },
]

export function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [revealedImages, setRevealedImages] = useState<Set<number>>(new Set())
  const imageRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = imageRefs.current.indexOf(entry.target as HTMLDivElement)
            if (index !== -1) {
              setRevealedImages((prev) => new Set(prev).add(projects[index].id))
            }
          }
        })
      },
      { threshold: 0.2 },
    )

    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="py-32 md:py-29 bg-secondary/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Избранные работы</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight">Мои проекты</h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            Смотреть все проекты
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div ref={(el) => (imageRefs.current[index] = el)} className="relative overflow-hidden aspect-[4/3] mb-6">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    hoveredId === project.id ? "scale-105" : "scale-100"
                  }`}
                />
                <div
                  className="absolute inset-0 bg-primary origin-top"
                  style={{
                    transform: revealedImages.has(project.id) ? "scaleY(0)" : "scaleY(1)",
                    transition: "transform 1.5s cubic-bezier(0.76, 0, 0.24, 1)",
                  }}
                />
              </div>

              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-medium mb-2 group-hover:underline underline-offset-4">{project.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {project.category} · {project.location}
                  </p>
                </div>
                <span className="text-muted-foreground/60 text-sm">{project.year}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}