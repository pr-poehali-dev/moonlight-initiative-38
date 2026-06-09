export function Footer() {
  return (
    <footer className="py-16 md:py-24 border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="/" className="inline-block mb-6">
              <img src="/images/hously-logo.svg" alt="Пространство" width={120} height={32} className="w-auto h-6" />
            </a>
            <p className="text-muted-foreground leading-relaxed max-w-sm mb-6">
              Дизайн интерьера для дома, таунхауса и квартиры. Работаю в любом стиле и включаю в проект ваши любимые вещи.
            </p>
            <a href="https://t.me/OKSI1208" target="_blank" rel="noopener noreferrer" className="inline-block group">
              <img
                src="https://cdn.poehali.dev/projects/bdde0735-63d4-4ca0-bdab-4863e4a7453c/bucket/64db4f21-7a5a-42ca-913c-67392e92df52.jpeg"
                alt="Telegram QR-код @OKSI1208"
                className="w-28 h-28 opacity-80 group-hover:opacity-100 transition-opacity"
              />
              <p className="text-xs text-muted-foreground mt-2 tracking-wide">Написать в Telegram</p>
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-medium mb-4">Навигация</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#projects" className="hover:text-foreground transition-colors">
                  Проекты
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-foreground transition-colors">
                  Подход
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-foreground transition-colors">
                  Услуги
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-foreground transition-colors">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-medium mb-4">Оксана Гузченко</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="tel:+79226306817" className="hover:text-foreground transition-colors">
                  +7 (922) 630-68-17
                </a>
              </li>
              <li>
                <a href="mailto:oksi1208@yandex.ru" className="hover:text-foreground transition-colors">
                  oksi1208@yandex.ru
                </a>
              </li>
              <li>
                <a href="https://t.me/OKSI1208" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                  Telegram @OKSI1208
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row md:items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2026 Дизайн интерьера. Все права защищены.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}