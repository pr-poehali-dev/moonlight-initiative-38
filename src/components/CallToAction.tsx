import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { HighlightedText } from "./HighlightedText"
import { ProjectFormModal } from "./ProjectFormModal"
import { CallFormModal } from "./CallFormModal"

export function CallToAction() {
  const [projectOpen, setProjectOpen] = useState(false)
  const [callOpen, setCallOpen] = useState(false)

  return (
    <>
      <section id="contact" className="py-32 md:py-29 bg-foreground text-primary-foreground">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-primary-foreground/60 text-sm tracking-[0.3em] uppercase mb-8">Начать проект</p>

            <h2 className="text-3xl md:text-4xl lg:text-6xl font-medium leading-[1.1] tracking-tight mb-8 text-balance">
              Создадим интерьер,
              <br />
              который вам <HighlightedText>полюбится</HighlightedText>?
            </h2>

            <p className="text-primary-foreground/70 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
              Расскажите о своём проекте — Оксана ответит в течение дня и предложит первые идеи. Каждый красивый интерьер начинается с одного разговора.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setProjectOpen(true)}
                className="inline-flex items-center justify-center gap-3 bg-primary-foreground text-foreground px-8 py-4 text-sm tracking-wide hover:bg-primary-foreground/90 transition-colors duration-300 group"
              >
                Начать диалог
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => setCallOpen(true)}
                className="inline-flex items-center justify-center gap-2 border border-primary-foreground/30 px-8 py-4 text-sm tracking-wide hover:bg-primary-foreground/10 transition-colors duration-300"
              >
                Назначить звонок
              </button>
            </div>
          </div>
        </div>
      </section>

      <ProjectFormModal open={projectOpen} onClose={() => setProjectOpen(false)} />
      <CallFormModal open={callOpen} onClose={() => setCallOpen(false)} />
    </>
  )
}