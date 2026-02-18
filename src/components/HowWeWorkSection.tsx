import Icon from "@/components/ui/icon";

const steps = [
  {
    number: "01",
    icon: "FileText" as const,
    title: "Заявка",
    who: "Вы",
    description:
      "Присылаете смету, спецификацию или просто список того, что нужно. Любой формат — от Excel до голосового.",
  },
  {
    number: "02",
    icon: "Search" as const,
    title: "Анализ и КП",
    who: "Мы",
    description:
      "Мониторим рынок, собираем предложения от 3–5 проверенных поставщиков: прямые заводы, дистрибьюторы.",
  },
  {
    number: "03",
    icon: "CheckCircle" as const,
    title: "Согласование",
    who: "Вы",
    description:
      "Выбираете лучшее предложение по цене и срокам. Мы покажем все варианты — решение за вами.",
  },
  {
    number: "04",
    icon: "Truck" as const,
    title: "Доставка и отчёт",
    who: "Мы",
    description:
      "Организуем логистику своим транспортом, контролируем приёмку, предоставляем полный пакет документов.",
  },
];

const HowWeWorkSection = () => {
  return (
    <section id="how" className="py-20 md:py-28 bg-secondary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            Схема работы
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            4 шага до материала на объекте
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 h-full hover:bg-white/10 transition-colors">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-5xl font-black text-white/10">
                    {step.number}
                  </span>
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Icon name={step.icon} size={20} className="text-primary" />
                  </div>
                </div>
                <div className="inline-block bg-primary/20 text-primary text-xs font-bold px-2 py-1 rounded mb-3 uppercase tracking-wide">
                  {step.who}
                </div>
                <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <Icon
                    name="ChevronRight"
                    size={24}
                    className="text-primary/50"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="text-center text-gray-400 mt-10 text-sm">
          На каждом этапе вы видите, что происходит. Мы на связи 24/7.
        </p>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
