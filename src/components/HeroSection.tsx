import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-64px)]">
        <div className="flex items-center px-6 md:px-12 lg:px-16 py-16 lg:py-0 bg-secondary">
          <div className="max-w-lg mx-auto lg:mx-0">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-8 bg-primary" />
              <span className="text-primary text-sm font-bold uppercase tracking-[0.2em]">
                Снабжение под ключ
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-white leading-[1.1] mb-6">
              Ваш удалённый
              <br />
              <span className="text-primary">отдел снабжения</span>
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-md">
              Мы закупаем стройматериалы дешевле, привозим вовремя и берём на
              себя всю рутину. Вы строите — мы снабжаем.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-12">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-bold text-base px-8 h-14 rounded-xl"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать экономию
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="text-gray-300 hover:text-white hover:bg-white/5 font-semibold text-base px-8 h-14 rounded-xl"
                onClick={() =>
                  document
                    .getElementById("cases")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Кейсы
                <Icon name="ArrowRight" size={18} className="ml-2" />
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div>
                <p className="text-3xl md:text-4xl font-black text-white">15%</p>
                <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">
                  средняя экономия
                </p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-black text-white">50+</p>
                <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">
                  объектов
                </p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-black text-white">24/7</p>
                <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">
                  на связи
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <img
            src="https://cdn.poehali.dev/projects/32ba17cd-163c-48f4-8dc0-be1e3ea4ff81/files/07d586b2-63bf-4799-a076-b9b9f485de8c.jpg"
            alt="Строительная площадка"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-secondary/30" />

          <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shrink-0">
                <Icon name="Truck" size={24} className="text-white" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">Собственная логистика</p>
                <p className="text-white/70 text-xs">
                  Свой автопарк и проверенные перевозчики — контроль каждой доставки
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
