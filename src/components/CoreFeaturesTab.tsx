import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Layers, 
  ShieldCheck, 
  Eye, 
  ArrowRight,
  Gift, 
  Server, 
  Code2, 
  Cpu, 
  Lock, 
  Zap, 
  Smartphone,
  ExternalLink,
  X,
  Tag,
  Clock,
  Sparkles,
  UtensilsCrossed,
  CalendarCheck,
  BellRing,
  QrCode,
  Flame
} from 'lucide-react';
import { useThemeLanguage } from '../context/ThemeLanguageContext.tsx';

interface CoreFeaturesTabProps {
  onOpenOrderModal: () => void;
  onOpenDiscountModal: () => void;
  onScrollToMenu: () => void;
  onScrollToBooking: () => void;
  onScrollToPush: () => void;
  onScrollToQr: () => void;
}

export const CoreFeaturesTab: React.FC<CoreFeaturesTabProps> = ({
  onOpenOrderModal,
  onOpenDiscountModal,
  onScrollToMenu,
  onScrollToBooking,
  onScrollToPush,
  onScrollToQr
}) => {
  const { theme, t, lang } = useThemeLanguage();
  const [activeTab, setActiveTab] = useState<'demo' | 'features' | 'architecture'>('features');
  const [activeDemoImg, setActiveDemoImg] = useState(0);

  const demoVisuals = [
    {
      title: lang === 'vi' ? 'Thực Đơn Số Tương Tác Đa Giác Quan Trên iPhone 16 Pro' : 'Interactive Digital Haute Cuisine Menu on iPhone',
      tag: 'Digital Menu 60 FPS',
      url: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=85',
      desc: lang === 'vi' ? 'Hình ảnh món ăn 4K, chi tiết vân mỡ Wagyu A5, ghi chú nguồn gốc nguyên liệu và gợi ý phối rượu vang (wine pairing).' : '4K culinary photography with marble score BMS 11 Wagyu details and curated sommelier pairings.'
    },
    {
      title: lang === 'vi' ? 'Phòng Tiệc Hầm Vang Cổ & Đặt Bàn VIP Riêng Biệt' : 'Vintage Wine Cellar VIP Dining Chamber',
      tag: 'VIP Private Dining',
      url: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=85',
      desc: lang === 'vi' ? 'Sơ đồ đặt phòng tiệc riêng sức chứa 6-18 khách, dàn âm thanh Bang & Olufsen và butler phục vụ riêng.' : 'Interactive private banquet room selector with 1,200+ vintage wine cellar collection.'
    },
    {
      title: lang === 'vi' ? 'Đế Mã QR Khắc Kim Loại Tại Bàn & Gọi Phục Vụ 1 Chạm' : 'Tabletop Bronze QR Stand with 1-Tap Service Call',
      tag: 'Tabletop QR Experience',
      url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85',
      desc: lang === 'vi' ? 'Khách quét mã QR siêu tốc 0.2s không cần cài app, tự động định danh Bàn VIP và đồng bộ thẳng về bếp.' : 'Zero-latency tabletop QR scan, auto table identification, and real-time kitchen sync.'
    }
  ];

  return (
    <section id="core-tabs" className={`py-16 relative overflow-hidden border-y transition-colors duration-300 ${
      theme === 'dark' 
        ? 'bg-[#120E0D] border-amber-900/20' 
        : 'bg-[#F7F2EB] border-amber-900/10'
    }`}>
      {/* Background warm culinary ambient lighting (No Blue) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] bg-gradient-to-r from-amber-600/10 via-rose-600/10 to-orange-600/10 blur-[130px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Modal/Section Card Container replicating Exact Image */}
        <div className={`rounded-3xl p-6 sm:p-10 border transition-all duration-300 ${
          theme === 'dark'
            ? 'bg-[#181311]/95 border-amber-500/20 shadow-[0_25px_70px_rgba(0,0,0,0.85)]'
            : 'bg-white border-amber-900/15 shadow-2xl'
        }`}>
          {/* Top Badges Exactly As Image */}
          <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
            <div className="inline-flex flex-wrap items-center gap-2">
              <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${
                theme === 'dark'
                  ? 'bg-rose-950/80 text-rose-300 border-rose-500/40'
                  : 'bg-rose-100 text-rose-800 border-rose-300'
              }`}>
                {t('badge.category')}
              </span>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold border flex items-center gap-1 ${
                theme === 'dark'
                  ? 'text-emerald-300 bg-emerald-950/70 border-emerald-500/40'
                  : 'text-emerald-800 bg-emerald-50 border-emerald-300 font-bold'
              }`}>
                <Clock className="w-3.5 h-3.5 text-emerald-400" />
                {t('badge.time')}
              </span>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold border flex items-center gap-1 ${
                theme === 'dark'
                  ? 'text-amber-300 bg-amber-950/70 border-amber-500/40'
                  : 'text-amber-800 bg-amber-50 border-amber-300 font-bold'
              }`}>
                <Gift className="w-3.5 h-3.5 text-amber-400" />
                {t('badge.gift')}
              </span>
            </div>

            {/* Close Button X icon as in modal mockup */}
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Scroll to top"
              className="p-1.5 rounded-full border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Main Title & Subtitle Exactly As Image */}
          <div className="mb-8 text-left">
            <h2 className={`font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-3 transition-colors ${
              theme === 'dark' ? 'text-white' : 'text-[#1F1612]'
            }`}>
              {t('core.title')}
            </h2>
            <p className={`text-sm sm:text-base leading-relaxed ${
              theme === 'dark' ? 'text-[#BFAEA4] font-light' : 'text-[#6B564E] font-normal'
            }`}>
              {t('core.subtitle')}
            </p>
          </div>

          {/* 3 Tabs Exactly As Image */}
          <div className={`flex items-center border-b mb-8 overflow-x-auto ${
            theme === 'dark' ? 'border-white/10' : 'border-slate-200'
          }`}>
            <button
              onClick={() => setActiveTab('demo')}
              className={`pb-3.5 px-4 text-xs sm:text-sm font-semibold whitespace-nowrap transition-all border-b-2 cursor-pointer flex items-center gap-2 ${
                activeTab === 'demo'
                  ? 'border-amber-400 text-amber-400'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <Eye className="w-4 h-4" />
              <span>{t('tab.demo')}</span>
            </button>

            <button
              onClick={() => setActiveTab('features')}
              className={`pb-3.5 px-4 text-xs sm:text-sm font-semibold whitespace-nowrap transition-all border-b-2 cursor-pointer flex items-center gap-2 ${
                activeTab === 'features'
                  ? 'border-rose-500 text-rose-400 font-bold'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>{t('tab.features')}</span>
            </button>

            <button
              onClick={() => setActiveTab('architecture')}
              className={`pb-3.5 px-4 text-xs sm:text-sm font-semibold whitespace-nowrap transition-all border-b-2 cursor-pointer flex items-center gap-2 ${
                activeTab === 'architecture'
                  ? 'border-amber-400 text-amber-400'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>{t('tab.architecture')}</span>
            </button>
          </div>

          {/* Tab 2 (Active by Default in Image): Quy trình & Tính năng cốt lõi */}
          {activeTab === 'features' && (
            <div className="space-y-8 animate-fadeIn text-left">
              <div className="flex items-center justify-between">
                <h3 className={`text-sm sm:text-base font-bold ${
                  theme === 'dark' ? 'text-white' : 'text-slate-900'
                }`}>
                  {t('features.label')}
                </h3>
                <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> 100% Production Certified
                </span>
              </div>

              {/* 4 Feature Cards (2x2 Grid) Exactly matching image */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Feature 1 */}
                <div 
                  onClick={onScrollToMenu}
                  className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer group ${
                    theme === 'dark' 
                      ? 'bg-white/[0.03] border-white/10 hover:border-rose-500/60 hover:bg-white/[0.06]' 
                      : 'bg-[#FBF6EE] border-amber-900/10 hover:border-rose-500 hover:bg-white shadow-sm'
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    <div className="mt-0.5 w-6 h-6 rounded-full bg-rose-500/10 border border-rose-400/40 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-rose-400" />
                    </div>
                    <div className="space-y-1.5 flex-1">
                      <h4 className={`text-sm sm:text-base font-semibold leading-snug group-hover:text-rose-400 transition-colors ${
                        theme === 'dark' ? 'text-white' : 'text-slate-900'
                      }`}>
                        {t('feature.1.title')}
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {t('feature.1.desc')}
                      </p>
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-rose-400 pt-1 group-hover:translate-x-1 transition-transform">
                        {t('feature.1.action')}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Feature 2 */}
                <div 
                  onClick={onScrollToBooking}
                  className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer group ${
                    theme === 'dark' 
                      ? 'bg-white/[0.03] border-white/10 hover:border-amber-400/60 hover:bg-white/[0.06]' 
                      : 'bg-[#FBF6EE] border-amber-900/10 hover:border-amber-500 hover:bg-white shadow-sm'
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    <div className="mt-0.5 w-6 h-6 rounded-full bg-amber-500/10 border border-amber-400/40 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-amber-400" />
                    </div>
                    <div className="space-y-1.5 flex-1">
                      <h4 className={`text-sm sm:text-base font-semibold leading-snug group-hover:text-amber-400 transition-colors ${
                        theme === 'dark' ? 'text-white' : 'text-slate-900'
                      }`}>
                        {t('feature.2.title')}
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {t('feature.2.desc')}
                      </p>
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-amber-400 pt-1 group-hover:translate-x-1 transition-transform">
                        {t('feature.2.action')}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Feature 3 */}
                <div 
                  onClick={onScrollToPush}
                  className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer group ${
                    theme === 'dark' 
                      ? 'bg-white/[0.03] border-white/10 hover:border-emerald-400/60 hover:bg-white/[0.06]' 
                      : 'bg-[#FBF6EE] border-amber-900/10 hover:border-emerald-500 hover:bg-white shadow-sm'
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    <div className="mt-0.5 w-6 h-6 rounded-full bg-emerald-500/10 border border-emerald-400/40 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div className="space-y-1.5 flex-1">
                      <h4 className={`text-sm sm:text-base font-semibold leading-snug group-hover:text-emerald-400 transition-colors ${
                        theme === 'dark' ? 'text-white' : 'text-slate-900'
                      }`}>
                        {t('feature.3.title')}
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {t('feature.3.desc')}
                      </p>
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-400 pt-1 group-hover:translate-x-1 transition-transform">
                        {t('feature.3.action')}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Feature 4 */}
                <div 
                  onClick={onScrollToQr}
                  className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer group ${
                    theme === 'dark' 
                      ? 'bg-white/[0.03] border-white/10 hover:border-orange-400/60 hover:bg-white/[0.06]' 
                      : 'bg-[#FBF6EE] border-amber-900/10 hover:border-orange-500 hover:bg-white shadow-sm'
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    <div className="mt-0.5 w-6 h-6 rounded-full bg-orange-500/10 border border-orange-400/40 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-orange-400" />
                    </div>
                    <div className="space-y-1.5 flex-1">
                      <h4 className={`text-sm sm:text-base font-semibold leading-snug group-hover:text-orange-400 transition-colors ${
                        theme === 'dark' ? 'text-white' : 'text-slate-900'
                      }`}>
                        {t('feature.4.title')}
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {t('feature.4.desc')}
                      </p>
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-orange-400 pt-1 group-hover:translate-x-1 transition-transform">
                        {t('feature.4.action')}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 1: Demo & Trực quan (3) */}
          {activeTab === 'demo' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex items-center gap-2 overflow-x-auto pb-2">
                {demoVisuals.map((demo, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveDemoImg(idx)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                      activeDemoImg === idx
                        ? 'bg-rose-700 text-white font-bold shadow-md'
                        : 'bg-white/5 text-slate-400 hover:text-white'
                    }`}
                  >
                    {demo.tag}
                  </button>
                ))}
              </div>

              <div className="rounded-2xl overflow-hidden border border-white/10 bg-black/40">
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <img 
                    src={demoVisuals[activeDemoImg].url} 
                    alt={demoVisuals[activeDemoImg].title}
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6 text-left">
                    <span className="text-xs font-bold uppercase tracking-wider text-rose-400 mb-1 font-mono">
                      {demoVisuals[activeDemoImg].tag}
                    </span>
                    <h4 className="text-lg sm:text-2xl font-bold font-heading text-white mb-2">
                      {demoVisuals[activeDemoImg].title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
                      {demoVisuals[activeDemoImg].desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Kiến trúc & Bảo mật */}
          {activeTab === 'architecture' && (
            <div className="space-y-6 animate-fadeIn text-left">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
                  <Cpu className="w-6 h-6 text-orange-400" />
                  <h4 className="text-sm font-bold text-white">Kiến Trúc Micro-Latency</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Công nghệ Edge Server Global tải toàn bộ thực đơn dưới 0.3s ngay cả khi có 500 khách quét mã QR cùng một lúc tại nhà hàng.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
                  <Lock className="w-6 h-6 text-emerald-400" />
                  <h4 className="text-sm font-bold text-white">Bảo Mật Thông Tin Khách VIP</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Toàn bộ số điện thoại, danh tính khách VIP và thông tin đặt bàn được mã hóa AES-256 đầu cuối, tuân thủ nghiêm ngặt bảo mật dữ liệu.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
                  <Code2 className="w-6 h-6 text-amber-400" />
                  <h4 className="text-sm font-bold text-white">Bàn Giao 100% Mã Nguồn</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Chủ nhà hàng toàn quyền sở hữu trọn vẹn source code, tự do tùy biến thêm món ăn, chỉnh sửa giá tiền mà không bị phụ thuộc sàn trung gian.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Gift Box Exactly As Image */}
          <div className="mt-8 rounded-2xl p-4 sm:p-5 border border-emerald-500/40 bg-emerald-950/20 text-emerald-300 text-left">
            <div className="flex items-center gap-2 mb-3">
              <Gift className="w-5 h-5 text-emerald-400" />
              <span className="text-xs sm:text-sm font-bold tracking-wide uppercase">
                {t('gift.heading')}
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{t('gift.item1')}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{t('gift.item2')}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{t('gift.item3')}</span>
              </div>
            </div>
          </div>

          {/* Bottom Action & Pricing Bar EXACTLY MATCHING USER'S NEW IMAGE */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Left Pricing */}
            <div className="flex items-baseline gap-3">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                {t('pricing.label')}
              </span>
              <span className="text-2xl sm:text-3xl font-heading font-black text-orange-400 tracking-tight">
                {t('pricing.price')}
              </span>
            </div>

            {/* Right Action Buttons */}
            <div className="flex items-center flex-wrap gap-2.5 w-full md:w-auto justify-end">
              <a
                href="#digital-menu"
                className="px-4 py-2.5 rounded-xl border border-white/20 text-xs font-semibold text-slate-200 hover:bg-white/10 hover:border-orange-400 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <ExternalLink className="w-3.5 h-3.5 text-orange-400" />
                <span>{t('btn.liveDemo')}</span>
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/10 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <Code2 className="w-3.5 h-3.5 text-slate-400" />
                <span>{t('btn.sourceCode')}</span>
              </a>

              <button
                onClick={onOpenDiscountModal}
                className="px-4 py-2.5 rounded-xl border border-amber-500/50 bg-amber-500/10 text-xs font-bold text-amber-300 hover:bg-amber-500/20 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <Tag className="w-3.5 h-3.5 text-amber-400" />
                <span>{t('btn.getDiscount')}</span>
              </button>

              <button
                onClick={onOpenOrderModal}
                className="px-5 py-2.5 rounded-xl btn-wine text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-lg active:scale-95 transition-all"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t('btn.orderThis')}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
