import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  UtensilsCrossed, 
  Wine, 
  CalendarCheck, 
  BellRing, 
  QrCode, 
  Star, 
  Flame, 
  Clock, 
  Award,
  TrendingUp,
  CheckCircle2,
  Tag
} from 'lucide-react';
import { useThemeLanguage } from '../context/ThemeLanguageContext.tsx';

interface HeroProps {
  onOpenOrderModal: () => void;
  onOpenDiscountModal: () => void;
  onScrollToTabs: () => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  onOpenOrderModal, 
  onOpenDiscountModal,
  onScrollToTabs 
}) => {
  const { theme, t, lang } = useThemeLanguage();
  const [activeDishMode, setActiveDishMode] = useState<'meat' | 'wine'>('meat');

  return (
    <section className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden">
      {/* Warm Ambient Lights (Warm Amber Honey & Bordeaux Velvet Glow, Zero Blue) */}
      <div className="absolute top-1/4 -left-20 w-[550px] h-[550px] bg-gradient-to-r from-amber-600/15 via-rose-600/10 to-orange-600/15 blur-[140px] rounded-full pointer-events-none"></div>
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-gradient-to-l from-rose-700/15 via-amber-600/10 to-transparent blur-[140px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Asymmetric Split Layout: Left Content, Right Artisanal Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Provocative Culinary Storytelling */}
          <div className="lg:col-span-7 text-left space-y-6">
            {/* Gastronomy Badge */}
            <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold tracking-wider border transition-all duration-300 backdrop-blur-md ${
              theme === 'dark'
                ? 'bg-rose-950/60 border-rose-500/40 text-rose-300'
                : 'bg-rose-50 border-rose-300 text-rose-800 shadow-sm'
            }`}>
              <Flame className="w-3.5 h-3.5 text-orange-400" />
              <span>{t('hero.badge')}</span>
            </div>

            {/* Editorial Headline */}
            <h1 className={`font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] transition-colors ${
              theme === 'dark' ? 'text-white' : 'text-[#1F1612]'
            }`}>
              Nâng Tầm Đẳng Cấp <br />
              <span className="wine-flame-gradient-text">
                Thực Đơn Số & Đặt Bàn VIP
              </span>
            </h1>

            {/* Subtitle */}
            <p className={`text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl transition-colors ${
              theme === 'dark' ? 'text-[#BFAEA4] font-light' : 'text-[#6B564E] font-normal'
            }`}>
              {t('hero.subtitle')}
            </p>

            {/* Action Buttons Cluster */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href="#digital-menu"
                className="px-7 py-4 rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase btn-wine cursor-pointer flex items-center justify-center gap-2 shadow-xl active:scale-95 transition-all"
              >
                <UtensilsCrossed className="w-4 h-4 text-amber-300" />
                <span>Khám Phá Thực Đơn Số 4K</span>
              </a>

              <button
                onClick={onOpenOrderModal}
                className="px-6 py-4 rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase btn-ember cursor-pointer flex items-center justify-center gap-2 shadow-xl active:scale-95 transition-all"
              >
                <Sparkles className="w-4 h-4" />
                <span>Đặt Làm Bản Này (Từ 2,2tr)</span>
              </button>

              <button
                onClick={onOpenDiscountModal}
                className={`px-4 py-4 rounded-xl text-xs font-bold tracking-wider uppercase border transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                  theme === 'dark'
                    ? 'bg-amber-950/40 border-amber-500/40 text-amber-300 hover:bg-amber-950/60'
                    : 'bg-amber-50 border-amber-300 text-amber-900 hover:bg-amber-100'
                }`}
              >
                <Tag className="w-3.5 h-3.5 text-amber-400" />
                <span>Giảm Thêm 20%</span>
              </button>
            </div>

            {/* Compact Horizontal Proof Bar (No 4 generic boxes) */}
            <div className={`p-4 rounded-2xl border flex items-center justify-between flex-wrap gap-4 pt-4 mt-6 ${
              theme === 'dark' ? 'bg-[#181311] border-white/10' : 'bg-[#F5EBE1] border-black/5 shadow-sm'
            }`}>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2 overflow-hidden">
                  <img className="inline-block h-8 w-8 rounded-full ring-2 ring-rose-600 object-cover" src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=150&q=80" alt="Chef" />
                  <img className="inline-block h-8 w-8 rounded-full ring-2 ring-rose-600 object-cover" src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&w=150&q=80" alt="Chef" />
                  <img className="inline-block h-8 w-8 rounded-full ring-2 ring-rose-600 object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" alt="Sommelier" />
                </div>
                <div className="text-left text-xs">
                  <div className="flex items-center gap-1 text-amber-400 font-bold">
                    <span>5.0 ★★★★★</span>
                    <span className="text-slate-400 font-normal">Michelin Rated</span>
                  </div>
                  <div className="text-[11px] text-slate-400">180+ Nhà hàng & Lounge tin dùng</div>
                </div>
              </div>

              <div className="h-8 w-px bg-white/10 hidden sm:block"></div>

              <div className="flex items-center gap-6 text-xs">
                <div>
                  <div className="font-heading font-extrabold text-base text-rose-500">98.5%</div>
                  <div className="text-[10px] text-slate-400 uppercase font-mono">Khách Hài Lòng</div>
                </div>
                <div>
                  <div className="font-heading font-extrabold text-base text-orange-400">&lt; 0.3s</div>
                  <div className="text-[10px] text-slate-400 uppercase font-mono">Quét QR Tải Menu</div>
                </div>
                <div>
                  <div className="font-heading font-extrabold text-base text-emerald-400">+45%</div>
                  <div className="text-[10px] text-slate-400 uppercase font-mono">Doanh Thu Phòng VIP</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Chef's Artisanal Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden culinary-card-featured p-4 border border-rose-500/30 text-left shadow-2xl">
              {/* Table Status Badge */}
              <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
                <span className="px-3 py-1 rounded-full bg-emerald-950/80 text-emerald-300 border border-emerald-500/40 text-[10px] font-mono font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  BÀN VIP 08 • ĐANG PHỤC VỤ LIVE
                </span>
                <span className="text-[11px] font-mono text-amber-400 font-semibold">
                  Tốc độ QR: 0.18s
                </span>
              </div>

              {/* Main Sizzling Plating Visual */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden my-3 group">
                <img 
                  src={activeDishMode === 'meat' 
                    ? "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80"
                    : "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=900&q=80"
                  } 
                  alt="Gourmet Showcase" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Sizzle tag overlay */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/80 text-orange-400 border border-orange-500/40 backdrop-blur-md font-mono flex items-center gap-1">
                  <Flame className="w-3 h-3 text-orange-400" />
                  {activeDishMode === 'meat' ? 'Wagyu A5 Than Binchotan' : 'Hầm Vang Bordeaux 2015'}
                </div>

                <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-xl bg-black/90 text-amber-300 border border-white/20 backdrop-blur-md font-mono text-xs font-bold">
                  {activeDishMode === 'meat' ? '1.650.000 đ' : '28.500.000 đ'}
                </div>
              </div>

              {/* Dish info & Interactive switcher */}
              <div className="space-y-3 pt-1">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveDishMode('meat')}
                    className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                      activeDishMode === 'meat'
                        ? 'bg-rose-700 text-white shadow-md'
                        : 'bg-white/5 text-slate-300 border border-white/10 hover:bg-white/10'
                    }`}
                  >
                    <Flame className="w-3.5 h-3.5" />
                    <span>Món Chính Wagyu</span>
                  </button>

                  <button
                    onClick={() => setActiveDishMode('wine')}
                    className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                      activeDishMode === 'wine'
                        ? 'bg-rose-700 text-white shadow-md'
                        : 'bg-white/5 text-slate-300 border border-white/10 hover:bg-white/10'
                    }`}
                  >
                    <Wine className="w-3.5 h-3.5" />
                    <span>Phối Rượu Vang Đi Kèm</span>
                  </button>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {activeDishMode === 'meat'
                    ? 'Thăn bò Wagyu A5 Miyazaki vân mỡ cẩm thạch BMS 11 nướng trên than trắng Binchotan sồi Nhật Bản.'
                    : 'Château Margaux Premier Grand Cru Classé 2015 hương hoa violet và gỗ sồi Pháp 24 tháng.'}
                </p>

                {/* 1-Tap Table Actions */}
                <div className="pt-2 flex items-center justify-between text-xs border-t border-white/10 text-slate-400">
                  <span className="flex items-center gap-1 text-emerald-400 font-mono">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Đồng bộ Bếp & POS
                  </span>
                  <a href="#digital-menu" className="text-amber-400 font-bold hover:underline">
                    Xem 48 Món Khác →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
