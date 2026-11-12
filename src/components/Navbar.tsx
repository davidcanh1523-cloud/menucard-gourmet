import React, { useState, useEffect } from 'react';
import { 
  UtensilsCrossed, 
  Wine, 
  CalendarCheck, 
  BellRing, 
  QrCode, 
  Sun, 
  Moon, 
  Globe, 
  Sparkles, 
  Phone, 
  Menu, 
  X, 
  Gift, 
  Clock, 
  Flame, 
  Tag 
} from 'lucide-react';
import { useThemeLanguage } from '../context/ThemeLanguageContext.tsx';

interface NavbarProps {
  onOpenOrderModal: () => void;
  onOpenDiscountModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenOrderModal, onOpenDiscountModal }) => {
  const { theme, toggleTheme, lang, setLang, t } = useThemeLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Notification Badge Bar Matching User Image */}
      <div className={`py-1.5 px-4 text-[11px] sm:text-xs transition-colors duration-300 border-b ${
        theme === 'dark' 
          ? 'bg-[#181311] border-white/10 text-[#BFAEA4]' 
          : 'bg-[#F5EBE1] border-amber-900/10 text-[#6B564E]'
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-2">
          {/* Pills from image */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className={`px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider text-[10px] border ${
              theme === 'dark'
                ? 'bg-rose-950/80 text-rose-300 border-rose-500/40'
                : 'bg-rose-100 text-rose-800 border-rose-300'
            }`}>
              {t('badge.category')}
            </span>
            <span className={`px-2.5 py-0.5 rounded-full font-medium text-[10px] border flex items-center gap-1 ${
              theme === 'dark'
                ? 'bg-emerald-950/70 text-emerald-300 border-emerald-500/40'
                : 'bg-emerald-100 text-emerald-800 border-emerald-300'
            }`}>
              <Clock className="w-3 h-3 text-emerald-400" />
              {t('badge.time')}
            </span>
            <span className={`px-2.5 py-0.5 rounded-full font-medium text-[10px] border flex items-center gap-1 ${
              theme === 'dark'
                ? 'bg-amber-950/70 text-amber-300 border-amber-500/40'
                : 'bg-amber-100 text-amber-800 border-amber-300'
            }`}>
              <Gift className="w-3 h-3 text-amber-400" />
              {t('badge.gift')}
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <a 
              href="tel:0912345678" 
              className="hidden md:flex items-center gap-1.5 hover:text-amber-400 transition-colors"
            >
              <Phone className="w-3 h-3 text-amber-400" />
              <span>{t('nav.hotline')}</span>
            </a>
            
            <button
              onClick={onOpenDiscountModal}
              className="text-amber-400 hover:text-amber-300 font-bold underline cursor-pointer flex items-center gap-1"
            >
              <Tag className="w-3 h-3 text-amber-400" />
              <span>{t('btn.getDiscount')}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Haute Cuisine F&B Navbar */}
      <div className={`px-4 sm:px-6 lg:px-8 transition-all duration-300 backdrop-blur-xl border-b ${
        isScrolled
          ? theme === 'dark'
            ? 'bg-[#120E0D]/95 border-amber-500/20 shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-3'
            : 'bg-[#FCF9F5]/95 border-amber-900/10 shadow-[0_4px_20px_rgba(0,0,0,0.06)] py-3'
          : theme === 'dark'
            ? 'bg-[#120E0D]/85 border-white/5 py-4'
            : 'bg-[#FCF9F5]/85 border-black/5 py-4'
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo with Rich Gastronomy Styling */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 via-rose-600 to-amber-700 p-[1.5px] shadow-[0_0_20px_rgba(234,88,12,0.35)] transition-transform group-hover:scale-105">
              <div className="w-full h-full bg-[#120E0D] rounded-[10px] flex items-center justify-center">
                <UtensilsCrossed className="w-5 h-5 text-amber-400" />
              </div>
            </div>
            <div className="flex flex-col text-left">
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-black text-xl tracking-tight text-white group-hover:text-amber-400 transition-colors">
                  MenuCard
                </span>
                <span className="text-[10px] font-mono font-bold tracking-widest uppercase px-1.5 py-0.5 rounded border bg-rose-950/80 text-rose-300 border-rose-500/40">
                  GOURMET
                </span>
              </div>
              <span className="text-[10px] tracking-wider uppercase text-slate-400 font-mono">
                Smart F&B Digital Platform
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold tracking-wide">
            <a 
              href="#core-tabs" 
              className="hover:text-amber-400 transition-colors py-1 relative group flex items-center gap-1 whitespace-nowrap"
            >
              <span>{t('tab.features')}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all group-hover:w-full"></span>
            </a>
            
            <a 
              href="#digital-menu" 
              className="hover:text-rose-400 transition-colors py-1 relative group flex items-center gap-1.5 whitespace-nowrap"
            >
              <UtensilsCrossed className="w-3.5 h-3.5 text-rose-400" />
              <span>{t('nav.menu')}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-rose-400 transition-all group-hover:w-full"></span>
            </a>

            <a 
              href="#vip-booking" 
              className="hover:text-amber-400 transition-colors py-1 relative group flex items-center gap-1.5 whitespace-nowrap"
            >
              <CalendarCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>{t('nav.booking')}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all group-hover:w-full"></span>
            </a>

            <a 
              href="#manager-push" 
              className="hover:text-emerald-400 transition-colors py-1 relative group flex items-center gap-1.5 whitespace-nowrap"
            >
              <BellRing className="w-3.5 h-3.5 text-emerald-400" />
              <span>{t('nav.notification')}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 transition-all group-hover:w-full"></span>
            </a>

            <a 
              href="#qr-experience" 
              className="hover:text-amber-400 transition-colors py-1 relative group flex items-center gap-1.5 whitespace-nowrap"
            >
              <QrCode className="w-3.5 h-3.5 text-amber-400" />
              <span>{t('nav.qr')}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all group-hover:w-full"></span>
            </a>
          </nav>

          {/* Action cluster: Lang + Theme + CTA Button */}
          <div className="flex items-center gap-2.5">
            {/* Language Switcher */}
            <div className={`flex items-center rounded-lg p-0.5 border text-xs font-semibold ${
              theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'
            }`}>
              <button
                onClick={() => setLang('vi')}
                className={`px-2 py-1 rounded transition-all cursor-pointer ${
                  lang === 'vi' 
                    ? 'bg-rose-700 text-white font-bold shadow-sm' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                VI
              </button>
              <button
                onClick={() => setLang('en')}
                className={`px-2 py-1 rounded transition-all cursor-pointer ${
                  lang === 'en' 
                    ? 'bg-rose-700 text-white font-bold shadow-sm' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                EN
              </button>
            </div>

            {/* Dark / Light Mode Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className={`p-2 rounded-xl border transition-all cursor-pointer ${
                theme === 'dark'
                  ? 'bg-white/5 border-white/10 text-amber-400 hover:bg-white/10'
                  : 'bg-black/5 border-black/10 text-slate-800 hover:bg-black/10'
              }`}
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Primary Order Button */}
            <button
              onClick={onOpenOrderModal}
              className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-xl btn-wine text-xs font-bold uppercase tracking-wider cursor-pointer shadow-lg active:scale-95 transition-all"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t('btn.orderThis')}</span>
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl border border-white/10 text-slate-300"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-white/10 flex flex-col gap-3 pb-3 animate-fadeIn text-left">
            <a 
              href="#core-tabs" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-white/5 text-sm"
            >
              {t('tab.features')}
            </a>
            <a 
              href="#digital-menu" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-white/5 text-sm flex items-center gap-2"
            >
              <UtensilsCrossed className="w-4 h-4 text-rose-400" />
              {t('nav.menu')}
            </a>
            <a 
              href="#vip-booking" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-white/5 text-sm flex items-center gap-2"
            >
              <CalendarCheck className="w-4 h-4 text-amber-400" />
              {t('nav.booking')}
            </a>
            <a 
              href="#manager-push" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-white/5 text-sm flex items-center gap-2"
            >
              <BellRing className="w-4 h-4 text-emerald-400" />
              {t('nav.notification')}
            </a>
            <a 
              href="#qr-experience" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-white/5 text-sm flex items-center gap-2"
            >
              <QrCode className="w-4 h-4 text-amber-400" />
              {t('nav.qr')}
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenOrderModal();
              }}
              className="w-full mt-2 py-3 rounded-xl btn-wine text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>{t('btn.orderThis')}</span>
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
