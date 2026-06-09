import { useEffect, useRef, useState } from "react"
import { Home, Building, Armchair, Trees } from "lucide-react"
import { HighlightedText } from "./HighlightedText"

const expertiseAreas = [
  {
    title: "Дизайн дома",
    description: "Разрабатываю концепцию интерьера загородного дома от планировки до финишной отделки. Учитываю архитектуру здания, образ жизни семьи и любимые предметы.",
    icon: Home,
  },
  {
    title: "Дизайн таунхауса",
    description:
      "Таунхаус — особый формат: несколько уровней, специфика планировок. Создаю единый стиль на всех этажах с правильным зонированием и потоком пространства.",
    icon: Building,
  },
  {
    title: "Дизайн квартиры",
    description:
      "Работаю с квартирами любой площади и планировки. Нахожу решения, которые делают даже небольшое пространство стильным, удобным и функциональным.",
    icon: Armchair,
  },
  {
    title: "Хомстейджинг",
    description:
      "Подготовка квартиры или дома к продаже или сдаче в аренду. Грамотная расстановка, декор и свет — и объект продаётся быстрее и дороже.",
    icon: Trees,
  },
]

export function Expertise() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"))
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.2 },
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="py-32 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-20">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Мои услуги</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-8xl">
            <HighlightedText>Услуги</HighlightedText> под любой
            <br />
            запрос
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Работаю в разных стилях и подстраиваюсь под любые пожелания — от классики до современного минимализма. Ваш вкус определяет направление.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
          {expertiseAreas.map((area, index) => {
            const Icon = area.icon
            return (
              <div
                key={area.title}
                ref={(el) => {
                  itemRefs.current[index] = el
                }}
                data-index={index}
                className={`relative pl-8 border-l border-border transition-all duration-700 ${
                  visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div
                  className={`transition-all duration-1000 ${
                    visibleItems.includes(index) ? "animate-draw-stroke" : ""
                  }`}
                  style={{
                    transitionDelay: `${index * 150}ms`,
                  }}
                >
                  <Icon className="w-10 h-10 mb-4 text-foreground" strokeWidth={1.25} />
                </div>
                <h3 className="text-xl font-medium mb-4">{area.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{area.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}