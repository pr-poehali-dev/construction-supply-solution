import Icon from "@/components/ui/icon";

const advantages = [
  {
    icon: "Clock" as const,
    title: "Стоп-простои",
    description:
      "Контроль отгрузок и синхронизация с графиком. Материал на объекте точно в срок.",
    accent: "bg-blue-500/10 text-blue-500",
  },
  {
    icon: "Eye" as const,
    title: "Полная прозрачность",
    description:
      "Видите всю цепочку и цены. Никаких откатов — только честная экономия.",
    accent: "bg-emerald-500/10 text-emerald-500",
  },
  {
    icon: "TrendingDown" as const,
    title: "−15% на закупках",
    description:
      "Прямые поставки, консолидация заказов и подбор аналогов — реальное снижение бюджета.",
    accent: "bg-primary/10 text-primary",
  },
  {
    icon: "Truck" as const,
    title: "Своя логистика",
    description:
      "Собственный автопарк. Контроль от склада до объекта — без потерь и задержек.",
    accent: "bg-violet-500/10 text-violet-500",
  },
];

const AdvantagesSection = () => {
  return (
    <section id="advantages" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-primary" />
              <span className="text-primary text-sm font-bold uppercase tracking-[0.2em]">
                Преимущества
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-secondary leading-tight">
              Превращаем хаос
              <br className="hidden md:block" /> в систему
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
            Мы забираем на себя всю рутину закупок, чтобы вы могли
            сосредоточиться на строительстве
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {advantages.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-7 border border-border hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500"
            >
              <div
                className={`w-14 h-14 ${item.accent.split(" ")[0]} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <Icon
                  name={item.icon}
                  size={26}
                  className={item.accent.split(" ")[1]}
                />
              </div>
              <h3 className="text-lg font-bold text-secondary mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
