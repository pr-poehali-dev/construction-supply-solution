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
    gradient: "from-blue-600 to-blue-800",
  },
  {
    object: "Офисный центр, Москва",
    type: "Черновая отделка",
    task: "Срочная замена материалов из-за срыва поставок",
    result: "Нашли и привезли гипсокартон и профиль за 1 день",
    saving: "1 день",
    savingLabel: "вместо недели",
    icon: "Building" as const,
    gradient: "from-primary to-orange-700",
  },
  {
    object: "Складской комплекс",
    type: "Нерудные материалы",
    task: "Поставка песка и щебня по оптимальной цене",
    result: "Консолидировали заказ с соседней стройкой — оптовая цена",
    saving: "20%",
    savingLabel: "экономия на логистике",
    icon: "Warehouse" as const,
    gradient: "from-emerald-600 to-emerald-800",
  },
];

const CasesSection = () => {
  return (
    <section id="cases" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-primary" />
              <span className="text-primary text-sm font-bold uppercase tracking-[0.2em]">
                Кейсы
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-secondary leading-tight">
              Реальные результаты
              <br className="hidden md:block" /> наших клиентов
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((item, index) => (
            <div
              key={index}
              className="group rounded-2xl overflow-hidden bg-white border border-border hover:shadow-2xl hover:shadow-black/5 transition-all duration-500 hover:-translate-y-1"
            >
              <div
                className={`bg-gradient-to-br ${item.gradient} p-6 relative overflow-hidden`}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -translate-x-4 -translate-y-8" />
                <div className="relative flex items-center gap-3">
                  <div className="w-11 h-11 bg-white/15 rounded-xl flex items-center justify-center backdrop-blur-sm">
                    <Icon name={item.icon} size={22} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">{item.object}</p>
                    <p className="text-white/60 text-xs">{item.type}</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <p className="text-[11px] text-muted-foreground uppercase tracking-widest font-bold mb-1.5">
                    Задача
                  </p>
                  <p className="text-foreground text-sm leading-relaxed">
                    {item.task}
                  </p>
                </div>

                <div className="mb-5">
                  <p className="text-[11px] text-muted-foreground uppercase tracking-widest font-bold mb-1.5">
                    Результат
                  </p>
                  <p className="text-foreground text-sm leading-relaxed">
                    {item.result}
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-5 border-t border-border">
                  <div className="w-11 h-11 bg-emerald-50 rounded-xl flex items-center justify-center">
                    <Icon
                      name="TrendingDown"
                      size={20}
                      className="text-emerald-600"
                    />
                  </div>
                  <div>
                    <p className="text-2xl font-black text-emerald-600 leading-none">
                      {item.saving}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
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
