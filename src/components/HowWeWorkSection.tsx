import Icon from "@/components/ui/icon";

const steps = [
  {
    number: "01",
    icon: "FileText" as const,
    title: "Заявка",
    who: "Вы",
    description:
      "Присылаете смету, список или голосовое — любой формат подходит.",
  },
  {
    number: "02",
    icon: "Search" as const,
    title: "Анализ и КП",
    who: "Мы",
    description:
      "Мониторим рынок, собираем 3–5 предложений от проверенных поставщиков.",
  },
  {
    number: "03",
    icon: "CheckCircle" as const,
    title: "Согласование",
    who: "Вы",
    description:
      "Выбираете лучшее по цене и срокам. Все варианты перед вами — решение за вами.",
  },
  {
    number: "04",
    icon: "Truck" as const,
    title: "Доставка",
    who: "Мы",
    description:
      "Привозим своим транспортом, контролируем приёмку, отдаём документы.",
  },
];

const HowWeWorkSection = () => {
  return (
    <section id="how" className="py-24 bg-secondary overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-primary" />
            <span className="text-primary text-sm font-bold uppercase tracking-[0.2em]">
              Как работаем
            </span>
            <div className="h-px w-8 bg-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            От заявки до материала — 4 шага
          </h2>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-[52px] left-[calc(12.5%+28px)] right-[calc(12.5%+28px)] h-px bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <div key={index} className="text-center lg:text-left">
                <div className="relative inline-flex items-center justify-center w-14 h-14 bg-primary rounded-2xl mb-6 mx-auto lg:mx-0">
                  <Icon name={step.icon} size={24} className="text-white" />
                  <span className="absolute -top-2 -right-2 w-6 h-6 bg-white text-secondary text-[10px] font-black rounded-full flex items-center justify-center">
                    {step.number}
                  </span>
                </div>

                <div className="inline-block bg-primary/15 text-primary text-[11px] font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-widest">
                  {step.who}
                </div>

                <h3 className="text-white text-lg font-bold mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto lg:mx-0">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 text-center">
          <p className="inline-flex items-center gap-2 text-gray-500 text-sm bg-white/5 rounded-full px-5 py-2.5">
            <Icon name="Clock" size={16} className="text-primary" />
            На каждом этапе вы видите, что происходит. Мы на связи 24/7.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
