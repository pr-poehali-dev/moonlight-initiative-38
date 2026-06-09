import { useState, useEffect, useRef } from "react"
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Загородный дом в стиле барнхаус",
    category: "Дизайн дома",
    location: "Челябинск",
    year: "2024",
    images: [
      "https://cdn.poehali.dev/projects/bdde0735-63d4-4ca0-bdab-4863e4a7453c/files/e5b6f499-3b77-4512-951b-a669b6bab27c.jpg",
      "https://cdn.poehali.dev/projects/bdde0735-63d4-4ca0-bdab-4863e4a7453c/bucket/17e96905-0462-42b7-b80c-7fc43a39d00b.jpeg",
      "https://cdn.poehali.dev/projects/bdde0735-63d4-4ca0-bdab-4863e4a7453c/bucket/aab11540-8133-42fa-8f16-bb0e08d8845f.jpeg",
      "https://cdn.poehali.dev/projects/bdde0735-63d4-4ca0-bdab-4863e4a7453c/bucket/0fcbcf98-a498-449d-88d7-28a5e9b50ce6.jpeg",
    ],
  },
  {
    id: 2,
    title: "Таунхаус с авторскими акцентами",
    category: "Таунхаус",
    location: "Челябинск",
    year: "2024",
    images: ["https://cdn.poehali.dev/projects/bdde0735-63d4-4ca0-bdab-4863e4a7453c/files/d32ec7a1-a7cd-413e-9bda-e0c0c3ddb70c.jpg"],
  },
  {
    id: 3,
    title: "Квартира в стиле контемпорари",
    category: "Дизайн квартиры",
    location: "Челябинск",
    year: "2023",
    images: [
      "https://cdn.poehali.dev/projects/bdde0735-63d4-4ca0-bdab-4863e4a7453c/bucket/84ec0ec2-45c0-4c3a-876d-63cc0551550e.jpeg",
      "https://cdn.poehali.dev/projects/bdde0735-63d4-4ca0-bdab-4863e4a7453c/bucket/2355b408-bcac-4b2d-a228-c56767df8703.jpeg",
      "https://cdn.poehali.dev/projects/bdde0735-63d4-4ca0-bdab-4863e4a7453c/bucket/682b1e31-b142-4861-87a9-2a9eb71c3a46.jpeg",
      "https://cdn.poehali.dev/projects/bdde0735-63d4-4ca0-bdab-4863e4a7453c/bucket/0d775741-1b78-471a-8199-7c61ea14b3a4.jpeg",
      "https://cdn.poehali.dev/projects/bdde0735-63d4-4ca0-bdab-4863e4a7453c/bucket/7819a37d-ed55-45c2-a6a3-ce63441d52cb.jpeg",
    ],
  },
  {
    id: 4,
    title: "Хомстейджинг перед продажей",
    category: "Хомстейджинг",
    location: "Челябинск",
    year: "2023",
    images: [
      "https://cdn.poehali.dev/projects/bdde0735-63d4-4ca0-bdab-4863e4a7453c/bucket/739438b6-f693-4fd5-a8f4-d609a7f58ce0.jpeg",
      "https://cdn.poehali.dev/projects/bdde0735-63d4-4ca0-bdab-4863e4a7453c/bucket/549da0bf-38ac-4d0c-918a-db6328201754.jpeg",
    ],
  },
]

export function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [revealedImages, setRevealedImages] = useState<Set<number>>(new Set())
  const [activeSlide, setActiveSlide] = useState<Record<number, number>>({})
  const imageRefs = useRef<(HTMLDivElement | null)[]>([])

  const getSlide = (id: number) => activeSlide[id] ?? 0

  const prevSlide = (e: React.MouseEvent, id: number, total: number) => {
    e.stopPropagation()
    setActiveSlide((prev) => ({ ...prev, [id]: (getSlide(id) - 1 + total) % total }))
  }

  const nextSlide = (e: React.MouseEvent, id: number, total: number) => {
    e.stopPropagation()
    setActiveSlide((prev) => ({ ...prev, [id]: (getSlide(id) + 1) % total }))
  }

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
                  src={project.images[getSlide(project.id)] || "/placeholder.svg"}
                  alt={project.title}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    hoveredId === project.id ? "scale-105" : "scale-100"
                  }`}
                />
                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={(e) => prevSlide(e, project.id, project.images.length)}
                      className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-1.5 transition-opacity opacity-0 group-hover:opacity-100"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={(e) => nextSlide(e, project.id, project.images.length)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-1.5 transition-opacity opacity-0 group-hover:opacity-100"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                      {project.images.map((_, i) => (
                        <button
                          key={i}
                          onClick={(e) => { e.stopPropagation(); setActiveSlide((prev) => ({ ...prev, [project.id]: i })) }}
                          className={`w-1.5 h-1.5 rounded-full transition-all ${i === getSlide(project.id) ? "bg-white w-3" : "bg-white/50"}`}
                        />
                      ))}
                    </div>
                  </>
                )}
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