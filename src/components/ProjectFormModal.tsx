import { useState } from "react"
import { X, ArrowRight, Check } from "lucide-react"

const MESSENGERS = ["WhatsApp", "Telegram", "Viber", "ВКонтакте"]

interface Props {
  open: boolean
  onClose: () => void
}

export function ProjectFormModal({ open, onClose }: Props) {
  const [form, setForm] = useState({ name: "", phone: "", messenger: "", description: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleClose = () => {
    onClose()
    setTimeout(() => {
      setSubmitted(false)
      setForm({ name: "", phone: "", messenger: "", description: "" })
    }, 300)
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={handleClose} />

      <div className="relative bg-white text-foreground w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl">
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 text-foreground/40 hover:text-foreground transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="p-10 text-center">
            <div className="w-14 h-14 rounded-full bg-foreground flex items-center justify-center mx-auto mb-6">
              <Check className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-medium mb-3">Заявка отправлена!</h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Я свяжусь с вами в течение дня. Уже предвкушаю работу над вашим проектом!
            </p>
            <button
              onClick={handleClose}
              className="inline-flex items-center justify-center px-8 py-3 bg-foreground text-white text-sm tracking-wide hover:bg-foreground/80 transition-colors"
            >
              Закрыть
            </button>
          </div>
        ) : (
          <div className="p-8 md:p-10">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2">Новый проект</p>
            <h3 className="text-3xl font-medium mb-8 leading-tight">
              Расскажите<br />о проекте
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm text-muted-foreground mb-2">Ваше имя *</label>
                <input
                  required
                  type="text"
                  placeholder="Как вас зовут?"
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  className="w-full border border-border px-4 py-3 text-sm outline-none focus:border-foreground transition-colors bg-transparent placeholder:text-muted-foreground/50"
                />
              </div>

              <div>
                <label className="block text-sm text-muted-foreground mb-2">Телефон *</label>
                <input
                  required
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  value={form.phone}
                  onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                  className="w-full border border-border px-4 py-3 text-sm outline-none focus:border-foreground transition-colors bg-transparent placeholder:text-muted-foreground/50"
                />
              </div>

              <div>
                <label className="block text-sm text-muted-foreground mb-2">Удобный мессенджер</label>
                <div className="flex flex-wrap gap-2">
                  {MESSENGERS.map(m => (
                    <button
                      key={m}
                      type="button"
                      onClick={() => setForm(f => ({ ...f, messenger: m }))}
                      className={`px-4 py-2 text-sm border transition-colors ${
                        form.messenger === m
                          ? "bg-foreground text-white border-foreground"
                          : "border-border hover:border-foreground/40"
                      }`}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm text-muted-foreground mb-2">Описание проекта</label>
                <textarea
                  rows={4}
                  placeholder="Расскажите про ваш объект: тип, площадь, стиль, пожелания..."
                  value={form.description}
                  onChange={e => setForm(f => ({ ...f, description: e.target.value }))}
                  className="w-full border border-border px-4 py-3 text-sm outline-none focus:border-foreground transition-colors bg-transparent placeholder:text-muted-foreground/50 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-3 bg-foreground text-white px-8 py-4 text-sm tracking-wide hover:bg-foreground/80 transition-colors group mt-2"
              >
                Отправить заявку
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
