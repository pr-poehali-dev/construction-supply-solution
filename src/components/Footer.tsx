import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-secondary py-10 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Wrench" size={18} className="text-white" />
            </div>
            <span className="text-white font-bold text-lg">СтройСнаб</span>
          </div>

          <p className="text-gray-500 text-sm">
            © 2025 СтройСнаб. Удалённый отдел снабжения для строительных
            компаний.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://t.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <Icon name="Send" size={18} className="text-gray-400" />
            </a>
            <a
              href="tel:+78000000000"
              className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <Icon name="Phone" size={18} className="text-gray-400" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
