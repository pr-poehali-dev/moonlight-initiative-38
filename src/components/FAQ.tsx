import { useState } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "С чего начать работу над дизайном?",
    answer:
      "Начинаем с бесплатной консультации — вы рассказываете о своём пространстве, пожеланиях и бюджете. Я задаю вопросы, показываю референсы и предлагаю концепцию. После утверждения приступаем к проектированию.",
  },
  {
    question: "Работаете ли вы с мебелью и вещами, которые у меня уже есть?",
    answer:
      "Да, это одна из моих ключевых особенностей. Я органично вписываю ваши любимые предметы мебели, декора и искусства в новый интерьер, сохраняя их ценность и создавая целостное пространство.",
  },
  {
    question: "В каких стилях вы работаете?",
    answer:
      "Я работаю в любом стиле: скандинавский минимализм, классика, современный, лофт, эклектика, ар-деко и многие другие. Ориентируюсь на ваш вкус и образ жизни, а не на модные тренды.",
  },
  {
    question: "Что такое хомстейджинг и зачем он нужен?",
    answer:
      "Хомстейджинг — это предпродажная подготовка квартиры или дома. Грамотная расстановка мебели, правильный свет и минимальный декор позволяют продать объект быстрее и по более высокой цене. Обычно вложения окупаются многократно.",
  },
  {
    question: "Сколько времени занимает разработка дизайн-проекта?",
    answer:
      "Сроки зависят от площади и сложности объекта. Квартира — от 3 до 6 недель, загородный дом или таунхаус — от 6 до 10 недель. Я всегда обсуждаю реальные сроки на старте и придерживаюсь договорённостей.",
  },
  {
    question: "Вы работаете с объектами в других городах?",
    answer:
      "Да, работаю удалённо по всей России. Все согласования проходят онлайн, замеры могут сделать партнёры в вашем городе. Расстояние не влияет на качество проекта.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Вопросы</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-7xl">
            Частые вопросы
          </h2>
        </div>

        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full py-6 flex items-start justify-between gap-6 text-left group"
              >
                <span className="text-lg font-medium text-foreground transition-colors group-hover:text-foreground/70">
                  {faq.question}
                </span>
                <Plus
                  className={`w-6 h-6 text-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                  strokeWidth={1.5}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-muted-foreground leading-relaxed pb-6 pr-12">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}