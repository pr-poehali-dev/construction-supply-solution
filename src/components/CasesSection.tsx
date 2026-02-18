import Icon from "@/components/ui/icon";

const cases = [
  {
    object: "Жилой дом, Рязань",
    type: "Фундаментные работы",
    task: "Найти бетон М300 в условиях дефицита",
    result: "Нашли прямого производителя, договорились о скидке за объём",
    saving: "50 000 ₽",
    savingLabel: "экономия",
    icon: "Building2" as const,
  },
  {
    object: "Офисный центр, Москва",
    type: "Черновая отделка",
    task: "Срочная замена стройматериалов из-за срыва поставок",
    result: "Нашли и привезли гипсокартон и профиль за 1 день",
    saving: "1 день",
    savingLabel: "вместо недели",
    icon: "Building" as const,
  },
  {
    object: "Складской комплекс",
    type: "Нерудные материалы",
    task: "Поставка песка и щебня по оптимальной цене",
    result: "Консолидировали заказ с соседней стройкой — оптовая цена",
    saving: "20%",
    savingLabel: "экономия на логистике",
    icon: "Warehouse" as const,
  },
];

const CasesSection = () => {
  return (
    <section id="cases" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            Кейсы
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary">
            Реальные цифры наших клиентов
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-border overflow-hidden hover:shadow-xl hover:shadow-black/5 transition-all duration-300 group"
            >
              <div className="bg-secondary p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                    <Icon
                      name={item.icon}
                      size={20}
                      className="text-primary"
                    />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">
                      {item.object}
                    </p>
                    <p className="text-gray-400 text-xs">{item.type}</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide font-semibold mb-1">
                    Задача
                  </p>
                  <p className="text-foreground text-sm">{item.task}</p>
                </div>

                <div className="mb-5">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide font-semibold mb-1">
                    Результат
                  </p>
                  <p className="text-foreground text-sm">{item.result}</p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
                    <Icon
                      name="TrendingDown"
                      size={18}
                      className="text-green-600"
                    />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-green-600">
                      {item.saving}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {item.savingLabel}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CasesSection;
