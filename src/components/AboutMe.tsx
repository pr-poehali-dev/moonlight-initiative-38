export function AboutMe() {
  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-center">

          <div className="w-full md:w-2/5 flex-shrink-0">
            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/bdde0735-63d4-4ca0-bdab-4863e4a7453c/bucket/03bae3f7-e8b5-4103-99f9-d7a9b4c08f42.jpeg"
                  alt="Оксана Гузченко — дизайнер интерьера"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary -z-10" />
            </div>
          </div>

          <div className="w-full md:w-3/5">
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Обо мне</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-2">
              Оксана Гузченко
            </h2>
            <p className="text-accent text-lg mb-8">Дизайнер интерьера</p>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                В профессию пришла через собственный опыт — делала ремонт в квартире и поняла, что дизайн это не роскошь, а необходимость. С тех пор это стало делом жизни.
              </p>
              <p>
                В 2021 году окончила дизайн-школу «EVO», прошла множество курсов и повышений квалификации в школе «RAD». Постоянно развиваюсь и слежу за современными тенденциями в дизайне интерьера.
              </p>
              <p>
                До дизайна — 20 лет фельдшером на Скорой помощи. Это научило меня слушать людей, работать чётко и доводить дело до результата. Именно такой подход я применяю в каждом проекте.
              </p>
            </div>

            <div className="flex flex-wrap gap-6 mt-10 pt-10 border-t border-border">
              <div>
                <p className="text-2xl font-medium">2021</p>
                <p className="text-muted-foreground text-sm mt-1">год старта в дизайне</p>
              </div>
              <div className="w-px bg-border" />
              <div>
                <p className="text-2xl font-medium">EVO & RAD</p>
                <p className="text-muted-foreground text-sm mt-1">дизайн-школы</p>
              </div>
              <div className="w-px bg-border" />
              <div>
                <p className="text-2xl font-medium">Челябинск</p>
                <p className="text-muted-foreground text-sm mt-1">и вся Россия</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
