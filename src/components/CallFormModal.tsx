import { useState } from "react"
import { X, Check, ArrowRight } from "lucide-react"

const TIMES = ["Утром (9:00–12:00)", "Днём (12:00–16:00)", "Вечером (16:00–20:00)", "Когда удобно"]
const WAYS = ["Телефонный звонок", "WhatsApp", "Telegram", "Viber"]

interface Props {
  open: boolean
  onClose: () => void
}

export function CallFormModal({ open, onClose }: Props) {
  const [form, setForm] = useState({ name: "", phone: "", way: "", time: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleClose = () => {
    onClose()
    setTimeout(() => {
      setSubmitted(false)
      setForm({ name: "", phone: "", way: "", time: "" })
    }, 300)
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={handleClose} />

      <div className="relative bg-white text-foreground w-full max-w-lg shadow-2xl">
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
            <h3 className="text-2xl font-medium mb-3">Договорились!</h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Свяжусь с вами в указанное время. До встречи!
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
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2">Назначить звонок</p>
            <h3 className="text-3xl font-medium mb-8 leading-tight">
              Как и когда<br />вам позвонить?
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
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
                <label className="block text-sm text-muted-foreground mb-2">Номер телефона *</label>
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
                <label className="block text-sm text-muted-foreground mb-2">Как связаться? *</label>
                <div className="flex flex-wrap gap-2">
                  {WAYS.map(w => (
                    <button
                      key={w}
                      type="button"
                      onClick={() => setForm(f => ({ ...f, way: w }))}
                      className={`px-4 py-2 text-sm border transition-colors ${
                        form.way === w
                          ? "bg-foreground text-white border-foreground"
                          : "border-border hover:border-foreground/40"
                      }`}
                    >
                      {w}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm text-muted-foreground mb-2">Удобное время *</label>
                <div className="flex flex-wrap gap-2">
                  {TIMES.map(t => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setForm(f => ({ ...f, time: t }))}
                      className={`px-4 py-2 text-sm border transition-colors ${
                        form.time === t
                          ? "bg-foreground text-white border-foreground"
                          : "border-border hover:border-foreground/40"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-3 bg-foreground text-white px-8 py-4 text-sm tracking-wide hover:bg-foreground/80 transition-colors group mt-2"
              >
                Назначить звонок
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
