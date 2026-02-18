import Icon from "@/components/ui/icon";

const advantages = [
  {
    icon: "Clock" as const,
    title: "Стоп-простои",
    description:
      "Берём на себя контроль отгрузок и синхронизацию с графиком работ. Материал приедет ровно тогда, когда он нужен на объекте.",
  },
  {
    icon: "Eye" as const,
    title: "Полная прозрачность",
    description:
      "Вы видите всю цепочку поставщиков и ценообразование. Никаких «левых» откатов и серых схем. Только честная экономия.",
  },
  {
    icon: "TrendingDown" as const,
    title: "Реальная экономия",
    description:
      "Ищем прямые поставки, консолидируем заказы с другими объектами и находим аналоги. Снижаем бюджет закупок в среднем на 15%.",
  },
  {
    icon: "Truck" as const,
    title: "Своя логистика",
    description:
      "Собственный автопарк и проверенные перевозчики. Контролируем каждую доставку от склада до объекта — без потерь и срывов.",
  },
];

const AdvantagesSection = () => {
  return (
    <section id="advantages" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            Преимущества
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary">
            Превращаем хаос в систему
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((item, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <Icon
                  name={item.icon}
                  size={28}
                  className="text-primary"
                />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
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
