import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-[hsl(220,18%,15%)] py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center">
              <Icon name="Wrench" size={18} className="text-white" />
            </div>
            <span className="text-white font-extrabold text-lg tracking-tight">
              СтройСнаб
            </span>
          </div>

          <p className="text-gray-600 text-sm">
            © 2025 СтройСнаб. Удалённый отдел снабжения для строительных компаний.
          </p>

          <div className="flex items-center gap-3">
            <a
              href="https://t.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all"
            >
              <Icon name="Send" size={17} className="text-gray-500" />
            </a>
            <a
              href="tel:+78000000000"
              className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all"
            >
              <Icon name="Phone" size={17} className="text-gray-500" />
            </a>
            <a
              href="mailto:info@stroysnab.ru"
              className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all"
            >
              <Icon name="Mail" size={17} className="text-gray-500" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
