import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const navItems = [
  { label: "Преимущества", href: "#advantages" },
  { label: "Как работаем", href: "#how" },
  { label: "Кейсы", href: "#cases" },
  { label: "Контакты", href: "#contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-secondary/98 backdrop-blur-md shadow-lg shadow-black/10"
          : "bg-secondary"
      }`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center">
            <Icon name="Wrench" size={18} className="text-white" />
          </div>
          <span className="text-white font-extrabold text-lg tracking-tight">
            СтройСнаб
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-0.5">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className="text-gray-400 hover:text-white px-3.5 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-white/5"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            size="sm"
            className="bg-primary hover:bg-primary/90 text-white font-bold rounded-xl px-5"
            onClick={() => scrollTo("#contact")}
          >
            Оставить заявку
          </Button>
        </div>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <Icon name={mobileOpen ? "X" : "Menu"} size={24} />
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-secondary border-t border-white/10">
          <div className="container mx-auto px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className="block w-full text-left text-gray-300 hover:text-white px-3 py-3 text-sm font-medium transition-colors rounded-lg hover:bg-white/5"
              >
                {item.label}
              </button>
            ))}
            <Button
              className="w-full mt-3 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl"
              onClick={() => scrollTo("#contact")}
            >
              Оставить заявку
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
