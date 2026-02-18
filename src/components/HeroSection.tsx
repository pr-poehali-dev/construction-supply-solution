import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://cdn.poehali.dev/projects/32ba17cd-163c-48f4-8dc0-be1e3ea4ff81/files/4b875ce1-b0e4-4085-9a7e-1a5e88db2937.jpg)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-1.5 mb-6">
            <Icon name="Truck" size={16} className="text-primary" />
            <span className="text-primary text-sm font-semibold tracking-wide uppercase">
              Собственная логистика
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Удалённый отдел снабжения для вашей стройки
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-xl">
            Перестаньте отвлекаться на поиск песка и гвоздей. Сосредоточьтесь
            на строительстве, а мы привезём материалы точно в срок и дешевле,
            чем вы купите сами.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-bold text-base px-8 py-6 rounded-lg"
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
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 font-semibold text-base px-8 py-6 rounded-lg"
              onClick={() =>
                document
                  .getElementById("cases")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Смотреть кейсы
              <Icon name="ArrowDown" size={18} className="ml-2" />
            </Button>
          </div>

          <div className="flex items-center gap-8 mt-12 pt-8 border-t border-white/15">
            <div>
              <p className="text-3xl font-bold text-primary">15%</p>
              <p className="text-sm text-gray-400">средняя экономия</p>
            </div>
            <div className="w-px h-10 bg-white/20" />
            <div>
              <p className="text-3xl font-bold text-white">24/7</p>
              <p className="text-sm text-gray-400">на связи</p>
            </div>
            <div className="w-px h-10 bg-white/20" />
            <div>
              <p className="text-3xl font-bold text-white">50+</p>
              <p className="text-sm text-gray-400">объектов</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
