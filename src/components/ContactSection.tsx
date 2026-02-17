import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена",
      description: "Мы свяжемся с вами в течение 30 минут",
    });
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-secondary relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          <div className="lg:col-span-2 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-primary" />
              <span className="text-primary text-sm font-bold uppercase tracking-[0.2em]">
                Контакты
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-6">
              Рассчитаем экономию
              <br /> за 1 день
            </h2>
            <p className="text-gray-400 leading-relaxed mb-10 text-sm">
              Пришлите смету или список материалов — мы подготовим КП с расчётом
              экономии для вашего объекта.
            </p>

            <div className="space-y-5">
              <a
                href="tel:+78000000000"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Icon name="Phone" size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wider">Телефон</p>
                  <p className="font-bold text-white text-lg">
                    +7 (800) 000-00-00
                  </p>
                </div>
              </a>

              <a
                href="mailto:info@stroysnab.ru"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Icon name="Mail" size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wider">Email</p>
                  <p className="font-bold text-white text-lg">
                    info@stroysnab.ru
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center shrink-0">
                  <Icon name="Clock" size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wider">Работаем</p>
                  <p className="font-bold text-white text-lg">
                    Пн–Пт: 8:00–20:00
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-8 md:p-10"
            >
              <h3 className="text-xl font-extrabold text-secondary mb-1">
                Оставьте заявку
              </h3>
              <p className="text-muted-foreground text-sm mb-7">
                Ответим в течение 30 минут в рабочее время
              </p>

              <div className="space-y-5">
                <div>
                  <label className="text-sm font-semibold text-secondary mb-2 block">
                    Ваше имя
                  </label>
                  <Input
                    placeholder="Иван Петрович"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="h-12 rounded-xl border-border bg-background"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-secondary mb-2 block">
                    Телефон
                  </label>
                  <Input
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="h-12 rounded-xl border-border bg-background"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-secondary mb-2 block">
                    Что нужно закупить?
                  </label>
                  <Textarea
                    placeholder="Опишите задачу или прикрепите смету на почту"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={4}
                    className="rounded-xl border-border bg-background"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-white font-bold text-base h-14 rounded-xl"
                >
                  <Icon name="Send" size={18} className="mr-2" />
                  Отправить заявку
                </Button>

                <p className="text-[11px] text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
